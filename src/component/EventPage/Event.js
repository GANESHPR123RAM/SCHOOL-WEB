import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Ganesh from '../Image/ganesh.png'
import vishal from '../Image/vishal.png'
import Visit from '../Image/visit.png'
import colours from '../Image/colours.png'
import IND from '../Image/IND.png'
import './Event.css';
import { X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ModalExample = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [modalIsOpen, setModalIsOpen] = useState([false, false, false, false]);

    const data = [
        {
            id: 1, EventImg: Ganesh, description:
                "Celebrating Academic Excellence -Rewarding Achievement at the School Annual Function",
            eventContent: "During our school's annual function on March 6, 2017, we proudly presented PC tablets to our top-performing students who excelled in their board exams. Among them, one outstanding scholar not only cracked the JEE Advanced exam but also secured admission to the prestigious IIT Roorkee, showcasing the pinnacle of academic success and dedication.", studentName: "Ganesh Prajapati"
        },
        {
            id: 2, EventImg: vishal, description:
                "Celebrating Academic Excellence -Rewarding Achievement at the School Annual Function",
            eventContent: "Vishal is awarded a PC tablet as a token of appreciation for his dedication and academic excellence. Serving as an inspiration to fellow students, Vishal epitomizes the spirit of excellence and success at our school.", studentName: "Vishal"
        },
        {
            id: 3, EventImg: Visit, description:
                "Kota's educational tour, February 24, 2023 - blending history, culture, and biodiversity for students..", eventContent: "Our educational tour to Kota on February 24th, 2023, was an enriching experience for students and teachers alike. Exploring iconic landmarks such as Alaniya Mata Ji and Karni Mata Temple, alongside engaging attractions like the Zoological Park and Seven Wonders, provided valuable insights into history, culture, and biodiversity. Accompanied by 58 students from grades 5 to 10 and supported by a team of 10 teachers, the excursion fostered learning beyond the classroom and created lasting memories.", studentName: "educational tour"
        },
        {
            id: 4, EventImg: colours, description: "School rangoli contest: uniting creativity and culture, painting our campus with vibrant designs. ", eventContent: "In the vibrant spirit of creativity, students at our school showcased their artistic flair in a spirited rangoli-making competition, adorning the campus with intricate designs and vibrant colors. The event fostered camaraderie and celebrated cultural diversity, as participants poured their hearts into crafting mesmerizing patterns that adorned our school grounds.", studentName: "rangoli competition"
        },
        {
            id: 5, EventImg: IND, description: "Celebrate Republic Day with a vibrant dance honoring our heritage and unity. ", eventContent: "Experience the spirit of Republic Day through a captivating dance program at our school, where students showcase their talent and patriotism with every graceful step. Join us in celebrating our nation's rich heritage and unity through the power of dance.", studentName: "Republic Day"
        },
    ];

    const openModal = (index) => {
        const newModalIsOpen = [...modalIsOpen];
        newModalIsOpen[index] = true;
        setModalIsOpen(newModalIsOpen);
    };

    const closeModal = (index) => {
        const newModalIsOpen = [...modalIsOpen];
        newModalIsOpen[index] = false;
        setModalIsOpen(newModalIsOpen);
    };

    return (
        <div className='w-full h-fit flex justify-center flex-wrap items-center p-20 '>
            {data.map((item, index) => (
                <div key={item.id} className='p-10 '>
                    <div className=' EventCard rounded-xl flex flex-col gap-5 items-center justify-center mx-4 shadow-md'>
                        <img src={item.EventImg} className='EventImg rounded-xl ' alt='' />
                        <div className='EventDes text-center  '>
                            {item.description}
                        </div>
                        <button className=' bg-violet-700 text-white text-center px-2 py-1 rounded-lg ' onClick={() => openModal(index)}>Open Modal</button>
                    </div>

                    <Modal
                        isOpen={modalIsOpen[index]}
                        onRequestClose={() => closeModal(index)}
                        ariaHideApp={false}
                        className='fixed inset-0 bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'
                    >
                        <div >
                            <div className='mt-10 flex flex-col gap-3 text-white '>
                                <button onClick={() => closeModal(index)} className='place-self-end text-black'><X size={30} /></button>
                                <div className='bg-indigo-600 rounded-xl px-[20px] py-10 flex flex-col gap-2 items-center mx-4  '>
                                    <h1 className=' text-black text-2xl font-bold'>{item.studentName}</h1>
                                    <p className='max-w-md text-center'>{item.eventContent}</p>
                                </div>
                            </div>
                        </div>

                    </Modal>
                </div>
            ))}
        </div>
    );
};

export default ModalExample;
