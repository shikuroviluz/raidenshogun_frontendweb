import { Link } from "react-router-dom";
import profile_yaemiko from "../media/char/yaemiko_profile.jpg"
import pict_yaemiko from "../media/char/yaemiko_pict.jpg"
function About_yaemiko (){
    return(
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="w-full bg-white text-white">
            <div className="inset-0">
                <div className="inset-0 flex flex-col p-6 gap-4">
                    <div className="flex flex-col p-4 bg-gradient-to-l from-pink-600 to-pink-950 rounded-2xl max-w-7xl w-full mx-auto">
                        <div className="grid grid-cols-2 ">
                            <div className="flex flex-col justify-center text-white">
                                <Link to="/App_raiden/" className="mb-2">
                                    <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                        cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                    <h1 className="p-2">Back to home</h1>
                                    </div>
                                </Link>
                                <h1 className="text-[15px]">About</h1>
                                <h1 className="text-[30px] font-genshin mt-auto">Yae Miko</h1>
                                <h1 className="text-[15px]">Guuji of the Grand Narukami Shrine • Owner Yae Publishing House</h1>
                                <p className="italic mb-auto">
                                    "Yae Miko adalah kepala pendeta (Guuji) dari Grand Narukami Shrine di Inazuma. Ia dikenal sangat cerdas, licik, 
                                    dan memiliki selera humor yang tajam. Selain sebagai pendeta, ia juga merupakan pemimpin dari Yae Publishing House, 
                                    sebuah perusahaan penerbitan novel populer di Inazuma. Ia adalah teman lama sekaligus familiar dari Raiden Shogun 
                                    (Ei) dan sudah hidup selama ratusan tahun sebagai yokai kitsune."
                                </p>
                                <div className="flex flex-row justify-between">
                                    <h1>Born 27 Juni • Inazuma</h1>
                                    <h1>Vision • Electro</h1>
                                    <h1>Ras • Kitsune (Yokai rubah)</h1>
                                </div>
                            </div>
                            <div className="flex justify-end items-center p-4 my-10">
                                <img src={profile_yaemiko} alt="pp yaemiko" className="w-65 h-65 rounded-2xl"/>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-white rounded-2xl"></div>
                        <br />
                        <br />
                        <div className="flex flex-row">
                            <div className="flex flex-col w-1/2">
                                <h1 className="text-[20px] font-genshin">Biodata singkat</h1>
                                <h1>Nama</h1>
                                <h1>Julukan / Gelar</h1>
                                <h1>Tanggal lahir</h1>
                                <h1>Ras</h1>
                                <h1>Jenis kelamin</h1>
                                <h1>Vision</h1>
                                <h1>Senjata</h1>
                                <h1>Region</h1>
                                <h1>Afiliasi</h1>
                            </div>
                            <div className="flex flex-col w-full">
                                <h1 className="text-[20px] font-genshin text-justify indent-10">_ _ _</h1>
                                <h1>: Yae Miko</h1>
                                <h1>: Guuji of the Grand Narukami Shrine</h1>
                                <h1>: 27 Juni</h1>
                                <h1>: Kitsune (Yokai rubah)</h1> 
                                <h1>: Perempuan</h1>
                                <h1>: Electro </h1>
                                <h1>: Catalyst</h1>
                                <h1>: Inazuma</h1>
                                <h1>: Grand Narukami Shrine & Yae Publishing House</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex items-center justify-end w-full h-70 overflow-hidden rounded-2xl">
                            <img src={pict_yaemiko} alt="yaemiko" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="w-full bg-white text-white">
            <div className="inset-0">
                <div className="inset-0 flex flex-col p-6 gap-4">
                    <div className="flex flex-col p-4 bg-gradient-to-l from-pink-600 to-pink-950 rounded-2xl w-full mx-auto">
                        <div className="grid grid-cols-2 ">
                            <div className="flex flex-col justify-center text-white">
                                <Link to="/App_raiden/" className="mb-2">
                                    <div className="w-fit h-8 bg-[#525354] rounded-xl text-[10px] flex items-center justify-center text-white 
                                        cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                    <h1 className="p-2">Back to home</h1>
                                    </div>
                                </Link>
                                <h1 className="text-[10px]">About</h1>
                                <h1 className="text-[20px] font-genshin mt-auto">Yae Miko</h1>
                                <h1 className="text-[10px]">Guuji of the Grand Narukami Shrine • Owner Yae Publishing House</h1>
                                <p className="italic mb-auto text-[9px]">
                                    "Yae Miko adalah kepala pendeta (Guuji) dari Grand Narukami Shrine di Inazuma. Ia dikenal sangat cerdas, licik, 
                                    dan memiliki selera humor yang tajam. Selain sebagai pendeta, ia juga merupakan pemimpin dari Yae Publishing House, 
                                    sebuah perusahaan penerbitan novel populer di Inazuma. Ia adalah teman lama sekaligus familiar dari Raiden Shogun 
                                    (Ei) dan sudah hidup selama ratusan tahun sebagai yokai kitsune."
                                </p>
                                <br />
                                <div className="flex flex-row justify-between text-[8px]">
                                    <h1>Born 27 Juni Inazuma</h1>
                                    <h1>Vision Electro</h1>
                                    <h1>Ras Kitsune (Yokai rubah)</h1>
                                </div>
                            </div>
                            <div className="flex justify-end p-4 my-10">
                                <img src={profile_yaemiko} alt="pp yaemiko" className="w-30 h-30 rounded-2xl"/>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-white rounded-2xl"></div>
                        <br />
                        <br />
                        <div className="flex flex-row">
                            <div className="flex flex-col w-1/2 text-[10px]">
                                <h1 className="font-genshin">Biodata singkat</h1>
                                <h1>Nama</h1>
                                <h1>Julukan / Gelar</h1>
                                <h1>Tanggal lahir</h1>
                                <h1>Ras</h1>
                                <h1>Jenis kelamin</h1>
                                <h1>Vision</h1>
                                <h1>Senjata</h1>
                                <h1>Region</h1>
                                <h1>Afiliasi</h1>
                            </div>
                            <div className="flex flex-col w-full text-[10px]">
                                <h1 className="font-genshin text-justify indent-10">_ _ _</h1>
                                <h1>: Yae Miko</h1>
                                <h1>: Guuji of the Grand Narukami Shrine</h1>
                                <h1>: 27 Juni</h1>
                                <h1>: Kitsune (Yokai rubah)</h1> 
                                <h1>: Perempuan</h1>
                                <h1>: Electro </h1>
                                <h1>: Catalyst</h1>
                                <h1>: Inazuma</h1>
                                <h1>: Grand Narukami Shrine & Yae Publishing House</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex items-center w-full h-30 overflow-hidden rounded-2xl">
                            <img src={pict_yaemiko} alt="yaemiko" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default About_yaemiko;