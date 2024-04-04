import React, { useState } from 'react';
import './aboutUs.css';
import Modal from 'react-modal';

import building from '../Image/building.png';

function About() {
    const [modalIsOpen, setModalIsOpen] = useState([false, false, false, false]);

    const openAbout = () => {
        const newModalIsOpen = [...modalIsOpen];
        newModalIsOpen[0] = true;
        setModalIsOpen(newModalIsOpen);
    };

    const closeAbout = () => {
        const newModalIsOpen = [...modalIsOpen];
        newModalIsOpen[0] = false;
        setModalIsOpen(newModalIsOpen);
    };


    return (<>

        <div className="main_header py-12 bg-gray-100 h-full  pt-[10%]">
            <div class="row ">
                <div class="col-md-10 col-12 mx-auto">
                    <div class="row">
                        <div class="col-md-6 col-12 main_header_left">
                            <p>Welcome to Savitri Krishna Secondary School</p>
                            <h1>Preparing Students for<span className='text-green-700'> Successful Careers</span></h1>
                            <div className=" flex">
                                <button type="button" class="text-white text-[16px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg px-3 py-2.5 font-bold  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => openAbout()}>check more</button>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 main_header_right">
                            <img src={building} alt='' className='rounded-xl drop-shadow-2xl flex align-middle justify-center' />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen[0]}
                onRequestClose={() => closeAbout(0)}
                ariaHideApp={false}
                className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'
            >
                <div className='mt-5 md:mt-10 mx-2 bg-indigo-600 rounded-xl p-4 flex flex-col gap-2 items-center'>
                    <h1 className='font-extrabold font-Quicksand text-2xl md:text-lg text-white '>school introduction</h1>
                    <p className='max-w-md text-justify text-xs md:text-sm font-Quicksand'>Savitri Krishna Bal Vidya Mandir, established in 1999-2000 through community collaboration, aims to provide quality education to underprivileged students. Registered under the Rajasthan Organization Registration Act 1958, it's recognized by the Education Department of Rajasthan Government and Bikaner. Renowned for its facilities, the school fosters a conducive learning environment. From humble beginnings, it has flourished into a prominent educational institution, symbolizing growth akin to a mighty banyan tree. Maternal grandparents play a pivotal role in guiding students towards higher education and future careers.</p>
                    <span><button type="button" class="text-gray-900 bg-white from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => closeAbout()}>close</button></span>
                </div>

            </Modal>
        </div>

    </>
    );
}

export default About;


