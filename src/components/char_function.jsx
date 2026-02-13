import {Char} from "../data_character"
function Char_function(){
    return(
    <>
    {/* ---versi dekstop--- */}
    <div className="md:block hidden">
    <div className="flex flex-row justify-center">
        {/* ---page kiri--- */}
        <div className=" flex flex-col">
            <div className="py-2 ">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="1200"><h1>Raiden Nasional F2P</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 15, 2, 17].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="1200">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2 ">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="1400"><h1>Raiden Overload</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 3, 12, 2].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="1400">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2 ">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="1600"><h1>Raiden Overload Premium</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 15, 5, 7].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="1600">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="1800"><h1>Raiden Lunar Charge</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 4, 8, 6].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="1800">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {/* ---page kanan--- */}
        <div className=" flex flex-col">
            <div className="py-2">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="2000"><h1>Raiden Hyperbloom Premium</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 10, 1, 18].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="2000">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="2200"><h1>Raiden Buffer DPS</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 9, 12, 2].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="2200">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="2400"><h1>Raiden Swap DPS</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 13, 19, 16].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="2400">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-10" data-aos="fade-up" data-aos-duration="2600"><h1>Raiden Schooling</h1></div>
                <div className="tools-box px-10 grid grid-cols-4 gap-4">{Char.filter(item => [11, 14, 19, 8].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-center gap-2 p-3 border bg-[#fcf2d1] text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group"
                                    data-aos="fade-up" data-aos-duration="2600">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                            <div>
                                <h4 className="text-center text-[13px]">{char.nama}</h4>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* ---versi mobile--- */}
    <div className="flex flex-row justify-center md:hidden">
        {/* ---page kiri--- */}
        <div className=" flex flex-col py-2">
            <div className="py-2 ">
                <div className="mx-2"><h1>Raiden Nasional F2P</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 15, 2, 17].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2 ">
                <div className="mx-2"><h1>Raiden Overload</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 3, 12, 2].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2 ">
                <div className="mx-2"><h1>Raiden Overload Premium</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 15, 5, 7].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-2"><h1>Raiden Lunar Charge</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 4, 8, 6].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        
        {/* ---page kanan--- */}
            <div className="py-2">
                <div className="mx-2"><h1>Raiden Hyperbloom Premium</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 10, 1, 18].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-2"><h1>Raiden Buffer DPS</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 9, 12, 2].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-2"><h1>Raiden Swap DPS</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 13, 19, 16].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2">
                <div className="mx-2"><h1>Raiden Schooling</h1></div>
                <div className="tools-box px-2 grid grid-cols-4 gap-4">{Char.filter(item => [11, 14, 19, 8].includes(item.id)).map(char => (
                    <div className="flex flex-row justify-center items-end gap-2 border bg-[#fcf2d1] h-17 text-[#525354]
                                    cursor-pointer transition duration-300 hover:scale-105 border-zinc-600 rounded-md hover:border-zinc-800 group">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={char.gambar} alt="char" className="w-14" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Char_function;