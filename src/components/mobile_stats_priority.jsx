import sands from "../media/artefact/sands.png"
import goblet from "../media/artefact/goblet.png"
import circlet from "../media/artefact/circlet.png"
function Mobile_stats(){
    return(
    <>
    <h1 className="text-2xl mb-5 font-genshin">Stats Priority</h1>
    <div className="flex flex-col justify-center items-center mb-5">
        <div className="grid grid-cols-3 divide-white border-2 text-center">
        {/* baris 1 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={sands} alt="sands" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">Sands</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={goblet} alt="goblet" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">Goblet</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={circlet} alt="circlet" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">Circet</h1>
            </div>
        {/* baris 2 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Energy Recharge</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Electro Damage</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Crit Rate / Crit Dmg</h1>
            </div>
        {/* baris 3 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Atk%</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Atk%</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Crit Rate / Crit Dmg</h1>
            </div>
        {/* baris 3 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Elemental Mastery</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Elemental Mastery</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Elemental Mastery</h1>
            </div>
        </div>
    </div>
    </>
    );
}
export default Mobile_stats;