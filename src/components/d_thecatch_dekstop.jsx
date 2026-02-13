import thecatch from "../media/weapon/the_catch.png"
import star from "../media/weapon/star.png"
function D_WP_thecatch(){
    return(
    <>
    <div className="flex flex-col gap-3">
        <div className="relative flex flex-col w-150 h-80 bg-[#fcf2d1] rounded-2xl
                        cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg">
            <div className="absolute inline-block w-full px-2 pt-2 bg-[#705791] rounded-t-2xl">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col">
                        <h1 className="text-[10px]">Polearm</h1>
                        <h1 className="text-[15px]">Base Atk</h1>
                        <h1 className="text-[25px]">510</h1>
                        <h1 className="text-[15px]">Energy Recharge</h1>
                        <h1 className="text-[25px]">45.9%</h1>
                        <div className="flex flex-row justify-between pb-2">
                            <img src={star} alt="star" className="w-9"/>
                            <img src={star} alt="star" className="w-9"/>
                            <img src={star} alt="star" className="w-9"/>
                            <img src={star} alt="star" className="w-9"/>
                        </div>
                    </div>
                    <div>
                        <img src={thecatch} alt="sign raiden" className="w-40"/>
                    </div>
                </div>
            </div>
            <div className="absolute px-2 pt-48 text-[#525354] text-[12px]">
                <p>
                    Increases Elemental Burst DMG by 16% and Elemental Burst CRIT Rate by 6%.
                </p>
            </div>
            <div className="absolute px-2 pt-70 text-[#525354] text-[12px]">
                <p>
                    Got From Fishing in inazuma
                </p>
            </div>
        </div>
    </div>
    </>
    );
}
export default D_WP_thecatch;