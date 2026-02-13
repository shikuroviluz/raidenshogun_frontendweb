import profile from "../../public/assets/profile/gambar_untuk_profile.jpg";
import electroculus from "../../public/assets/electroculus.png"

function Home() {
    return (
    <>
    <section id="Home">
        {/* ---bagian dekstop--- */}
    <div className="hidden md:block p-4 pt-35 items-center xl:gap-0 sm:gap-6">
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center gap-4 p-4 ">
                <h1 className="text-5xl/tight font-bold animate__animated animate__fadeInLeft ">Raiden Shogun</h1>
                <h1 className="text-3xl animate__animated animate__fadeInLeft animate__delay-1s">Archon | Inazuma</h1>
                <div className="h-[2px] w-[150px] sm:w-80 bg-white animate__animated animate__fadeInLeft animate__delay-2s"></div>
                <p className="text-base/loose mb-6 opacity-75 animate__animated animate__fadeInLeft animate__delay-3s">
                    Archon Electro yang bersemayam di Inazuma dalam game Genshin Impact. Nama aslinya adalah Raiden Ei,
                    yang menciptakan boneka bernama Raiden Shogun  untuk memerintah Inazuma sementara dia bermeditasi 
                    di Plane of Euthymia. Ia juga dikenal sebagai Beelzebul, The Almighty Shogun, dan Narukami Ogosho, 
                    berjanji akan keabadian.
                </p>
                <div className="animate__animated animate__fadeInLeft animate__delay-5s">
                    <h1 className="mb-9 ">Official Trailer : </h1>
                    <a
                        href="https://youtu.be/ydPqFAEgHzs?si=jvHgbyOIUlsA5rTh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-red-700 p-4 rounded-2xl hover:bg-red-500"><i className="ri-youtube-line ri-lg mr-2"></i> 
                        YouTube
                    </a>                                 
                </div>
            </div>
            {/* ---gambar profile--- */}
            <div className="ml-auto mb-auto animate__animated animate__fadeInRight animate__delay-4s">
                <div className="md:w-90 md:h-90 sm:w-80 sm:h-80  rounded-full overflow-hidden border-3 border-black">
                    <img src={profile} alt="foto profile" className="w-full h-full object-cover"/>
                </div>
            </div>           
        </div>
        <img src={electroculus} alt="logo electroculus" className="mt-15 w-10 h-10 animate-spin" style={{animationDuration:"2"}}/>
    </div>
    {/* ---bagian mobile--- */}
    <div className="md:hidden">

  <div className="flex flex-col gap-3 p-4">

    <div>
      <h1 className="text-[40px] animate__animated animate__fadeInUp">
        Raiden Shogun
      </h1>

      <h1 className="text-[20px] animate__animated animate__fadeInUp animate__delay-1s">
        Archon | Inazuma
      </h1>
    </div>

    <div className="h-[2px] w-full max-w-[320px] mx-auto bg-white animate__animated animate__fadeInUp animate__delay-2s"></div>

    <h1 className="text-[15px] animate__animated animate__fadeInUp animate__delay-3s">
      Archon Electro yang bersemayam di Inazuma dalam game Genshin Impact. Nama
      aslinya adalah Raiden Ei, yang menciptakan boneka bernama Raiden Shogun
      untuk memerintah Inazuma sementara dia bermeditasi di Plane of Euthymia.
      Ia juga dikenal sebagai Beelzebul, The Almighty Shogun, dan Narukami
      Ogosho, berjanji akan keabadian.
    </h1>

  </div>

  <div className="w-70 h-70 rounded-full overflow-hidden mx-auto border-3 border-black animate__animated animate__fadeInUp animate__delay-4s">
    <img
      src={profile}
      alt="foto profile"
      className="w-full h-full object-cover"
    />
  </div>

  <h1 className="mb-3 text-center mt-10 animate__animated animate__fadeInUp animate__delay-5s">
    Official Trailer
  </h1>

  <div className="flex flex-col justify-center mb-10 animate__animated animate__fadeInUp animate__delay-5s">

    <a
      href="https://youtu.be/ydPqFAEgHzs?si=jvHgbyOIUlsA5rTh"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-700 p-4 rounded-2xl hover:bg-red-500 mx-auto"
    >
      <i className="ri-youtube-line ri-lg mr-2 mx-auto"></i>
      YouTube
    </a>

  </div>

</div>

    </section>
    </>
    );
}

export default Home;