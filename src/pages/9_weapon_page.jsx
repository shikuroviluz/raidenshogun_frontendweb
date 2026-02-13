import weaponpage from "../media/background/background_dekstop9.jpg"
import D_WP_sign from "../components/d_engulfing_dekstop";
import D_WP_thecatch from "../components/d_thecatch_dekstop";
function WeaponDekstop(){
    return(
    <>
    <div className="hidden md:block">
        <div className="relative w-full h-full">
            <img src={weaponpage} alt="absolute background page9" className="w-full h-fit object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#310056]/100 to-transparent" data-aos="fade-right" data-aos-duration="1000"></div>
            <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-t from-transparent to-[#310056]"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex flex-row justify-center items-center gap-40 ">
                <h1 className="text-6xl" data-aos="fade-right" data-aos-duration="1400">Best Weapon</h1>
                <div className="flex flex-col gap-3">
                    <div data-aos="fade-up" data-aos-duration="1400"><D_WP_sign/></div>
                    <div data-aos="fade-up" data-aos-duration="1800"><D_WP_thecatch/></div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default WeaponDekstop;