import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'aos/dist/aos.css';
import '../HomePage/Homepage.css';
import sports from '../Image/sports.jpeg';
import Homepagebg from '../Image/bg.png';
import otherActivity from '../Image/otherActivity.jpg';
import furniture from '../Image/furniture.jpg';

function HomePage() {

    useEffect(() => {
        const typed = new Typed(".auto-type", {
            strings: ["quality education", "dedicated faculty"],
            typeSpeed: 100,
            backSpeed: 150,
            loop: true,
        });


        return () => {
            typed.destroy();
        };
    }, []);
 

    return (
        <>
            <div className="Homepage-Box" >
                <img src={Homepagebg} alt='' className='homeBg z-1 w-full h-full absolute' />
                <div className="homePageContentBox font-Quicksand" >
                    <h1>We provide <span className="auto-type"></span></h1>
                    <br />
                    <h2 data-aos="fade-up" className='font-Quicksand'>Savitri Krishna Senior Secondary School-</h2>
                    <h2 data-aos="fade-up" className='font-Quicksand'>Nurturing Minds, Inspiring Futures</h2>
                </div>

            </div>
            <div className="Homepage2-Box h-fit p-10 flex flex-col items-center justify-around">
                <h1 className='text-center text-black pt-10 font-Quicksand'>Facilities</h1>
                <div className=" w-full h-fit flex flex-row align-middle justify-evenly mt-10 flex-wrap ">
                    {CardData.map((A) => (
                        <div className=' Facility_card rounded-[12px]  flex flex-col gap-3 items-center justify-center mx-3 my-3' >
                            <img src={A.img} className='Facility_img rounded-[12px]' alt='' />
                            <div className='Facility_line'>
                                <h1>{A.title}</h1>
                                <li>{A.line1}</li>
                                <li>{A.line2}</li>
                                <li>{A.line3}</li>
                            </div>
                        </div>))}
                </div>
            </div>
        </>
    )
}


export default HomePage

const CardData = [
    {
        img: otherActivity,
        title: 'curriculum activities',
        line1: "Athletic Development",
        line2: "Fitness and Recreation Center",
        line3: "Leadership Service",
    },
    {
        img: sports,
        title: 'sports',
        line1: "Creative Arts Hub",
        line2: "Language and Literature Corner",
        line3: "Outdoor Sporting Spaces",
    },
    {
        img: furniture,
        title: 'Classrooms',
        line1: "modern classrooms",
        line2: "collaborative spaces",
        line3: "ergonomic furniture",
    }
]