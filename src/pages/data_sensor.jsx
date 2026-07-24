import { useState, useEffect } from 'react';
import { Get_sensor } from '../../api/get-sensor';
import { Delete_data } from '../../api/delete-sensor';
import { Link } from "react-router-dom";

export default function DataSensor() {
    
    const sensor = Get_sensor();
    const { hapusSemuaData } = Delete_data();
    // 1. Ambil status dari localStorage saat halaman pertama kali dibuka
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "12345";

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("status_login") === "true";
    });
    
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLoginLokal = (e) => {
        e.preventDefault();
        
        if (inputUser === ADMIN_USER && inputPass === ADMIN_PASS) {
            setIsLoggedIn(true);
            // 2. Simpan status ke localStorage saat berhasil login
            localStorage.setItem("status_login", "true");
            setErrorMsg('');
        } else {
            setErrorMsg("Username atau Password salah!");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // 3. Hapus status dari localStorage saat logout
        localStorage.removeItem("status_login");
        setInputUser('');
        setInputPass('');
    };

    if (!isLoggedIn) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-black border">
                    <h2 className="text-2xl font-bold mb-2 text-center">Login Sensor</h2>
                    <p className="text-sm text-gray-500 mb-6 text-center">Masukkan akun lokal untuk mengakses.</p>
                    
                    {errorMsg && (
                        <div className="bg-red-100 text-red-600 p-2 mb-4 rounded text-sm text-center">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleLoginLokal} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Username</label>
                            <input 
                                type="text" 
                                value={inputUser} 
                                onChange={(e) => setInputUser(e.target.value)} 
                                required
                                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Masukkan username"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input 
                                type="password" 
                                value={inputPass} 
                                onChange={(e) => setInputPass(e.target.value)} 
                                required
                                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Masukkan password"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-700 text-white p-2 rounded font-bold
                                      cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-yellow-300 hover:bg-blue-400"
                        >
                            Masuk
                        </button>
                        <Link to="/" className="">
                            <div className="w-full px-4 h-10 bg-blue-700 rounded text-[15px] flex items-center justify-center text-white font-bold 
                                            cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-yellow-300 hover:bg-blue-400">
                                            Kembali
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="hidden md:block">
            <div className="flex justify-center p-4">
                <div className="text-black bg-blue-500 w-full p-4 rounded-lg">
                    
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-white font-semibold">Status: Berhasil Masuk</span>
                        <button 
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>

                    <h1 className="text-xl font-bold">Monitoring Sensor Real-time</h1>
                    
                    <div className="card bg-white p-3 m-2 rounded text-black">
                        <h3>pH Air</h3>
                        <p>{sensor.ph}</p>
                    </div>
                    
                    <div className="card bg-white p-3 m-2 rounded text-black">
                        <h3>TDS</h3>
                        <p>{sensor.tds}</p>
                    </div>
                    
                    <div className="card bg-white p-3 m-2 rounded text-black">
                        <h3>Suhu</h3>
                        <p>{sensor.suhu}</p>
                    </div>

                    <div className="p-2">
                        <button 
                            onClick={() => hapusSemuaData()}
                            className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                            🗑️ Reset / Hapus Semua Data
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    );
}