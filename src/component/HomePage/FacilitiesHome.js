import React from 'react'
import './FacilitiesHome.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carausel.css';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import pic1 from '../Image/pic1.png'
import pic2 from '../Image/pic2.png'
import pic3 from '../Image/pic3.png'
function FacilitiesHome() {
    return (
        <>
            <div className="main_header_home">
                <div class="row ">
                    <div class="col-md-10 col-12 mx-auto">
                        <div class="row">
                            <div class="col-md-6 col-12 main_header_left_home">
                                <p className='text-green-700'>School Features</p>
                                <ul className='font-Quicksand'>
                                    <li>   1. Accident insurance is done for every studying student.</li>
                                    <li>  2. CCTV for discipline. close circuit room is proposed.</li>
                                    <li>   3. 24 hours electricity facility (inverter facility)</li>
                                    <li>  4. Facility of cold and filtered water</li>
                                    <li>  5. School building with two storeys with airy and light rooms.</li>
                                    <li>  6. Furniture (table-chairs) is available for students in all the classrooms.</li>
                                    <li> 7. There are separate water and toilet facilities for the students on both the floors of the building.</li>
                                    <li>  8. Computer education is given free of cost.</li>
                                    <li>  9. Prayer place and meeting room has been constructed.</li>
                                    <li>  10. Sports and library materials are available in sufficient quantity.</li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-12 main_header_right_home">
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
                                            <img src={I.ThImg} alt="carouselimage_home" className='carouselimage_home' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilitiesHome


const thoughtsImg = [
    {
        ThImg: pic1
    },
    {
        ThImg: pic2
    },
    {
        ThImg: pic3
    }
]