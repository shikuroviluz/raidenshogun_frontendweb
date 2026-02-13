import background6 from "../media/background/background_dekstop7.jpg"
import raidenpp from "../../public/assets/profile/raidenprofile.jpg"
import yaemikopp from "../../public/assets/profile/yaemikoprofile.jpg"
import hubungan from "../media/talent/swap_character.png"
function Friend(){
    return(
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full h-full my-auto">
            <img src={background6} alt="background page7" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b from-[#310056]/100 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-b from-transparent to-[#310056]"></div>
            <div className="absolute inset-0 z-10 flex items-center px-10">
                <div className="text-white max-w-xl flex flex-col">
                    <h1 className="text-5xl" data-aos="fade-right" data-aos-duration="1000">Yaemiko's best Friend</h1>
                    <div className="h-[2px] md:w-145 sm:w-80 bg-white my-4 mr-auto " data-aos="fade-right" data-aos-duration="1200"></div>
                    <p className="" data-aos="fade-right" data-aos-duration="1400">
                        Sahabat terdekat Raiden Ei adalah Yae Miko, yang merupakan sekutu tepercaya dan sahabat lamanya, 
                        serta Raiden Makoto (kembaran dan Archon Elektro sebelumnya), dan dua teman masa lalu yang tragis: 
                        Sayuri dan Kitsune Saiguu; mereka bertiga (Sayuri, Ciccio, Kitsune Saiguu) adalah teman-teman awal 
                        Baal/Ei yang hilang dalam perang.
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile---*/}
    <div className="md:hidden">
        <div className="flex flex-col items-center gap-3 p-4">
            <h1 className="text-2xl pt-90">Yaemiko's best Friend</h1>
            <div className="flex flex-row items-center gap-4">
                <div className="w-25 h-25 rounded-full overflow-hidden border-3 border-black mx-auto mb-20 mt-20" data-aos="fade-up" data-aos-duration="1000">
                    <img src={raidenpp} alt="raiden pp" className=""/>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-20 mt-20" data-aos="zoom-in">
                    <img src={hubungan} alt="hubungan logo" className="animate-spin" style={{ animationDuration: "2s" }}/>
                </div>
                <div className="w-25 h-25 rounded-full overflow-hidden border-3 border-black mx-auto mb-20 mt-20" data-aos="fade-up" data-aos-duration="1000">
                    <img src={yaemikopp} alt="yaemiko pp" className=""/>
                </div>
            </div>
            <p className="text-center" data-aos="fade-up" data-aos-duration="1400">
                Sahabat terdekat Raiden Ei adalah Yae Miko, yang merupakan sekutu tepercaya dan sahabat lamanya, serta Raiden Makoto 
                (kembaran dan Archon Elektro sebelumnya), dan dua teman masa lalu yang tragis: Sayuri dan Kitsune Saiguu; mereka 
                bertiga (Sayuri, Ciccio, Kitsune Saiguu) adalah teman-teman awal Baal/Ei yang hilang dalam perang
            </p>
            <a
                href="#Yaemiko"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-500 text-[12px] mx-auto my-4" data-aos="fade-up" data-aos-duration="1800"> About Yaemiko
            </a>
        </div>
    </div>
    </>
    );
}
export default Friend;