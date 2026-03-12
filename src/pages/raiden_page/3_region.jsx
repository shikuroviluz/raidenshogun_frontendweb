import background3 from "../../media/background/background_dekstop3.png"
import electroculus3 from "../../../public/assets/electroculus.png"
import inazuma from "../../media/background/inazuma_background.png"
import japan from "../../media/background/japan_background.jpg"
import { Link } from "react-router-dom";
function Region() {
    return(
    <>
    {/* ---tampilan dekstop--- */}
        <div className="hidden md:block" >
            <div className="relative w-full h-full my-auto" >
                <img src={background3} alt="background page3" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-l from-[#310056]/85 to-transparent" data-aos="fade-left" data-aos-duration="1000"></div>
                <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-t from-transparent to-[#310056]"></div>
                <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
                <div className="absolute inset-0 z-10 flex items-center px-10">
                    <div className="flex flex-col ml-auto">
                        <div className="text-white max-w-xl ml-auto">
                            <div className="text-right text-4xl mb-4 font-genshin" data-aos="fade-left" data-aos-duration="1600">Region Authority</div>
                            <div className="text-right text-[20px] mb-4 font-genshin" data-aos="fade-left" data-aos-duration="1700">Inazuma</div>
                            <div className="h-[2px] md:w-100 sm:w-80 bg-white mb-4 ml-auto" data-aos="fade-left" data-aos-duration="1800"></div>
                            <p className="text-[16px] opacity-90 text-right mb-4" data-aos="fade-left" data-aos-duration="1900">
                                Inazuma paling umum merujuk pada negara kepulauan 
                                fiktif bertema Jepang di game Genshin Impact yang dipimpin oleh Electro Archon, 
                                Raiden Shogun, dan dirilis pada versi 2.0. Selain itu, istilah ini berarti "petir" 
                                dalam bahasa Jepang dan juga merupakan nama kapal perusak Angkatan Laut Kekaisaran Jepang, 
                                karakter di One Piece, serta waralaba Inazuma Eleven
                            </p>
                            <p className="text-[10px] text-right mb-4" data-aos="fade-left" data-aos-duration="2000">Arc Inazuma</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-end" data-aos="fade-left" data-aos-duration="2000">
                            <Link to="Act1">
                                <div className="flex items-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                    Act I: "The Immovable God and the Eternal Euthymia"
                                </div>
                            </Link>
                            <Link to="Act2">
                                <div className="flex items-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                    Act II: "Stillness, the Sublimation of Shadow"
                                </div>
                            </Link>
                            <Link to="Act3">
                                <div className="flex items-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                    Act III: "Omnipresence Over Mortals"
                                </div>
                            </Link>
                            <Link to="Act4">
                                <div className="flex items-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                    Act IV: "Requiem of the Echoing Depths"
                                </div>
                            </Link>
                        </div>
                    </div>                                                     
                </div>
            </div>
        </div>
    {/* ---tampilan mobile--- */}
        <div className="md:hidden">
            <div className="relative w-full h-full">
                <div className="flex flex-col mx-4 gap-2">
                    <div className="flex flex-row items-center ">
                        <div className="text-2xl mr-auto font-genshin" data-aos="fade-right" data-aos-duration="1000">Region name</div>
                        <div data-aos="fade-left" data-aos-duration="1100">
                            <img src={electroculus3} alt="electroculus" className="w-10 h-10 ml-auto animate-spin" style={{ animationDuration: "2s" }} />
                        </div>
                    </div>
                    <img src={inazuma} alt="inazuma pict" className="w-80 rounded-2xl" data-aos="fade-right" data-aos-duration="1200"/>
                    <img src={japan} alt="inazuma pict" className="w-80 rounded-2xl ml-auto" data-aos="fade-left" data-aos-duration="1200"/>
                    <div className="flex flex-row gap-2 mt-10" data-aos="fade-right" data-aos-duration="1300">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <p className="text-[13px] opacity-80 bg-black/60 text-white px-4 py-4 rounded-lg text-justify" data-aos="fade-right" data-aos-duration="1400">
                        Inazuma paling umum merujuk pada negara kepulauan fiktif bertema Jepang di game Genshin Impact yang dipimpin 
                        oleh Electro Archon, Raiden Shogun, dan dirilis pada versi 2.0. Selain itu, istilah ini berarti "petir" 
                        dalam bahasa Jepang dan juga merupakan nama kapal perusak Angkatan Laut Kekaisaran Jepang, karakter di 
                        One Piece, serta waralaba Inazuma Eleven
                    </p>
                    <h1 className="text-[12px] text-white" data-aos="fade-left" data-aos-duration="1900">Arc Inazuma :</h1>
                    <div className="flex flex-row gap-2 justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <Link to="Act1">
                            <div className="flex items-center relative w-40 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                Act I: "The Immovable God and the Eternal Euthymia"
                            </div>
                        </Link>
                        <Link to="Act2">
                            <div className="flex items-center relative w-40 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                Act II: "Stillness, the Sublimation of Shadow"
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row gap-2 justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <Link to="Act3">
                            <div className="flex items-center relative w-40 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                Act III: "Omnipresence Over Mortals"
                            </div>
                        </Link>
                        <Link to="Act4">
                            <div className="flex items-center relative w-40 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">
                                Act IV: "Requiem of the Echoing Depths"
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Region;