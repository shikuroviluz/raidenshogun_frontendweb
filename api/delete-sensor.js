import { createClient } from '@supabase/supabase-js';

export function Delete_data() {
    const supabaseUrl = 'https://qoodxfjgvowxtnrnvjmd.supabase.co';
    const supabaseKey = 'sb_publishable_dhqvoaf37Vr-PlFLhEEOaQ__rFgQvGL';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const hapusSemuaData = async () => {
        const konfirmasi = window.confirm("Yakin ingin menghapus seluruh riwayat data sensor?");
        if (!konfirmasi) return;

        try {
            const { error } = await supabase
                .from('sensor_logs')
                .delete()
                .neq('id', 0); 

            if (error) throw error;

            alert("Semua data berhasil direset/dihapus!");
            window.location.reload(); 
        } catch (error) {
            console.error("Gagal menghapus data:", error.message);
            alert("Terjadi kesalahan saat menghapus data.");
        }
    };

    // PERBAIKAN: Kembalikan fungsi hapusSemuaData
    return { hapusSemuaData };
}