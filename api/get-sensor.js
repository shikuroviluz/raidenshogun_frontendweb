import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export function Get_sensor() {
  // Inisialisasi klien Supabase menggunakan package resmi
  const supabaseUrl = 'https://qoodxfjgvowxtnrnvjmd.supabase.co';
  const supabaseKey = 'sb_publishable_dhqvoaf37Vr-PlFLhEEOaQ__rFgQvGL';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [sensor, setSensor] = useState({
        ph: "Memuat...",
        tds: "Memuat...",
        suhu: "Memuat..."
    });

    useEffect(() => {
        const ambilData = async () => {
            try {
                // Mengambil 1 data terbaru menggunakan syntax resmi Supabase
                const { data, error } = await supabase
                    .from('sensor_logs')
                    .select('*')
                    .order('id', { ascending: false })
                    .limit(1);

                if (error) {
                    throw error;
                }

                if (data && data.length > 0) {
                    setSensor({
                        ph: data[0].ph,
                        tds: data[0].tds + " ppm",
                        suhu: data[0].suhu + " °C"
                    });
                } else {
                    setSensor({
                        ph: "Kosong",
                        tds: "Kosong",
                        suhu: "Kosong"
                    });
                }
            } catch (error) {
                console.error("Gagal mengambil data dari Supabase:", error.message);
            }
        };

        // Ambil data pertama kali saat komponen dibuka
        ambilData();

        // Set interval untuk refresh otomatis setiap 5 detik
        const interval = setInterval(ambilData, 5000);

        // Bersihkan interval saat komponen ditutup
        return () => clearInterval(interval);
    }, []);

    return sensor;
}