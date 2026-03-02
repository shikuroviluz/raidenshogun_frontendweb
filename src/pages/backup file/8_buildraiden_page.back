import buildpage from "../media/background/background_dekstop8.jpg"
import statsands from "../media/artefact/stat_sands.png"
import statgoblet from "../media/artefact/stat_goblet.png"
import statcirclet from "../media/artefact/stat_circlet.png"
import bestartefact from "../media/artefact/emblem_of_severed_fate.png"
import bestartefactmobile from "../media/artefact/emblem_of_severed_fate_mobile.png"
import sands from "../media/artefact/sands.png"
import goblet from "../media/artefact/goblet.png"
import circlet from "../media/artefact/circlet.png"
import Weapon from "../components/weapon_mobile"
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
            <div className="absolute inset-0 z-10 flex items-center px-10">
                <div className="text-white max-w-xl flex flex-col">
                    <h1 className="text-4xl mb-10">Build Raiden Shogun</h1>
                    <div className="flex flex-row gap-10 justify-center">
                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1000">
                            <h1 className="text-2xl my-5">sands</h1>
                            <img src={statsands} alt="sands" className="w-80 rounded-2xl"/>
                        </div>
                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1200">
                            <h1 className="text-2xl my-5">goblet</h1>
                            <img src={statgoblet} alt="sands" className="w-80 rounded-2xl"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 justify-center">
                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1400">
                            <h1 className="text-2xl my-5">circlet</h1>
                            <img src={statcirclet} alt="sands" className="w-80 rounded-2xl"/>
                        </div>
                        <div className="flex flex-col items-center px-8" data-aos="zoom-in" data-aos-duration="1600">
                            <h1 className="text-2xl my-5">best artefact</h1>
                            <img src={bestartefact} alt="sands" className="w-40"/>
                            <p className="text-center">4PC emblem of severed fate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="flex flex-col items-center my-10">
            <h1 className="text-3xl mb-5" data-aos="fade-up" data-aos-duration="1000">Build Raiden Shogun</h1>
            <h1 className="my-10" data-aos="fade-up" data-aos-duration="1200">4PC emblem of severed fate</h1>
            <div className="flex flex-row gap-15 justify-center" data-aos="fade-up" data-aos-duration="1400">
                <img src={bestartefactmobile} alt="artefact mobile" className="w-30"/>
                <div className="flex flex-col items-center justify-center">
                    <img src={sands} alt="sands" className="w-15"/>
                    <p>Energy recharge</p>
                    <p>atk%</p>
                </div>
            </div>
            <div className="flex flex-row gap-10 justify-center mb-10" data-aos="fade-up" data-aos-duration="1400">
                <div className="flex flex-col items-center justify-center px-1">
                    <img src={goblet} alt="goblet" className="w-15"/>
                    <p>Electro Damage</p>
                    <p>atk%</p>
                </div>
                <div className="flex flex-col items-center justify-center px-5">
                    <img src={circlet} alt="circlet" className="w-15"/>
                    <p>Crit Rate</p>
                    <p>Crit Damage</p>
                </div>
            </div>
            <h1 className="text-3xl mb-5" data-aos="fade-up" data-aos-duration="1600">Best Weapon</h1>
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