import { Link } from "react-router-dom";
import Pict_Parkjiyoon from "../../public/assets/profile/profile_va/Park_Jiyoon.jpg";
import img1 from "../media/poster/genshin_impact.jpg";
import img2 from "../media/poster/dragon_ball.jpg";
function Parkjiyoon(){
    return(
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full bg-white text-white min-h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col p-6 items-center gap-4">
                    <div className="grid grid-cols-2 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl max-w-7xl w-full">
                        <div className="flex flex-col justify-center p-4 text-white">
                            <Link to="/App_raiden/" className="mb-2">
                                <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                    cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                <h1 className="p-2">Back to home</h1>
                                </div>
                            </Link>

                            <h1 className="text-[15px] mb-auto">Biograpy</h1>
                            <h1 className="text-4xl font-genshin">Park Ji-yoon</h1>
                            <h1 className="text-[15px]">Voice actress / dubber</h1>
                            <p className="italic">
                                "pengisi suara asal Korea Selatan yang mengisi suara Raiden Shogun dalam versi bahasa Korea di 
                                Genshin Impact. Ia dikenal memiliki suara yang tegas dan elegan, sehingga sering memerankan 
                                karakter wanita dewasa yang berwibawa dalam berbagai proyek dubbing animasi, film, dan game."
                            </p>
                            <div className="flex flex-row mt-auto gap-10">
                                <h1 className="text-[15px] mt-auto">Born April 17 1978 · Seoul, South Korea</h1>
                                <h1 className="text-[15px] mt-auto">Height 	163 m</h1>
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <img src={Pict_Parkjiyoon} alt="foto profile" className="m-4 rounded-2xl w-42 h-50 "/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between max-w-7xl w-full">
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[630px]">
                            <div className="p-4 flex flex-col">
                                <h1>Latar belakang : </h1>
                                <h1>- Mengisi suara animasi Jepang yang didubbing ke bahasa Korea</h1>
                                <h1>- film dan serial luar negeri</h1>
                                <h1>- video game</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[630px]">
                            <div className="p-4 flex flex-col">
                                <h1>Karya terkenal : </h1>
                                <h1>- Voice Actor Raiden Shogun (Genshin Impact)</h1>
                                <h1>- Voice Actor Bulma (Dragon Ball)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[500px] flex justify-center">
                        <div className="w-[500px] relative p-2">
                            <div className="text-center font-bold mb-1">Mengisi suara di beberapa anime dan game terkenal seperti</div>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={img1} alt="genshin_impact" className="poster hover:scale-105 transition duration-300 cursor-pointer"/>
                                <img src={img2} alt="genshin_impact" className="poster hover:scale-105 transition duration-300 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="relative w-full bg-white text-white min-h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col p-2 items-center gap-4">
                    <div className="grid grid-cols-2 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-full">
                        <div className="flex flex-col justify-center p-2 text-white">
                            <Link to="/App_raiden/" className="mb-2">
                                <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                    cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                <h1 className="p-2">Back to home</h1>
                                </div>
                            </Link>

                            <h1 className="text-[15px] mb-auto">Biograpy</h1>
                            <h1 className="text-[15px] font-genshin">Park Ji-yoon</h1>
                            <h1 className="text-[10px]">Voice actress / dubber</h1>
                            <p className="italic text-[8px] py-4">
                                "pengisi suara asal Korea Selatan yang mengisi suara Raiden Shogun dalam versi bahasa Korea di 
                                Genshin Impact. Ia dikenal memiliki suara yang tegas dan elegan, sehingga sering memerankan 
                                karakter wanita dewasa yang berwibawa dalam berbagai proyek dubbing animasi, film, dan game."
                            </p>
                            <div className="flex flex-row mt-auto gap-10 text-[8px]">
                                <h1 className=" mt-auto">Born April 17 1978 · Seoul, South Korea</h1>
                                <h1 className=" mt-auto">Height 163 m</h1>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={Pict_Parkjiyoon} alt="foto profile" className="scale-75 rounded-2xl"/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full gap-2">
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-1/2">
                            <div className="p-4 flex flex-col text-[10px]">
                                <h1>Latar belakang : </h1>
                                <h1>- Mengisi suara animasi Jepang yang didubbing ke bahasa Korea</h1>
                                <h1>- film dan serial luar negeri</h1>
                                <h1>- video game</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-1/2">
                            <div className="p-4 flex flex-col text-[10px]">
                                <h1>Karya terkenal : </h1>
                                <h1>- Voice Actor Raiden Shogun (Genshin Impact)</h1>
                                <h1>- Voice Actor Bulma (Dragon Ball)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-full mx-auto slide-wrapper">
                        <div className="w-full justify-center relative p-2">
                            <div className="text-center font-bold mb-1">Mengisi suara di beberapa anime dan game terkenal seperti</div>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={img1} alt="genshin_impact" className="poster_mobile hover:scale-105 transition duration-300 cursor-pointer"/>
                                <img src={img2} alt="genshin_impact" className="poster_mobile hover:scale-105 transition duration-300 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Parkjiyoon;