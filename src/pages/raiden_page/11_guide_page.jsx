import weaponpage from "../../media/background/background_dekstop11.jpg"
import Eskill from "../../media/talent/skill_e.png"
import Qskill from "../../media/talent/skill_burst.png"
import swap from "../../media/talent/swap_character.png"
function Guide(){
    return(
    <>
    <section id="Guide">
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full h-full">
            <img src={weaponpage} alt="absolute background page9" className="w-full h-fit object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#310056]/100 to-transparent" data-aos="fade-right" data-aos-duration="1000"></div>
            <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-t from-transparent to-[#310056]"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex flex-col gap-20 py-20 px-10">
                <div className="text-6xl mt-20 font-genshin" data-aos="fade-up" data-aos-duration="1200"><h1>Guide Raiden Shogun Gameplay & Rotation</h1></div>
                <div className="flex flex-row items-center justify-between bg-black/40 backdrop-blur-md p-6 rounded-xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1300">
                            <img src={Eskill} alt="elemental" className="w-15"/>
                            <h1>Elemental skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1400">
                            <img src={swap} alt="elemental" className="w-15 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 1 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1500">
                            <img src={swap} alt="elemental" className="w-15 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 2 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1600">
                            <img src={swap} alt="elemental" className="w-15 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 2 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1700">
                            <img src={Qskill} alt="elemental" className="w-15"/>
                            <h1>Back to Raiden & Burst</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-row items-center justify-center gap-4">
                            <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1300">
                                <p>Gameplay Raiden Overload</p>
                                <iframe className="w-95 h-50 rounded-2xl" src="https://www.youtube.com/embed/ZXq4Wv-gm70" allowFullScreen></iframe>
                            </div>
                            <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1300">
                                <p>Gameplay Raiden Hyper Carry</p>
                                <iframe className="w-95 h-50 rounded-2xl" src="https://www.youtube.com/embed/K-c5umLHgT8" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1300">
                                <p>Gameplay Lunar Electro charge</p>
                                <iframe className="w-95 h-50 rounded-2xl" src="https://www.youtube.com/embed/pcK7CcA_DBk" allowFullScreen></iframe>
                            </div>
                            <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1300">
                                <p>Gameplay Raiden Hijau (Full Elemental Mastery)</p>
                                <iframe className="w-95 h-50 rounded-2xl" src="https://www.youtube.com/embed/kD1AK5iXIcQ" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="flex flex-col justify-center ">
            <h1 className="text-3xl text-center my-2" data-aos="fade-up" data-aos-duration="1000">Guide Raiden Shogun</h1>
            <h1 className="text-[15px] text-center" data-aos="fade-up" data-aos-duration="1200">Gameplay & Rotation</h1>
            <div className="p-2 mx-auto">                
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1400">
                    <img src={Eskill} alt="elemental" className="w-10"/>
                    <h1>Elemental skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1600">
                    <img src={swap} alt="elemental" className="w-10 animate-spin" style={{ animationDuration: "2s" }}/>
                    <h1>Swap Character 1 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1800">
                    <img src={swap} alt="elemental" className="w-10 animate-spin" style={{ animationDuration: "2s" }}/>
                    <h1>Swap Character 2 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="2000">
                    <img src={swap} alt="elemental" className="w-10 animate-spin" style={{ animationDuration: "2s" }}/>
                    <h1>Swap Character 3 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="2200">
                    <img src={Qskill} alt="elemental" className="w-10"/>
                    <h1>Back to Raiden & Burst</h1>
                </div>
            </div>
            <br />
            <div className="font-genshin" data-aos="fade-up" data-aos-duration="2300"><h1 className="text-center">gameplay preview</h1></div>
            <br />
            <div className="flex flex-col gap-4 justify-center items-center" data-aos="fade-up" data-aos-duration="2400">
                <iframe className="w-80 h-45 rounded-2xl" src="https://www.youtube.com/embed/ZXq4Wv-gm70" allowFullScreen></iframe>
                <iframe className="w-80 h-45 rounded-2xl" src="https://www.youtube.com/embed/K-c5umLHgT8" allowFullScreen></iframe>
                <iframe className="w-80 h-45 rounded-2xl" src="https://www.youtube.com/embed/pcK7CcA_DBk" allowFullScreen></iframe>
                <iframe className="w-80 h-45 rounded-2xl" src="https://www.youtube.com/embed/kD1AK5iXIcQ" allowFullScreen></iframe>
            </div>
        </div>
    </div>
    </section>
    </>
    );
}
export default Guide;