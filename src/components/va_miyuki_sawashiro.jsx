import { Link } from "react-router-dom";
import Pict_Miyuki_Sawashiro from "../../public/assets/profile/profile_va/Miyuki_Sawashiro.webp";
import MSGallery from "./va_miyuki_sawashiro_galery";
function Miyukisawashiro(){
    return(
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="relative w-full bg-white text-white min-h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col p-6 items-center gap-4">
                    <div className="grid grid-cols-2 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl max-w-7xl w-full">
                        <div className="flex flex-col justify-center p-4 text-white">
                            <Link to="/" className="mb-2">
                                <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                    cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                <h1 className="p-2">Back to home</h1>
                                </div>
                            </Link>

                            <h1 className="text-[15px] mb-auto">Biograpy</h1>
                            <h1 className="text-4xl font-genshin">Miyuki Sawashiro</h1>
                            <h1 className="text-[15px]">Voice Actress • Anime & Singer</h1>
                            <p className="italic">
                                "is a Japanese voice actor and singer who works for Aoni Production."
                            </p>
                            <div className="flex flex-row mt-auto gap-10">
                                <h1 className="text-[15px] mt-auto">Born 2 Juni 1985 · Japan</h1>
                                <h1 className="text-[15px] mt-auto">Height 1.56 m</h1>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={Pict_Miyuki_Sawashiro} alt="foto profile" className="m-4 rounded-2xl w-42 "/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between max-w-7xl w-full">
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[630px]">
                            <div className="p-4 flex flex-col">
                                <h1>Latar belakang unik : </h1>
                                <h1>- Mengikuti audisi nasional untuk anime Di Gi Charat.</h1>
                                <h1>- Belajar di luar negeri, tepatnya di Pennsylvania, Amerika Serikat.</h1>
                                <h1>- fasih berbahasa Inggris.</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[630px]">
                            <div className="p-4 flex flex-col">
                                <h1>Karya terkenal : </h1>
                                <h1>- Voice Actor Raiden Shogun (Genshin Impact)</h1>
                                <h1>- Voice Actor Mosquito Girl (One-Punch Man)</h1>
                                <h1>- Voice Actor Mei Raiden (Honkai Impact 3rd)</h1>
                                <h1>- Voice Actor Acheron (Honkai: Star Rail)</h1>
                                <h1>- Voice Actor Kurapika (Hunter X Hunter)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-[500px] flex justify-center">
                        <div className="w-[500px] relative p-2">
                            <div className="text-center font-bold mb-1">Mengisi suara di beberapa anime dan game terkenal seperti</div>
                            <MSGallery/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="relative w-full bg-white text-white min-h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col p-2 items-center gap-4">
                    <div className="grid grid-cols-2 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-full">
                        <div className="flex flex-col justify-center p-2 text-white">
                            <Link to="/" className="mb-2">
                                <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                    cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                                <h1 className="p-2">Back to home</h1>
                                </div>
                            </Link>

                            <h1 className="text-[15px] mb-auto">Biograpy</h1>
                            <h1 className="text-[15px] font-genshin">Miyuki Sawashiro</h1>
                            <h1 className="text-[10px]">Voice Actress • Anime & Singer</h1>
                            <p className="italic text-[10px]">
                                "is a Japanese voice actor and singer who works for Aoni Production."
                            </p>
                            <div className="flex flex-row mt-auto gap-10 text-[10px]">
                                <h1 className="mt-auto">Born 2 Juni 1985 · Japan</h1>
                                <h1 className="mt-auto">Height 1.56 m</h1>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={Pict_Miyuki_Sawashiro} alt="foto profile" className="scale-75 rounded-2xl"/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full gap-2">
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-1/2">
                            <div className="p-4 flex flex-col text-[8px]">
                                <h1>Latar belakang : </h1>
                                <h1>- Mengikuti audisi nasional untuk anime Di Gi Charat.</h1>
                                <h1>- Belajar di luar negeri, tepatnya di Pennsylvania, Amerika Serikat.</h1>
                                <h1>- fasih berbahasa Inggris.</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-1/2">
                            <div className="p-4 flex flex-col text-[8px]">
                                <h1>Karya terkenal : </h1>
                                <h1>- Voice Actor Raiden Shogun (Genshin Impact)</h1>
                                <h1>- Voice Actor Mosquito Girl (One-Punch Man)</h1>
                                <h1>- Voice Actor Mei Raiden (Honkai Impact 3rd)</h1>
                                <h1>- Voice Actor Acheron (Honkai: Star Rail)</h1>
                                <h1>- Voice Actor Kurapika (Hunter X Hunter)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-l from-purple-500 to-[#310056] rounded-2xl w-full mx-auto slide-wrapper">
                        <div className="w-full justify-center relative p-2">
                            <div className="text-center font-bold mb-1">Mengisi suara di beberapa anime dan game terkenal seperti</div>
                            <MSGallery/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Miyukisawashiro;