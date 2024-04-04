import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carausel.css';
import apj from '../Image/apj.png'
import swami from '../Image/Swami Vivekananda.png'
import sundar from '../Image/sundar.png'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Carausel() {
  return (
    <>
      <div className="caraouselBody">
        <h1>Great Thoughts</h1>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1500, // Delay in milliseconds between slides
            disableOnInteraction: false, // Set to false to continue autoplay even after user interaction
          }}
        >
          {thoughtsImg.map((I) => (
            <SwiperSlide key={I.ThImg}>
              <div className="main_header_Carausel">
                <div class="row ">
                  <div class="col-md-10 col-12 mx-auto">
                    <div class="row flex-nowrap Thoughts_carousel ">
                      <div class="col-md-6 col-12 main_header_left_Carausel">
                        <p className='thought'>
                          <li>{I.thought1}</li>
                          <li>{I.thought2}</li>
                          <li>{I.thought3}</li>
                          <li><span>{I.thought4}</span></li>
                        </p>
                      </div>
                      <div class="col-md-6 col-12 main_header_left_Carausel">
                        <img src={I.ThImg} alt='' className='thinker' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const thoughtsImg = [
  {
    ThImg: swami,
    thought1: "“Strength is Life, Weakness is Death.",
    thought2: "Expansion is Life, Contraction is Death.",
    thought3: "Love is Life, Hatred is Death.",
    thought4: " ― Swami Vivekananda"
  },
  {
    ThImg: apj,
    thought1: "“Dream, Dream, Dream.",
    thought2: "Dreams transform into thoughts",
    thought3: "and thoughts result in action.”",
    thought4: " ― Dr. A.P.J. Abdul Kalam"

  },
  {
    ThImg: sundar,
    thought1:"“Keep pushing your limits.”",
    thought4:" -sundar pichai"
  }
]
