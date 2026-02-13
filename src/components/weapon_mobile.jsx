import { Link } from "react-router-dom";
import thecatch from "../media/weapon/the_catch.png"
import sign from "../media/weapon/engulfing_lightning.png"
function Weapon (){
    return(
    <>
    <div className="flex flex-row items-center justify-center gap-10 py-10">
        <Link to="/the_catch" data-aos="fade-right" data-aos-duration="1300">
            <div className="relative bg-[#fcf2d1] w-30 h-37 flex justify-center rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:w-32 hover:h-39 hover:p-1">
                <div className="relative bg-[#fcf2d1] w-30 h-37 flex justify-center rounded-2xl ">
                    <div className="absolute w-30 h-30 rounded-tr-2xl rounded-tl-2xl bg-[#705791]"></div>
                    <img src={thecatch} alt="f2p" className="absolute w-30"/>
                    <p className="absolute mt-31 text-black text-[13px]">The catch</p>
                </div>
            </div>
        </Link>
        <Link to="/sign" data-aos="fade-left" data-aos-duration="1300">
            <div className="relative bg-[#fcf2d1] w-30 h-37 flex justify-center rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:w-32 hover:h-39 hover:p-1">
                <div className="relative bg-[#fcf2d1] w-30 h-37 flex justify-center rounded-2xl">
                    <div className="absolute w-30 h-30 rounded-tr-2xl rounded-tl-2xl bg-[#a3682c]"></div>
                    <img src={sign} alt="sign" className="absolute w-30"/>
                    <p className="absolute mt-31 text-black text-[13px]">The catch</p>
                </div>
            </div>        
        </Link>
    </div>
    </>
    );
}

export default Weapon;