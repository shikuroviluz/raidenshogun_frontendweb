import sign from "../media/weapon/engulfing_lightning.png"
import star from "../media/weapon/star.png"
import { Link } from "react-router-dom";
function ENGpage(){
    return(
    <>
    <div className="md:hidden">
    <div className="flex flex-col">
        <div className="px-3 text-3xl">
            <h1 className="mb-2">Engulfing Lightning</h1>
            <div className="flex">
                <div className="relative w-full h-100 bg-[#fcf2d1] rounded-2xl flex flex-col">
                    <div className="absolute inline-block w-full px-2 pt-2 bg-[#a3682c] rounded-t-2xl">
                        <div className="flex flex-row justify-between items-end gap-20">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[10px]">Polearm</h1>
                                <h1 className="text-[15px]">Base Atk</h1>
                                <h1 className="text-[25px]">608</h1>
                                <h1 className="text-[15px]">Energy Recharge</h1>
                                <h1 className="text-[25px]">55.1%</h1>
                                <div className="flex flex-row justify-between pb-2">
                                    <img src={star} alt="star" className="w-9"/>
                                    <img src={star} alt="star" className="w-9"/>
                                    <img src={star} alt="star" className="w-9"/>
                                    <img src={star} alt="star" className="w-9"/>
                                    <img src={star} alt="star" className="w-9"/>
                                </div>
                            </div>
                            <div>
                                <img src={sign} alt="sign" className="w-40"/>
                            </div>
                        </div>
                    </div>
                    <div className="pt-51"></div>
                    <div className="p-2">
                        <div className="w-15 h-7 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center">Lv 90</div>
                    </div>                    
                    <p className="text-[13px] px-2 pb-2 text-[#525354]">
                        Timeless Dream: Eternal Stove
                        ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum 
                        bonus of 80% ATK. Gain 30% Energy Recharge for 12s after using an Elemental Burst.
                    </p>
                    <p className="text-[13px] px-2 text-[#525354]">
                        Got from Gacha in Limited Banner
                    </p>
                </div>
            </div>
            <div className="p-2"></div>
            <Link to="/" className="">
                <div className="w-fit h-10 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                                cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                    <h1 className="p-2">Back to home</h1>
                </div>
            </Link>
        </div>
    </div>
    </div>
    </>
    );
}

export default ENGpage;