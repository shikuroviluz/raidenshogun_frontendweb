import hoyolab from "../../../public/assets/sosial_media/hoyolab.jpg";
import tailwindcss from "../../../public/assets/sosial_media/tailwindcss.svg"
import vite from "../../../public/assets/sosial_media/vite.svg"
import vscode from "../../../public/assets/sosial_media/vscode.png"
import js_logo from "../../../public/assets/sosial_media/js_logo.png"
import git from "../../../public/assets/sosial_media/github_logo.png"
function Footer (){
    return(
    <>
    {/* ---dekstop--- */}
    <div className="hidden md:block">
    <div className="relative w-full h-80 px-10 py-5 flex flex-row justify-between gap-2 bg-[#111111]">
        <div className="flex flex-col gap-1 text-white">
            <h1>This website was created by</h1>
            <h1 className="text-5xl">Shikuro Viluz</h1>
            <div className="bg-white w-100 h-[2px]"></div>
            <h1 className="text-[15px]">Assets Support :</h1>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col">
                    <a href="https://gi.yatta.moe/en" target="_blank" rel="noopener noreferrer" 
                        className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Project Amber
                    </a>
                    <a href="https://id.pinterest.com/" target="_blank" rel="noopener noreferrer" 
                        className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Pinterest
                    </a>
                    <a href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener noreferrer" 
                        className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">AOS
                    </a>
                    <a href="https://animate.style/" target="_blank" rel="noopener noreferrer" 
                        className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Animated style
                    </a>
                    <a href="https://genshin.hoyoverse.com/id/" target="_blank" rel="noopener noreferrer" 
                        className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Genshin Impact
                    </a>
                </div>
                <div className="bg-white h-full w-[2px]"></div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-center">
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                            <img src={vscode} alt="vscode" className="w-15 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                        </a>
                        <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                            <img src={vite} alt="vite" className="w-15 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                            <img src={tailwindcss} alt="tailwindcss" className="w-15 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                        </a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                            <img src={js_logo} alt="js" className="w-40 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                            <img src={git} alt="git" className="w-30 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                        </a>
                    </div>
                    <div className="text-[13px] mb-[18px]">
                        created by ahmad firza nur rozin as shikuro viluz 
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white w-[1px] h-full"></div>
        <div className="flex flex-col items-center gap-2">
            <h1>Contact me</h1>
            <div className="flex flex-row justify-center gap-10">
                <a href="https://www.instagram.com/frznra._?igsh=bzlyNmExemJkOGpi" target="_blank" rel="noopener noreferrer" 
                    className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 p-1 rounded-2xl hover:text-amber-300">
                    <div className="flex flex-col items-center gap-2">
                        <i class="ri-instagram-fill ri-4x"></i>
                        <h1>Instagram</h1>
                    </div>                       
                </a>
                <a href="https://x.com/viluz_needhelp" target="_blank" rel="noopener noreferrer" 
                    className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                    <div className="flex flex-col items-center gap-2">
                        <i class="ri-twitter-x-line ri-4x"></i>
                        <h1>X</h1>
                    </div>                       
                </a>
                <a href="https://www.tiktok.com/@shikuroviluz._" target="_blank" rel="noopener noreferrer" 
                    className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                    <div className="flex flex-col items-center gap-2">
                        <i class="ri-tiktok-fill ri-4x"></i>
                        <h1>Tiktok</h1>
                    </div>                       
                </a>
                <a href="https://youtube.com/@shikuroviluz?si=kEdfVYOXFkVGlAF5" target="_blank" rel="noopener noreferrer" 
                    className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                    <div className="flex flex-col items-center gap-2">
                        < i class="ri-youtube-fill ri-4x"></i>
                        <h1>Youtube</h1>
                    </div>                       
                </a>
            </div>
            <div className="bg-white w-full h-[2px]"></div>
            <div>
                <p className="text-[10px] mx-4">
                    Thank you for taking the time to visit our website. Keep visiting <a href="https://www.tiktok.com/@shikuroviluz._" 
                    target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 underline decoration-1">
                    @shikuroviluz._</a> for more interesting information.
                </p>
            </div>
            <div className="bg-white w-full h-[2px]"></div>
            <div>
                <p className="text-[10px] mx-4">
                    This website was created for entertainment and learning purposes only. This website is fanmade and is not 
                    affiliated with Mihoyo. All assets here are owned by their original owners.
                </p>
            </div>
        </div>
        <div className="h-full w-[1px] bg-white"></div>
        <div className="flex flex-col items-center">
            <a href="https://www.hoyolab.com/accountCenter/postList?id=362406479" target="_blank" rel="noopener noreferrer">
                <div className="relative w-145 h-70 bg-white rounded-2xl hover:scale-105 transition duration-300">
                    <div className="absolute p-5 flex flex-row items-center gap-4">
                        <img src={hoyolab} alt="hoyolab" className="w-60 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#310056] text-[65px]">Hoyolab</h1>
                            <div className="w-73 h-[2px] bg-[#310056]"></div>
                            <h1 className="text-[#310056]">As VILUZ</h1>
                            <p className="text-[#310056] text-[10px]">
                                Viluz | Theorycrafter & Build Explorer Berbagi build karakter, tips gameplay, dan eksperimen 
                                damage di Teyvat.Kalau kamu suka min-maxing atau sekadar mencari build terbaik, kamu berada 
                                di tempat yang tepat.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </a>            
        </div>
    </div>
    </div>
    
    {/* ---mobile--- */}
    <div className="md:hidden">
        <div className="w-full p-4 bg-[#111111]">
            <div className="flex flex-row">
                <div className="flex flex-col text-[10px] w-full">
                    <h1>This website was created by</h1>
                    <h1 className="text-[15px]">Shikuro Viluz</h1>
                    <p className="text-[8px]">
                        Thank you for taking the time to visit our website. Keep visiting <a href="https://www.tiktok.com/@shikuroviluz._" 
                        target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 underline decoration-1">
                        @shikuroviluz._</a> for more interesting information.
                    </p>
                    <p className="text-[8px]">
                        This website was created for entertainment and learning purposes only. This website is fanmade and is not 
                        affiliated with Mihoyo. All assets here are owned by their original owners.
                    </p>
                    <div className="bg-white h-[2px] w-full"></div>
                    <h1>Assets Support :</h1>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col">
                                <a href="https://gi.yatta.moe/en" target="_blank" rel="noopener noreferrer" 
                                    className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Project Amber
                                </a>
                                <a href="https://id.pinterest.com/" target="_blank" rel="noopener noreferrer" 
                                    className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Pinterest
                                </a>
                                <a href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener noreferrer" 
                                    className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">AOS
                                </a>
                                <a href="https://animate.style/" target="_blank" rel="noopener noreferrer" 
                                    className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Animated style
                                </a>
                                <a href="https://genshin.hoyoverse.com/id/" target="_blank" rel="noopener noreferrer" 
                                    className="underline decoration-2 text-[10px] cursor-pointer transition duration-300 hover:text-amber-300 hover:scale-105">Genshin Impact
                                </a>
                            </div>
                            <div className="bg-white h-full w-[2px] rounded-2xl"></div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-4 items-center">
                                    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                        <img src={vscode} alt="vscode" className="w-8 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                                    </a>
                                    <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                        <img src={vite} alt="vite" className="w-8 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                                    </a>
                                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                        <img src={tailwindcss} alt="tailwindcss" className="w-8 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                                    </a>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                        <img src={js_logo} alt="js" className="w-20 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                                    </a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                        <img src={git} alt="git" className="w-15 cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg"/>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white h-full w-[2px] rounded-2xl"></div>
                            <div className="flex flex-row">
                                <a href="https://www.hoyolab.com/accountCenter/postList?id=362406479" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white w-25 p-1 text-[#310056] rounded-xl flex flex-row gap-2 items-center hover:scale-105 transition duration-300">
                                        <img src={hoyolab} alt="hoyolab logo" className="rounded-xl w-8"/>
                                        <div className="flex flex-col">
                                            <h1 className="text-[8px]">Hoyolab</h1>
                                            <div className="bg-[#310056] h-[1px] w-13"></div>
                                            <h1 className="text-[8px]">as Viluz</h1>
                                        </div>  
                                    </div>
                                </a>            
                            </div>
                        </div>
                        <br />
                        {/* <div className="bg-white h-[2px] w-full rounded-2xl"></div> */}
                        <h1 className="font-bold">Contact me</h1>
                        <br />
                        <div className="flex flex-row justify-center gap-10">
                            <a href="https://www.instagram.com/frznra._?igsh=bzlyNmExemJkOGpi" target="_blank" rel="noopener noreferrer" 
                                className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 p-1 rounded-2xl hover:text-amber-300">
                                <div className="flex flex-col items-center gap-2">
                                    <i class="ri-instagram-fill ri-2x"></i>
                                    <h1>Instagram</h1>
                                </div>                       
                            </a>
                            <a href="https://x.com/viluz_needhelp" target="_blank" rel="noopener noreferrer" 
                                className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                                <div className="flex flex-col items-center gap-2">
                                    <i class="ri-twitter-x-line ri-2x"></i>
                                    <h1>X</h1>
                                </div>                       
                            </a>
                            <a href="https://www.tiktok.com/@shikuroviluz._" target="_blank" rel="noopener noreferrer" 
                                className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                                <div className="flex flex-col items-center gap-2">
                                    <i class="ri-tiktok-fill ri-2x"></i>
                                    <h1>Tiktok</h1>
                                </div>                       
                            </a>
                            <a href="https://youtube.com/@shikuroviluz?si=kEdfVYOXFkVGlAF5" target="_blank" rel="noopener noreferrer" 
                                className=" text-[10px] cursor-pointer transition duration-300 hover:scale-105 hover:text-amber-300 p-1 rounded-2xl">
                                <div className="flex flex-col items-center gap-2">
                                    < i class="ri-youtube-fill ri-2x"></i>
                                    <h1>Youtube</h1>
                                </div>                       
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Footer;