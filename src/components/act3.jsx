import { Link } from "react-router-dom";
import {NPC_act3} from "../data_act3_character"
import Quest1 from "../components_text/act3/quest1";
import Quest2 from "../components_text/act3/quest2";
import Quest3 from "../components_text/act3/quest3";
import Quest4 from "../components_text/act3/quest4";
import Quest5 from "../components_text/act3/quest5";
import Quest6 from "../components_text/act3/quest6";
import Quest7 from "../components_text/act3/quest7";
import Quest8 from "../components_text/act3/quest8";
import Quest9 from "../components_text/act3/quest9";
import { useState } from "react";
function Act3(){
    const [selectedImage, setSelectedImage] = useState(null);
    return(
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
        <div className="w-full h-full bg-[#d59fff]">
            <div className="flex justify-center px-26 p-4">
                <div className="bg-[#310056] text-white p-4 rounded-2xl w-300">
                    <Link to="/App_raiden/" className="mb-2">
                        <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                            cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                        <h1 className="p-2">Back to home</h1>
                        </div>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="font-genshin text-[30px] text-center">Omnipresence Over Mortals</h1>
                        <br />
                        <p className="">
                            Omnipresence Over Mortals is the third act in Chapter II of the Archon Quests.
                        </p>
                        <br />
                        <h1 className="font-genshin text-[20px]">Quest List In Chapter II Act III</h1>
                        <div className="w-full h-[2px] bg-white"></div>
                        <div className="flex flex-col text-[15px]">
                            <br />
                            <h1>1. Sword, Fish, Resistance</h1>
                            <h1>2. Those Who Yearn for the Gods' Gaze</h1>
                            <h1>3. Delusion</h1>
                            <h1>4. The Servant's Path</h1>
                            <h1>5. Proof of Guilt</h1>  
                            <h1>6. Blind Loyalty, Reckless Courage</h1>    
                            <h1>7. Duel Before the Throne</h1>    
                            <h1>8. The Omnipresent God</h1>
                            <h1>9. Wishes</h1>
                            <br />
                            <div className="text-[20px] font-genshin py-2">
                                Summary
                                <div className="w-full h-[2px] bg-white"></div>
                            </div>
                            <h1 className="text-[18px] font-genshin">Sword, Fish, Resistance</h1>
                            <Quest1/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Those Who Yearn for the Gods' Gaze</h1>
                            <Quest2/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Delusion</h1>
                            <Quest3/>
                            <br />
                            <h1 className="text-[18px] font-genshin">The Servant's Path</h1>
                            <Quest4/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Proof of Guilt</h1>
                            <Quest5/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Blind Loyalty, Reckless Courage</h1>
                            <Quest6/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Duel Before the Throne</h1>
                            <Quest7/>
                            <br />
                            <h1 className="text-[18px] font-genshin">The Omnipresent God</h1>
                            <Quest8/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Wishes</h1>
                            <Quest9/>
                            <br />
                        </div>
                        <br />
                        <div className="flex flex-col">
                            <h1 className="font-genshin text-[20px]">Characters</h1>
                            <div className="w-full h-[2px] bg-white"></div>
                            <h1 className="font-genshin text-[17px]">28 Characters appear in this Act</h1>
                            <br />
                            <div className="tools-box px-10 grid grid-cols-10 gap-4">
                                {NPC_act3.map(data_NPC_act3 => (
                                <div className="flex justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                key={data_NPC_act3.id}>
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <img 
                                                src={data_NPC_act3.foto}
                                                alt="data NPC act 3"
                                                onClick={() => setSelectedImage(data_NPC_act3.foto)}
                                                className="rounded-xl group-hover:bg-zinc-900 cursor-pointer"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-center text-[13px]">{data_NPC_act3.nama}</h4>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {selectedImage && (
                                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
                                    <img
                                        src={selectedImage}
                                        className="max-w-[80%] max-h-[80%] rounded-lg"
                                        alt="popup"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    <Link to="/App_raiden/" className="mb-2">
                        <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                            cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                        <h1 className="p-2">Back to home</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
        <div className="w-full h-full bg-[#d59fff]">
            <div className="flex justify-center px-2 p-4">
                <div className="bg-[#310056] text-white p-4 rounded-2xl w-300">
                    <Link to="/App_raiden/" className="mb-2">
                        <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                            cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                        <h1 className="p-2">Back to home</h1>
                        </div>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="font-genshin text-[30px] text-center">Omnipresence Over Mortals</h1>
                        <br />
                        <p className="">
                            Omnipresence Over Mortals is the third act in Chapter II of the Archon Quests.
                        </p>
                        <br />
                        <h1 className="font-genshin text-[20px]">Quest List In Chapter II Act III</h1>
                        <div className="w-full h-[2px] bg-white"></div>
                        <div className="flex flex-col text-[15px]">
                            <br />
                            <h1>1. Sword, Fish, Resistance</h1>
                            <h1>2. Those Who Yearn for the Gods' Gaze</h1>
                            <h1>3. Delusion</h1>
                            <h1>4. The Servant's Path</h1>
                            <h1>5. Proof of Guilt</h1>  
                            <h1>6. Blind Loyalty, Reckless Courage</h1>    
                            <h1>7. Duel Before the Throne</h1>    
                            <h1>8. The Omnipresent God</h1>
                            <h1>9. Wishes</h1>
                            <br />
                            <div className="text-[20px] font-genshin py-2">
                                Summary
                                <div className="w-full h-[2px] bg-white"></div>
                            </div>
                            <h1 className="text-[18px] font-genshin">Sword, Fish, Resistance</h1>
                            <Quest1/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Those Who Yearn for the Gods' Gaze</h1>
                            <Quest2/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Delusion</h1>
                            <Quest3/>
                            <br />
                            <h1 className="text-[18px] font-genshin">The Servant's Path</h1>
                            <Quest4/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Proof of Guilt</h1>
                            <Quest5/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Blind Loyalty, Reckless Courage</h1>
                            <Quest6/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Duel Before the Throne</h1>
                            <Quest7/>
                            <br />
                            <h1 className="text-[18px] font-genshin">The Omnipresent God</h1>
                            <Quest8/>
                            <br />
                            <h1 className="text-[18px] font-genshin">Wishes</h1>
                            <Quest9/>
                            <br />
                        </div>
                        <br />
                        <div className="flex flex-col">
                            <h1 className="font-genshin text-[20px]">Characters</h1>
                            <div className="w-full h-[2px] bg-white"></div>
                            <h1 className="font-genshin text-[17px]">28 Characters appear in this Act</h1>
                            <br />
                            <div className="tools-box px-10 grid grid-cols-3 gap-4">
                                {NPC_act3.map(data_NPC_act3 => (
                                <div className="flex justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                key={data_NPC_act3.id}>
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <img 
                                                src={data_NPC_act3.foto}
                                                alt="data NPC act 3"
                                                onClick={() => setSelectedImage(data_NPC_act3.foto)}
                                                className="rounded-xl group-hover:bg-zinc-900 cursor-pointer"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-center text-[13px]">{data_NPC_act3.nama}</h4>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {selectedImage && (
                                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
                                    <img
                                        src={selectedImage}
                                        className="max-w-[80%] max-h-[80%] rounded-lg"
                                        alt="popup"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    <Link to="/App_raiden/" className="mb-2">
                        <div className="w-fit h-8 bg-[#525354] rounded-xl text-[15px] flex items-center justify-center text-white 
                            cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:text-[#525354] hover:bg-white">
                        <h1 className="p-2">Back to home</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Act3;