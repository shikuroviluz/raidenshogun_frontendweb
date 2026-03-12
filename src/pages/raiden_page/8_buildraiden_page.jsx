import buildpage from "../../media/background/background_dekstop8.jpg"
import paradiselost from "../../media/artefact/flower_of_paradise_lost.png"
import gilded from "../../media/artefact/gilded_dreams.png"
import emblem from "../../media/artefact/emblem_of_severed_fate.png"
import baseatk from "../../media/artefact/base_atk.png"
import skillE from "../../media/artefact/skill_e.png"
import burstQ from "../../media/artefact/skill_burst.png"
import sands from "../../media/artefact/sands.png"
import goblet from "../../media/artefact/goblet.png"
import circlet from "../../media/artefact/circlet.png"
import Weapon from "../../components/weapon_mobile"
import MobileArte from "../../components/mobile_artefact_build"
import MobileStat from "../../components/mobile_stats_priority"
import MobileTalent from "../../components/mobile_talent_priority"
function Build(){
    return(
    <>
    <section id="Build">
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full h-full">
            <img src={buildpage} alt="background page8" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#310056]/100 to-transparent" data-aos="fade-right" data-aos-duration="1000"></div>
            <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-t from-transparent to-[#310056]"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex items-center px-10 w-full h-full">
                <div className="text-white flex flex-col w-full bg-black/40 backdrop-blur-md p-6 rounded-xl">
                    <h1 className="text-4xl font-genshin font-genshin">Build Raiden Shogun</h1>
                    <h1 className="text-[20px] mb-5 font-genshin font-genshin">Recomendation Stats, Artefact & Talent Upgrade</h1>
                    <div className="flex flex-row justify-between items-start gap-2 text-center">
                        <div className="grid grid-cols-3 divide-white" data-aos="zoom-in" data-aos-duration="1200">
                        {/* {baris 1} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={sands} alt="sands" className="w-10 rounded-2xl"/>
                                <h1 className="text-[20px] ">sands</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={goblet} alt="goblet" className="w-10 rounded-2xl"/>
                                <h1 className="text-[20px]">goblet</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={circlet} alt="circlet" className="w-10 rounded-2xl"/>
                                <h1 className="text-[20px]">circlet</h1>
                            </div>
                        {/* {baris 2} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Energy Recharge</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Electro Damage</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Crit Rate / Crit Damage</h1>
                            </div>
                        {/* {baris 3} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Atk%</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Atk%</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Crit Rate / Crit Damage</h1>
                            </div>
                        {/* {baris 4} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Elemental Mastery</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Elemental Mastery</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[20px]">Elemental Mastery</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 divide-white" data-aos="zoom-in" data-aos-duration="1200">
                        {/* {baris 1} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={emblem} alt="sands" className="w-20 rounded-2xl"/>
                                <h1 className="text-[13px]">4 PC</h1>
                                <h1 className="text-[13px]">Emblem of Severed Fate</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={gilded} alt="goblet" className="w-20 rounded-2xl"/>
                                <h1 className="text-[13px]">4 PC</h1>
                                <h1 className="text-[13px]">Gilded Dreams</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={paradiselost} alt="circlet" className="w-20 rounded-2xl"/>
                                <h1 className="text-[13px]">4 PC</h1>
                                <h1 className="text-[13px]">Flower of Paradise Lost</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 divide-white" data-aos="zoom-in" data-aos-duration="1200">
                        {/* {baris 1} */}
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={burstQ} alt="sands" className="w-10 rounded-2xl"/>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[13px]">Burst</h1>
                                <h1 className="text-[13px]">First Priority</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={skillE} alt="goblet" className="w-13 rounded-2xl"/>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[13px]">Skill</h1>
                                <h1 className="text-[13px]">Second Priority</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <img src={baseatk} alt="circlet" className="w-10 rounded-2xl"/>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                                <h1 className="text-[13px]">Base Atk</h1>
                                <h1 className="text-[13px]">Opsional</h1>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="flex flex-col items-center my-10 px-6">
            <h1 className="text-3xl mb-5 font-genshin" data-aos="fade-in" data-aos-duration="1200">Build Raiden Shogun</h1>
            <div data-aos="fade-in" data-aos-duration="1400"><MobileArte/></div>
            <div data-aos="fade-in" data-aos-duration="1400"><MobileStat/></div>
            <div data-aos="fade-in" data-aos-duration="1400"><MobileTalent/></div>
            <h1 className="text-3xl mb-5 font-genshin" data-aos="fade-up" data-aos-duration="1600">Best Weapon</h1>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
                <Weapon/>
            </div>
        </div>
    </div>
    </section>
    </>
    );
}
export default Build;