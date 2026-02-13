import weaponpage from "../media/background/background_dekstop10.jpg"
import {Material} from "../data"
function Ascension(){
    return(
    <>
    <div className="hidden md:block">
        <div className="relative w-full h-full">
            <img src={weaponpage} alt="absolute background page9" className="w-full h-fit object-cover"/>
            <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-t from-transparent to-[#310056]"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex flex-col items-center gap-20 py-30">
                <h1 className="text-6xl" data-aos="fade-down" data-aos-duration="1400">Ascension Material</h1>
                <div className="tools-box px-10 grid grid-cols-6 gap-4">
                    {Material.map(bahan_material => (
                    <div className="flex justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                    key={bahan_material.id} data-aos="fade-down" data-aos-duration="1800">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={bahan_material.gambar} alt="ascension" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{bahan_material.nama}</h4>
                                <p className="text-center text-[12px]">{bahan_material.ket}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Ascension;