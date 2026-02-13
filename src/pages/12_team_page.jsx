import teampage from "../media/background/background_dekstop12.jpg"
import Char_function from "../components/char_function";
function Team(){
    return(
    <>
    {/* ---dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full h-full">
            <img src={teampage} alt="absolute background page9" className="w-full h-fit object-cover"/>
            <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-t from-transparent to-[#310056]"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex flex-col gap-3 py-20 px-10">
                <div className="pb-20">
                    <h1 className="text-7xl text-center" data-aos="fade-up" data-aos-duration="1000">Best Team Party</h1>
                </div>
                <div className="inline-block bg-black/50 rounded-2xl backdrop-blur-2xl">
                    <Char_function/>
                </div>
            </div>
        </div>
    </div>
    {/* ---mobile--- */}
    <div className="md:hidden">
        <div className="relative w-full h-full">
            <div className="absolute inset-0 z-10 flex flex-col gap-3 py-20 px-10">
                <div className="pb-10" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="text-3xl text-center">Best Team Party</h1>
                </div>
                <div className="inline-block bg-black/50 rounded-2xl backdrop-blur-2xl" data-aos="fade-up" data-aos-duration="2500">
                    <Char_function/>
                </div>
                <div className="pb-2"></div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Team;