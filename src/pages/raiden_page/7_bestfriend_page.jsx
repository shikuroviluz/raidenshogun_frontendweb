import background6 from "../../media/background/background_dekstop7.jpg"
import raidenpp from "../../../public/assets/profile/raidenprofile.jpg"
import yaemikopp from "../../../public/assets/profile/yaemikoprofile.jpg"
import hubungan from "../../media/talent/swap_character.png"
import { Link } from "react-router-dom";
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
                    <h1 className="text-5xl font-genshin" data-aos="fade-right" data-aos-duration="1000">Yae miko's best Friend</h1>
                    <div className="h-[2px] md:w-145 sm:w-80 bg-white my-4 mr-auto " data-aos="fade-right" data-aos-duration="1200"></div>
                    <p className="text-justify" data-aos="fade-right" data-aos-duration="1400">
                        Sahabat terdekat Raiden Ei adalah Yae Miko, yang merupakan sekutu tepercaya dan sahabat lamanya, 
                        serta Raiden Makoto (kembaran dan Archon Elektro sebelumnya), dan dua teman masa lalu yang tragis: 
                        Sayuri dan Kitsune Saiguu; mereka bertiga (Sayuri, Ciccio, Kitsune Saiguu) adalah teman-teman awal 
                        Baal/Ei yang hilang dalam perang.
                    </p>
                    <Link to="About_yaemiko" data-aos="fade-right" data-aos-duration="1500">
                        <div className="my-4 flex items-center justify-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-pink-600 text-[10px]">
                            About YaeMiko
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    {/* ---tampilan mobile---*/}
    <div className="md:hidden">
        <div className="flex flex-col items-center gap-3 p-6">
            <h1 className="text-2xl font-genshin">Yae miko's best Friend</h1>
            <div className="flex flex-row items-center gap-4">
                <div className="w-25 h-25 rounded-full overflow-hidden border-3 border-black mx-auto mb-20 mt-20" data-aos="fade-right" data-aos-duration="1000">
                    <img src={raidenpp} alt="raiden pp" className=""/>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-20 mt-20" data-aos="zoom-in">
                    <img src={hubungan} alt="hubungan logo" className="animate-spin" style={{ animationDuration: "2s" }}/>
                </div>
                <div className="w-25 h-25 rounded-full overflow-hidden border-3 border-black mx-auto mb-20 mt-20" data-aos="fade-left" data-aos-duration="1000">
                    <img src={yaemikopp} alt="yaemiko pp" className=""/>
                </div>
            </div>
            <p className="text-center" data-aos="fade-in" data-aos-duration="1400">
                Sahabat terdekat Raiden Ei adalah Yae Miko, yang merupakan sekutu tepercaya dan sahabat lamanya, serta Raiden Makoto 
                (kembaran dan Archon Elektro sebelumnya), dan dua teman masa lalu yang tragis: Sayuri dan Kitsune Saiguu; mereka 
                bertiga (Sayuri, Ciccio, Kitsune Saiguu) adalah teman-teman awal Baal/Ei yang hilang dalam perang
            </p>
            <Link to="About_yaemiko" data-aos="fade-in" data-aos-duration="1500">
                <div className="my-4 flex items-center justify-center relative w-45 h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl hover:bg-pink-600 text-[10px]">
                    About YaeMiko
                </div>
            </Link>
        </div>
    </div>
    </>
    );
}
export default Friend;