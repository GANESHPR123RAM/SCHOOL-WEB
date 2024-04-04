import React from 'react'
import './Achievements.css'
import './Carausel.css';
import achiev1 from '../Image/achiev1.png'

function Achievements() {
    return (
        <>
            <div className="main_Achievementshome">
                <div class="row ">
                    <div class="col-md-10 col-12 mx-auto">
                        <div class="row">
                            <div class="col-md-6 col-12 main_Achievements_left_home">
                                <p className='text-green-700'>Achievements</p>
                                <ul className='font-Quicksand'>
                                    <li> 1. In the year 2000, at the teacher felicitation ceremony of the Association at the divisional level, the Principal Mr. B.S. Sharawat was honored by the Education Minister of Rajasthan Government.</li>
                                    <li> 2. By Kota Diet, through a letter of commendation to the institution for giving the best examination results of the eighth board was awarded.</li>
                                    <li> 3. On 5 September 2012, Principal Shri Bhavani Shankar Sherawat was honored by MLA Mrs. Chandrakanta Meghwal in Ramganjmandi for his best service (education) in the field of education.</li>
                                    <li> 4. After giving information about the rules and regulations of RTE in the field of education by Block Education Officer Mr. Ashok Kumar Jain, the school was made a nodal center with respect. Docks of all the schools of Pipakhedi, Kumbhkot, Kushapala, Satalkhedi are collected here.</li>
                                    <li> 5. Shri B in Private School Association. S. Sherawat holds an important position.</li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-12 main_Achievements_right_home">
                                <img src={achiev1} alt="carouselimage_home" className='carouselimage_home_Achievements' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements
