import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import img1 from "../media/poster/honkai_starrail.jpg";
import img2 from "../media/poster/genshin_impact.jpg";
import img3 from "../media/poster/honkai_impact3rd.jpg";

function JGallery() {
  return (
    <>
    {/* ---tampilan dekstop--- */}
    <div className="hidden md:block">
    <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        spaceBetween={10}
        grabCursor={true}

        autoplay={{
        delay: 0,
        disableOnInteraction: false,
        }}

        speed={4000}

        coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
        }}
    >
        <SwiperSlide>
        <img src={img1} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster" />
        </SwiperSlide>
    </Swiper>
    </div>

    {/* ---tampilan mobile--- */}
    <div className="md:hidden">
    <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        spaceBetween={1}
        grabCursor={true}

        autoplay={{
        delay: 1,
        disableOnInteraction: false,
        }}

        speed={4000}

        coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
        }}
    >
        <SwiperSlide>
        <img src={img1} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img1} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} className="rounded-xl poster_mobile" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={img3} className="rounded-xl poster_mobile" />
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}

export default JGallery;