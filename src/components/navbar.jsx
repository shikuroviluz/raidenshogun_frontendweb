import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            if(window.scrollY > 150) {
                setActive(true);
            }else{
                setActive(false);
            }
        };

        window.addEventListener("scroll", handlescroll);
        return () => {
            window.removeEventListener("scroll", handlescroll);
        };
    }, []);

  return (
    <>
    {/* ---mode dekstop--- */}
    <nav className={`
        hidden md:flex sm:gap-7
        navbar-desk fixed top-0 left-0 w-full z-50 
        items-center justify-between py-5 px-10 transition-all duration-100 
        ${active ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}`}
        >
            <h1 className="text-4xl font-bold text-white mt-3">Portfolio.</h1>
            <ul className="flex gap-7 mt-3"> 
                <li><a href="#Home" className="text-2xl">Home</a></li>
                <li><a href="#Detail" className="text-2xl">Detail</a></li>
                <li><a href="#Funfact" className="text-2xl">Funfact</a></li>
                <li><a href="#Build" className="text-2xl">Build</a></li>
                <li><a href="#Guide" className="text-2xl">Guide</a></li>
        </ul>
    </nav>
    {/* ---mode mobile--- */}
    <nav className="md:hidden navbar p-3 py-7 flex items-center justify-between transition-all duration-500">
        <h1 className="text-4xl font-bold text-white mt-3">Portfolio.</h1>
        <ul className={`
            flex items-center gap-4 sm:gap-10 mt-0
            fixed left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md p-4
            rounded-br-2xl rounded-bl-2xl z-50 transition-all duration-100
            ${active ? "top-0 opacity-100":"-top-10 opacity-0"}`}> 
            <li><a href="#Home" className="sm:text-lg font-medium">home</a></li>
            <li><a href="#Detail" className="sm:text-lg font-medium">detail</a></li>
            <li><a href="#Funfact" className="sm:text-lg font-medium">funfact</a></li>
            <li><a href="#Build" className="sm:text-lg font-medium">build</a></li>
            <li><a href="#Guide" className="sm:text-lg font-medium">guide</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;