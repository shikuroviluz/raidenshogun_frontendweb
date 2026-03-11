import paradiselost from "../media/artefact/flower_of_paradise_lost.png"
import gilded from "../media/artefact/gilded_dreams.png"
import emblem from "../media/artefact/emblem_of_severed_fate.png"
function Mobile_artefact(){
    return(
    <>
    <h1 className="text-2xl mb-5 font-genshin text-center">Best Artefact</h1>
    <div className="flex flex-col justify-center items-center mb-5">
        <div className="grid grid-cols-3 divide-white border-2 text-center">
        {/* baris 1 */}
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={emblem} alt="sands" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">4 PC</h1>
                <h1 className="text-[13px]">Emblem of Severed Fate</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={gilded} alt="goblet" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">4 PC</h1>
                <h1 className="text-[13px]">Gilded Dreams</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-2 border-white">
                <img src={paradiselost} alt="circlet" className="w-15 rounded-2xl"/>
                <h1 className="text-[13px]">4 PC</h1>
                <h1 className="text-[13px]">Flower of Paradise Lost</h1>
            </div>
        </div>
    </div>
    </>
    );
}
export default Mobile_artefact;