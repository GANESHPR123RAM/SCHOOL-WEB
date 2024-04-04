import React, { useEffect } from 'react'
import './Teacher.css'
import Blank from '../Image/direactor.png'
import teacher from '../Image/teacher.png'


function Teachers() {

  return (
    <>
        <section className="flex px-5  justify-center items-center flex-col align-middle  bg-gray-100 h-screen  ">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet The Teem</h2>
            <div className="container mx-auto px-4 ">
                <h2 className="text-3xl font-semibold text-center mb-8">Director</h2>
                <div className="flex items-center align-middle justify-center gap-6">
                {principalData.map((h) => (
                        <div key={h.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                            <img src={h.img} alt={h.name} className=" w-28 h-28 rounded-full mx-auto mb-4 bg-gray-50" />
                            <h3 className="text-lg font-semibold mb-2">{h.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">Class of {h.Subject}</p>
                            <p className="text-gray-600 text-sm mb-2">{h.Qualification}</p>
                            <p className="text-gray-600 text-sm">{h.Experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-12 px-5 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%] ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Faculty</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {AboutData.map((t) => (
                        <div key={t.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                            <img src={t.img} alt={t.name} className=" w-28 h-28 rounded-full mx-auto mb-4 bg-gray-50" />
                            <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">Class of {t.Subject}</p>
                            <p className="text-gray-600 text-sm mb-2">{t.Qualification}</p>
                            <p className="text-gray-600 text-sm">{t.Experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Teachers
const principalData = [
  {
    img: Blank,
    name: 'BHAWANI SHANKER SHAIRAVAT',
    Qualification: "BA BED MA ENGLISH , GNM,DMLT,BEMS",
    Experience: "Leadership Service,20 year",
  }
]

const AboutData = [
  {
    img: teacher,
    name: 'MANISH KUMAR',
    Subject: "SOCIAL SCIENCE",
    Qualification: "BA BED MA HINDI,SOCIAL SCIENCE",
    Experience: "7 year",
  },
  {
    img: teacher,
    name: 'PINKI WADIYA',
    Subject: "Science",
    Qualification: "MSC BED, MSC PHYSICS",
    Experience: "8 year",
  }
  ,
  {
    img: teacher,
    name: 'DIPAK KUMAR',
    Subject: "Maths",
    Qualification: "BSC MATH",
    Experience: "5 year",
  }
  ,
  {
    img: teacher,
    name: 'PAYAL KUMARI',
    Subject: "Athletic Development",
    Qualification: "MA BED",
    Experience: "3 year",
  },
  {
    img: teacher,
    name: 'Minakshi wadiya',
    Subject: "SOCIAL SCIENCE",
    Qualification: "BA BED MA HINDI,SOCIAL SCIENCE",
    Experience: "7 year",
  },
  {
    img: teacher,
    name: 'BHARATI KUMARI',
    Subject: "English",
    Qualification: "BA BED MA ENGLISH",
    Experience: "9 year",
  }
]

