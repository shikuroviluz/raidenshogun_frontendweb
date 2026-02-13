import weaponpage from "../media/background/background_dekstop11.jpg"
import Eskill from "../media/talent/skill_e.png"
import Qskill from "../media/talent/skill_burst.png"
import swap from "../media/talent/swap_character.png"
import introVideo from "../media/guide_video.mp4";
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
                <div className="text-6xl mt-20" data-aos="fade-up" data-aos-duration="1200"><h1>Guide Raiden Shogun Gameplay & Rotation</h1></div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1300">
                            <img src={Eskill} alt="elemental" className="w-20"/>
                            <h1>Elemental skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1400">
                            <img src={swap} alt="elemental" className="w-20 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 1 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1500">
                            <img src={swap} alt="elemental" className="w-20 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 2 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1600">
                            <img src={swap} alt="elemental" className="w-20 animate-spin" style={{ animationDuration: "2s" }}/>
                            <h1>Swap Character 2 + Burst + Skill</h1>
                        </div>
                        <div className="flex flex-row items-center  gap-7" data-aos="fade-up" data-aos-duration="1700">
                            <img src={Qskill} alt="elemental" className="w-20"/>
                            <h1>Back to Raiden & Burst</h1>
                        </div>
                    </div>
                    <video src={introVideo} controls className="w-1/2 rounded-2xl" data-aos="fade-up" data-aos-duration="1300">
                    </video>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="flex flex-col justify-center ">
            <h1 className="text-3xl text-center my-2" data-aos="fade-up" data-aos-duration="1000">Guide Raiden Shogun</h1>
            <h1 className="text-[15px] text-center" data-aos="fade-up" data-aos-duration="1200">Gameplay & Rotation</h1>
            <div className="p-2">                
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1400">
                    <img src={Eskill} alt="elemental" className="w-20"/>
                    <h1>Elemental skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1600">
                    <img src={swap} alt="elemental" className="w-20"/>
                    <h1>Swap Character 1 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="1800">
                    <img src={swap} alt="elemental" className="w-20"/>
                    <h1>Swap Character 2 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="2000">
                    <img src={swap} alt="elemental" className="w-20"/>
                    <h1>Swap Character 3 + Burst + Skill</h1>
                </div>
                <div className="flex flex-row items-center gap-10" data-aos="fade-up" data-aos-duration="2200">
                    <img src={Qskill} alt="elemental" className="w-20"/>
                    <h1>Back to Raiden & Burst</h1>
                </div>
            </div>
            <video src={introVideo} controls className="pt-10 flex mx-auto w-95 rounded-2xl" data-aos="fade-up" data-aos-duration="2400">
            </video>
        </div>
    </div>
    </section>
    </>
    );
}
export default Guide;