import baseatk from "../media/artefact/base_atk.png"
import skillE from "../media/artefact/skill_e.png"
import burstQ from "../media/artefact/skill_burst.png"
function Mobile_talent(){
    return(
    <>
    <h1 className="text-2xl mb-5 font-genshin text-center">Talent Priority</h1>
    <div className="flex flex-col justify-center items-center mb-5">
        <div className="grid grid-cols-2 divide-white border-2 text-center">
        
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={burstQ} alt="sands" className="w-10 rounded-2xl"/>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Burst</h1>
                <h1 className="text-[13px]">First Priority</h1>
            </div>
        {/* baris 2 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={skillE} alt="circlet" className="w-10 rounded-2xl"/>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Skill</h1>
                <h1 className="text-[13px]">Second Priority</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={baseatk} alt="circlet" className="w-10 rounded-2xl"/>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <h1 className="text-[13px]">Base Atk</h1>
                <h1 className="text-[13px]">Opsional</h1>
            </div>
        </div>
    </div>
    </>
    );
}
export default Mobile_talent;