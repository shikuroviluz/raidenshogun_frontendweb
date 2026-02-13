import background2 from "../media/background/background_dekstop2.jpg"
import backgroundmobile from "../media/mobile_card_page/raidencard.png"
import logoelectro from "../../public/assets/electroculus.png"
import chibichar from "../media/chibi_character/chibi_raiden1.png"
function Detail() {
    return (
        <>
        <section id="Detail">
        {/* ---bagian dekstop--- */}
        <div className="hidden md:block" data-aos="fade-up">
            <div className="relative w-full h-full my-auto" >
                <img src={background2} alt="background dekstop2" className="w-full h-full object-cover "/>
                <div className="absolute inset-0 bg-gradient-to-r from-[#310056]/85 to-transparent" data-aos="fade-right" data-aos-duration="1000"></div>
                <div className="absolute inset-0 z-10 flex items-center px-10">
                    <div className="text-white max-w-xl flex flex-col">
                        <h1 className="text-4xl mb-4" data-aos="fade-right" data-aos-duration="1500">Raiden Ei 雷電英</h1>
                        <div className="h-[2px] w-150 sm:w-80 bg-white mb-4" data-aos="fade-right" data-aos-duration="1550"></div>
                        <p className="text-base/loose opacity-80" data-aos="fade-right" data-aos-duration="1600">
                            perwujudan kekuatan petir yang merupakan penguasa tertinggi Inazuma dan Dewa Keabadian, yang 
                            sebenarnya terdiri dari dua entitas: Raiden Ei (Archon asli) dan Shogun (boneka mekanik ciptaan 
                            Ei untuk memerintah Inazuma sementara Ei bermeditasi).
                        </p>
                        <div>
                            <h1 className="mb-4 mt-4" data-aos="fade-right" data-aos-duration="1650">Voice Actor :</h1>
                            <div className="flex gap-3 mx-auto">
                                <a
                                    href="https://www.imdb.com/name/nm3304361/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]" data-aos="fade-up" data-aos-duration="1700">< i class="ri-user-line"></i> EN : Anne Yatco
                                </a>
                                <a
                                    href="https://en.wikipedia.org/wiki/Miyuki_Sawashiro" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]" data-aos="fade-up" data-aos-duration="1800">< i class="ri-user-line"></i> JP : Miyuki Sawashiro
                                </a>
                                <a
                                    href="https://zh.moegirl.org.cn/%E8%8F%8A%E8%8A%B1%E8%8A%B1" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]" data-aos="fade-up" data-aos-duration="1900">< i class="ri-user-line"></i> CH : Juhuahua
                                </a>
                                <a
                                    href="https://ko.wikipedia.org/wiki/%EB%B0%95%EC%A7%80%EC%9C%A4_(%EC%84%B1%EC%9A%B0)" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]" data-aos="fade-up" data-aos-duration="2000">< i class="ri-user-line"></i> KR : Park Ji-yoon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ---bagian mobile--- */}
        <div className="md:hidden">
            <div className="flex flex-col justify-center gap-3 p-4">
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl" data-aos="fade-right" data-aos-duration="">Name Character</h1>
                    <div data-aos="fade-left" data-aos-duration="">
                        <img src={logoelectro} alt="logo electroculus" className="w10 h-10 ml-auto animate-spin" style={{ animationDuration: "2s" }} />
                    </div>
                </div>
                <img src={backgroundmobile} alt="gambar untuk mobile" className="w-50" data-aos="fade-right" data-aos-duration="1000"/>
                <div className="flex flex-row">
                    <img src={chibichar} alt="gambar chibi" className="w-30 h-30 mr-auto" data-aos="fade-right" data-aos-duration="1200"/>
                    <h1 className="text-4xl my-auto text-right" data-aos="fade-left" data-aos-duration="1200">Raiden Ei 雷電英</h1>
                </div>              
                <div className="h-[2px] w-80 sm:w-90 bg-white mb-3 ml-auto" data-aos="fade-right" data-aos-duration="1400"></div>
                <div className="relative inline-block rounded-lg" data-aos="fade-left" data-aos-duration="1600">
                    <p className="text-[13px] opacity-80 text-right bg-black/60 text-white px-4 py-4 rounded-lg">
                        perwujudan kekuatan petir yang merupakan penguasa tertinggi Inazuma dan Dewa Keabadian, yang sebenarnya 
                        terdiri dari dua entitas: Raiden Ei (Archon asli) dan Shogun (boneka mekanik ciptaan Ei untuk memerintah 
                        Inazuma sementara Ei bermeditasi)
                    </p>                   
                </div>
                <div className="">
                    <h1 className="mb-4 mt-4" data-aos="fade-right" data-aos-duration="1800">Voice Actor :</h1>
                    <div className="flex gap-3 mx-auto" data-aos="fade-right" data-aos-duration="2000">
                        <a
                            href="https://www.imdb.com/name/nm3304361/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">< i class="ri-user-line"></i> EN : Anne Yatco
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Miyuki_Sawashiro" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">< i class="ri-user-line"></i> JP : Miyuki Sawashiro
                        </a>
                    </div> 
                    <div className="mt-4 flex gap-3 mx-auto" data-aos="fade-right" data-aos-duration="2200">
                        <a
                            href="https://zh.moegirl.org.cn/%E8%8F%8A%E8%8A%B1%E8%8A%B1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">< i class="ri-user-line"></i> CH : Juhuahua
                        </a>
                        <a
                            href="https://ko.wikipedia.org/wiki/%EB%B0%95%EC%A7%80%EC%9C%A4_(%EC%84%B1%EC%9A%B0)" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[9px]">< i class="ri-user-line"></i> KR : Park Ji-yoon
                        </a>
                    </div>       
                </div>
            </div>
        </div>
        </section>
        
        </>
    );
}
export default Detail;