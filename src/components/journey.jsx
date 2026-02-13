function Journey(){ 
    return(
    <>
    {/* ---journey dekstop--- */}
    <div className="hidden md:block w-screen px-35">
    <div className="relative w-full my-24 text-white">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white" data-aos="zoom-in" data-aos-duration="3000"></div>
        <div className="relative flex justify-between">
            <div className="relative flex flex-col items-center" >
                <p className="absolute -top-12 text-sm text-center w-60" data-aos="fade-down" data-aos-duration="2000">melindungi inazuma bersama kakaknya Raiden Makoto</p>
                <div className="w-4 h-4 bg-white rounded-full z-10" data-aos="zoom-in"></div>
            </div>
            <div className="relative flex flex-col items-center" >
                <p className="absolute -bottom-28 text-sm text-center w-60" data-aos="fade-up" data-aos-duration="2200">ketika celestia meminta salah satu dari mereka naik takhta menjadi archon Ei pernah bunuh diri agar Makoto lah yang naik takhta </p>
                <div className="w-4 h-4 bg-white rounded-full z-10" data-aos="zoom-in"></div>
            </div>
            <div className="relative flex flex-col items-center">
                <p className="absolute -top-12 text-sm text-center w-60" data-aos="fade-down" data-aos-duration="2400">setelah Makoto menjadi archon dia menghidupkan Ei  lagi</p>
                <div className="w-4 h-4 bg-white rounded-full z-10" data-aos="zoom-in"></div>
            </div>
            <div className="relative flex flex-col items-center">
                <p className="absolute -bottom-18 text-sm text-center w-60" data-aos="fade-up" data-aos-duration="2600">Makoto gugur dalam perang Archon dan Takhta dilanjutkan oleh Ei hingga sekarang</p>
                <div className="w-4 h-4 bg-white rounded-full z-10" data-aos="zoom-in"></div>
            </div>
        </div>
    </div>
    </div>
    {/* ---tampilan mobile--- */}
    <div className="md:hidden w-screen ">
    
    </div>
    </>
    );
}
export default Journey;