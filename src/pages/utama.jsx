import { Link } from "react-router-dom";
import wallpaper_utama from "../media/background/wallpaper_utama.jpg"
import profile_utama from "../../public/assets/profile/utama_profile.jpg"
import socialbuzz from "../../public/assets/sosial_media/socialbuzz.webp"
import saweria from "../../public/assets/sosial_media/saweria_logo.png"
import discord from "../../public/assets/sosial_media/discord.jpg"
import youtube from "../../public/assets/sosial_media/youtube.png"
import tiktok from "../../public/assets/sosial_media/tiktok_logo.jpg"
import x from "../../public/assets/sosial_media/x.png"
import raiden_face from "../media/background/raiden_face.jpg"
import raiden_live_wallpaper from "../media/background/raiden_live_wallpaper.jpg"
import raiden_shogun from "../media/varian_raiden/raiden_shogun.jpg"
import raiden_mei from "../media/varian_raiden/raiden_mei.jpg"
import raiden_bosenmori_mei from "../media/varian_raiden/raiden_bosenmori_mei.jpg"
import Clock from "../components/clock";
function utama (){
    return(
    <>
    <div className="md:block hidden">
        <div className="flex justify-center p-4">
            <div className="inset-0 w-full max-w-7xl h-full bg-[#dedede] rounded-2xl p-2">
                <div className="flex flex-col gap-2 w-full h-full">
                    <div className="relative flex items-center justify-center overflow-hidden w-full h-70 rounded-2xl">
                        <img src={wallpaper_utama} alt="" />
                        <div className="absolute bottom-18 right-30 text-[70px] font-calsans font-bold italic text-outline">
                            <h1>SHIKURO</h1>
                        </div>
                        <div className="absolute bottom-4 right-15 text-[70px] font-calsans font-bold italic text-outline">
                            <h1>PROJECT</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex items-center justify-center w-50 h-50 overflow-hidden rounded-full border-2 border-black">
                            <img src={profile_utama} alt="pp utama" />
                        </div>
                    </div>
                    <h1 className="text-center w-full font-genshin text-black">shikuro viluz | シクロ ヴィルズ</h1>
                    <br />
                    <h1 className="text-center w-full italic text-black px-40">
                        "Wellcome guys, Here you can find various important links that I have in one place. Starting from 
                        social media, the content I create, to various projects that I am currently working on 
                        or have worked on before. Feel free to explore every link available to learn more about 
                        my activities, works, and the things I share. Thank you for visiting and supporting! If 
                        you want to help explore genshin, you can also chat or DM me on Discord"
                    </h1>
                    <br />
                    <div className="grid grid-cols-3 gap-2">
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <h1 className="text-center py-2">My project</h1>
                            <div className="bg-white w-full rounded-2xl p-1 flex flex-col">
                                <Link to="/App_raiden/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <i class="ri-global-line ri-3x"></i>
                                            <h1 className="text-center w-full text-[15px]">Raiden Shogun Portofolio Web</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <div className="flex flex-col p-2 gap-2">
                                <a href="https://sociabuzz.com/viluz/tribe?_ref=linkbio" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#55ff00] hover:text-white">
                                        <img src={socialbuzz} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Sociabuzz TRIBE</h1>
                                    </div>
                                </a>
                                <a href="https://saweria.co/shikuroviluz" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#ffae00] hover:text-white">
                                        <img src={saweria} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Saweria & Media share</h1>
                                    </div>
                                </a>
                                <a href="https://discord.gg/M9fjW4jZ" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#8c91dd] hover:text-white">
                                        <img src={discord} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Shikuro Territory Discord Server</h1>
                                    </div>
                                </a>
                                <a href="www.youtube.com/@shikuroviluz" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#770000] hover:text-white">
                                        <img src={youtube} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Youtube</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <div className="flex flex-col p-2 gap-2">
                                <a href="https://www.tiktok.com/@shikuroviluz._?_t=zs-8u22ijnmq3s&_r=1" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#303030] hover:text-white">
                                        <img src={tiktok} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Sociabuzz TRIBE</h1>
                                    </div>
                                </a>
                                <a href="https://x.com/viluz_needhelp?t=iEXFpK17CJ0sBHLlcxSbKw&s=09" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#303030] hover:text-white">
                                        <img src={x} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Saweria & Media share</h1>
                                    </div>
                                </a>
                                <div className="flex flex-row justify-center gap-2">
                                    <div className="w-80 h-[132px] overflow-hidden rounded-2xl">
                                        <img src={raiden_live_wallpaper} alt="" />
                                    </div>
                                    <div className=" w-40 h-[132px] overflow-hidden inset-0 rounded-2xl">
                                        <img src={raiden_face} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-2 h-full w-full">
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <h1 className="font-genshin text-[#310056]">Varian Raiden</h1>
                            <img src={raiden_bosenmori_mei} alt="acheron" className="w-80 rounded-2xl"/>
                            <img src={raiden_mei} alt="mei" className="w-80 rounded-2xl"/>
                            <img src={raiden_shogun} alt="shogun" className="w-80 rounded-2xl"/>
                        </div>
                        <div className="w-full h-full flex flex-col gap-2">
                            <Clock/>
                            <div className="flex flex-row justify-between w-full h-full gap-2">
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Bosenmori Mei</h1>
                                        Acheron yang punya nama asli Raiden Bosenmori Mei adalah seorang pengembara misterius 
                                        yang berjalan sendirian melintasi berbagai dunia. Ia adalah Emanator dari Nihility, 
                                        kekuatan yang berasal dari Aeon bernama IX. Berbeda dari versi Raiden lainnya, 
                                        Acheron digambarkan sebagai sosok yang sangat tenang,
                                        dingin, dan penuh misteri. Ia sering terlihat seperti seseorang yang telah melewati 
                                        banyak tragedi dan kehilangan. Masa lalunya berkaitan dengan kehancuran dunianya sendiri, 
                                        yang membuatnya terus berjalan tanpa tujuan yang jelas. Kekuatan Acheron sangat besar 
                                        dan berhubungan dengan konsep kehampaan dan kehancuran. Ia bertarung menggunakan katana 
                                        dengan kekuatan petir, tetapi aura karakternya jauh lebih gelap dan melankolis 
                                        dibandingkan versi Raiden lainnya yang di buat oleh hoyoverse.
                                    </p>
                                </div>
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Mei</h1>
                                        Karakter utama dari Honkai Impact 3rd. Raiden Mei adalah gadis lembut dan baik hati 
                                        yang awalnya hidup sebagai siswi biasa. Namun hidupnya berubah setelah dunia diserang 
                                        oleh kekuatan misterius bernama Honkai. Dalam perjalanan ceritanya, Mei membangkitkan 
                                        kekuatan besar sebagai Herrscher of Thunder, makhluk dengan kekuatan petir yang sangat 
                                        kuat. Walaupun memiliki kekuatan destruktif, Mei tetap mempertahankan sifat lembut dan 
                                        rasa tanggung jawabnya. Ia sangat peduli kepada teman-temannya, terutama kepada Kiana 
                                        Kaslana, yang menjadi alasan besar bagi Mei untuk terus bertarung dan melindungi dunia. 
                                        Mei digambarkan sebagai sosok yang elegan, tenang, dan memiliki kekuatan luar biasa, 
                                        tetapi juga membawa beban emosional yang berat akibat takdir dan pengorbanan yang harus 
                                        ia lakukan.
                                    </p>
                                </div>
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Shogun</h1>
                                        Karakter dari Genshin Impact yang memerintah wilayah Inazuma. Raiden Shogun sebenarnya 
                                        adalah boneka mekanis yang diciptakan oleh Archon Electro bernama Raiden Ei. Boneka ini 
                                        dibuat untuk memerintah Inazuma dan menjalankan prinsip Eternity, yaitu menjaga dunia 
                                        agar tidak berubah. Raiden Shogun memiliki kepribadian yang sangat tegas, disiplin, dan 
                                        hampir tidak memiliki emosi karena ia hanyalah alat untuk menjalankan kehendak Ei. 
                                        Sementara itu, Ei sendiri adalah sosok yang lebih kompleks—seorang dewa yang kehilangan 
                                        banyak hal dalam hidupnya dan mencoba menghindari perubahan demi mencegah penderitaan. 
                                        Karakter ini melambangkan konflik antara ketetapan waktu (eternity) dan perubahan dunia, 
                                        serta bagaimana seseorang menghadapi kehilangan dan tanggung jawab sebagai penguasa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="flex justify-center p-4">
            <div className="inset-0 w-full h-full bg-[#dedede] rounded-2xl p-2">
                <div className="flex flex-col gap-2 w-full h-full">
                    <div className="relative flex items-center justify-center overflow-hidden w-full h-30 rounded-2xl">
                        <img src={wallpaper_utama} alt="" />
                        <div className="absolute bottom-7 right-9 text-[20px] font-calsans font-bold italic text-outline">
                            <h1>SHIKURO</h1>
                        </div>
                        <div className="absolute bottom-2 right-5 text-[20px] font-calsans font-bold italic text-outline">
                            <h1>PROJECT</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex items-center justify-center w-50 h-50 overflow-hidden rounded-full border-2 border-black">
                            <img src={profile_utama} alt="pp utama" />
                        </div>
                    </div>
                    <h1 className="text-center w-full font-genshin text-black">shikuro viluz | シクロ ヴィルズ</h1>
                    <br />
                    <h1 className="text-center w-full italic text-black">
                        "Wellcome guys, Here you can find various important links that I have in one place. Starting from 
                        social media, the content I create, to various projects that I am currently working on 
                        or have worked on before. Feel free to explore every link available to learn more about 
                        my activities, works, and the things I share. Thank you for visiting and supporting! If 
                        you want to help explore genshin, you can also chat or DM me on Discord"
                    </h1>
                    <br />
                    <div className="grid grid-cols-1 gap-2">
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <h1 className="text-center py-2">My project</h1>
                            <div className="bg-white w-full rounded-2xl p-1 flex flex-col">
                                <Link to="/App_raiden/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <i class="ri-global-line ri-3x"></i>
                                            <h1 className="text-center w-full text-[15px]">Raiden Shogun Portofolio Web</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/"className="p-1">
                                    <div className="flex items-center relative w-full h-10 hover:scale-105 transition duration-300 bg-purple-700 p-4 rounded-2xl text-[9px]">
                                        <div className="flex flex-row justify-center items-center w-full">
                                            <h1 className="text-center w-full text-[15px] italic">Coming Soon...</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <div className="flex flex-col p-2 gap-2">
                                <a href="https://sociabuzz.com/viluz/tribe?_ref=linkbio" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#55ff00] hover:text-white">
                                        <img src={socialbuzz} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Sociabuzz TRIBE</h1>
                                    </div>
                                </a>
                                <a href="https://saweria.co/shikuroviluz" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#ffae00] hover:text-white">
                                        <img src={saweria} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Saweria & Media share</h1>
                                    </div>
                                </a>
                                <a href="https://discord.gg/M9fjW4jZ" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#8c91dd] hover:text-white">
                                        <img src={discord} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Shikuro Territory Discord Server</h1>
                                    </div>
                                </a>
                                <a href="www.youtube.com/@shikuroviluz" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#770000] hover:text-white">
                                        <img src={youtube} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Youtube</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-72 bg-[#310056] rounded-2xl">
                            <div className="flex flex-col p-2 gap-2">
                                <a href="https://www.tiktok.com/@shikuroviluz._?_t=zs-8u22ijnmq3s&_r=1" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#303030] hover:text-white">
                                        <img src={tiktok} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Sociabuzz TRIBE</h1>
                                    </div>
                                </a>
                                <a href="https://x.com/viluz_needhelp?t=iEXFpK17CJ0sBHLlcxSbKw&s=09" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#dedede] text-[#310056] flex flex-row p-2 gap-4 items-center w-full h-[62px] rounded-2xl 
                                                    hover:scale-105 transition duration-300 hover:bg-[#303030] hover:text-white">
                                        <img src={x} alt="socialbuzz" className="w-10 rounded-xl"/>
                                        <h1 className="w-full text-center">Shikuro Viluz | Saweria & Media share</h1>
                                    </div>
                                </a>
                                <div className="flex flex-row justify-center gap-2 pt-4">
                                    <div className="w-70 h-[110px] overflow-hidden rounded-2xl">
                                        <img src={raiden_live_wallpaper} alt="" />
                                    </div>
                                    <div className=" w-40 h-[110px] overflow-hidden inset-0 rounded-2xl">
                                        <img src={raiden_face} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 h-full w-full">
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <h1 className="font-genshin text-[#310056]">Varian Raiden</h1>
                            <img src={raiden_bosenmori_mei} alt="acheron" className="w-80 rounded-2xl"/>
                            <img src={raiden_mei} alt="mei" className="w-80 rounded-2xl"/>
                            <img src={raiden_shogun} alt="shogun" className="w-80 rounded-2xl"/>
                        </div>
                        <div className="w-full h-full flex flex-col gap-2">
                            <Clock/>
                            <div className="flex flex-col justify-between w-full h-full gap-2">
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Bosenmori Mei</h1>
                                        Acheron yang punya nama asli Raiden Bosenmori Mei adalah seorang pengembara misterius 
                                        yang berjalan sendirian melintasi berbagai dunia. Ia adalah Emanator dari Nihility, 
                                        kekuatan yang berasal dari Aeon bernama IX. Berbeda dari versi Raiden lainnya, 
                                        Acheron digambarkan sebagai sosok yang sangat tenang,
                                        dingin, dan penuh misteri. Ia sering terlihat seperti seseorang yang telah melewati 
                                        banyak tragedi dan kehilangan. Masa lalunya berkaitan dengan kehancuran dunianya sendiri, 
                                        yang membuatnya terus berjalan tanpa tujuan yang jelas. Kekuatan Acheron sangat besar 
                                        dan berhubungan dengan konsep kehampaan dan kehancuran. Ia bertarung menggunakan katana 
                                        dengan kekuatan petir, tetapi aura karakternya jauh lebih gelap dan melankolis 
                                        dibandingkan versi Raiden lainnya yang di buat oleh hoyoverse.
                                    </p>
                                </div>
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Mei</h1>
                                        Karakter utama dari Honkai Impact 3rd. Raiden Mei adalah gadis lembut dan baik hati 
                                        yang awalnya hidup sebagai siswi biasa. Namun hidupnya berubah setelah dunia diserang 
                                        oleh kekuatan misterius bernama Honkai. Dalam perjalanan ceritanya, Mei membangkitkan 
                                        kekuatan besar sebagai Herrscher of Thunder, makhluk dengan kekuatan petir yang sangat 
                                        kuat. Walaupun memiliki kekuatan destruktif, Mei tetap mempertahankan sifat lembut dan 
                                        rasa tanggung jawabnya. Ia sangat peduli kepada teman-temannya, terutama kepada Kiana 
                                        Kaslana, yang menjadi alasan besar bagi Mei untuk terus bertarung dan melindungi dunia. 
                                        Mei digambarkan sebagai sosok yang elegan, tenang, dan memiliki kekuatan luar biasa, 
                                        tetapi juga membawa beban emosional yang berat akibat takdir dan pengorbanan yang harus 
                                        ia lakukan.
                                    </p>
                                </div>
                                <div className="bg-[#310056] w-full h-full rounded-2xl">
                                    <p className="p-2 text-justify">
                                        <h1 className="font-bold">Raiden Shogun</h1>
                                        Karakter dari Genshin Impact yang memerintah wilayah Inazuma. Raiden Shogun sebenarnya 
                                        adalah boneka mekanis yang diciptakan oleh Archon Electro bernama Raiden Ei. Boneka ini 
                                        dibuat untuk memerintah Inazuma dan menjalankan prinsip Eternity, yaitu menjaga dunia 
                                        agar tidak berubah. Raiden Shogun memiliki kepribadian yang sangat tegas, disiplin, dan 
                                        hampir tidak memiliki emosi karena ia hanyalah alat untuk menjalankan kehendak Ei. 
                                        Sementara itu, Ei sendiri adalah sosok yang lebih kompleks—seorang dewa yang kehilangan 
                                        banyak hal dalam hidupnya dan mencoba menghindari perubahan demi mencegah penderitaan. 
                                        Karakter ini melambangkan konflik antara ketetapan waktu (eternity) dan perubahan dunia, 
                                        serta bagaimana seseorang menghadapi kehilangan dan tanggung jawab sebagai penguasa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default utama;