import background4 from "../media/background/background_dekstop4.png"
import gnosispict from "../media/artefact/gnosis_electro.png"
import electroculus from "../../public/assets/electroculus.png"
function Element() {
    return(
    <>
        {/* ---tampilan dekstop--- */}
        <div className="hidden md:block">
            <div className="relative w-full h-full my-auto">
                <img src={background4} alt="background page4" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-r from-[#310056]/85 to-transparent" data-aos="fade-right" data-aos-duration="1000"></div>
                <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-t from-transparent to-[#310056]"></div>
                <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
                <div className="absolute inset-0 z-10 flex items-center px-10">
                    <div className="flex flex-col mr-auto">
                        <div className="text-white max-w-xl ml-auto" data-aos="fade-right" data-aos-duration="1100">
                            <div className="text-left text-4xl" data-aos="fade-right" data-aos-duration="1200">Element</div>
                            <div className="text-left text-2xl mb-4" data-aos="fade-right" data-aos-duration="1300">Gnosis Electro</div>
                            <div className="h-[2px] md:w-130 sm:w-80 bg-white mb-4 mr-auto" data-aos="fade-right" data-aos-duration="1400"></div>
                            <p className="text-[16px] opacity-90 text-left mb-4" data-aos="fade-right" data-aos-duration="1500">
                                Gnosis Electro merupakan Gnosis milik Raiden Makoto (archon sebelumnya) yang berpindah 
                                kepemilikan sejak Raiden Ei naik takhta menjadi archon untuk menggantikan Raiden Makoto 
                                Yang gugur saat perang archon, walaupun dulunya di pegang oleh kakaknya, Raiden Ei tidak 
                                mau memegang Gnosis ini dan lebih memilih menitipkannya kepada YaeMiko, yang seterusnya 
                                di berikan kepada Scaramouche untuk ditukar dengan keselamatan nyawa MC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ---tampilan mobile--- */}
        <div className="md:hidden">
            <div className="flex flex-col justify-center gap-3 p-4">
                <div className="flex flex-row ">
                    <div className="text-2xl mr-auto" data-aos="fade-up" data-aos-duration="">Element</div>
                    <div data-aos="fade-up" data-aos-duration="">
                        <img src={electroculus} alt="page4 electroculus" className="w-10 ml-auto animate-spin" style={{ animationDuration: "2s" }} />
                    </div>
                </div>
                <div className="h-[2px] w-80 sm:w-90 bg-white mb-4 mx-auto" data-aos="fade-up" data-aos-duration="1000"></div>
                <img src={gnosispict} alt="gambar gnosis electro" className="w-40 mr-auto" data-aos="fade-up" data-aos-duration="1400"/>
                <div className="text-white max-w-xl ml-auto">
                    <div className="flex flex-row mb-4 gap-3" data-aos="fade-up" data-aos-duration="1600">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="text-left text-2xl" data-aos="fade-up" data-aos-duration="1800">Gnosis Electro</div>
                    <p className="text-[16px] opacity-90 text-left mb-4" data-aos="fade-up" data-aos-duration="2000">
                        Gnosis Electro merupakan Gnosis milik Raiden Makoto (archon sebelumnya) yang berpindah 
                        kepemilikan sejak Raiden Ei naik takhta menjadi archon untuk menggantikan Raiden Makoto 
                        Yang gugur saat perang archon, walaupun dulunya di pegang oleh kakaknya, Raiden Ei tidak 
                        mau memegang Gnosis ini dan lebih memilih menitipkannya kepada YaeMiko, yang seterusnya 
                        di berikan kepada Scaramouche untuk ditukar dengan keselamatan nyawa MC
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Element;