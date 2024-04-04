import React from 'react';
import me from '../Image/me.jpg'

function Alumni() {
    // Sample data for alumni
    const alumniData = [
        { name: 'Ganesh Prajapati', graduationYear: 2017, occupation: 'IIT-Roorkee Student', location: 'Roorkee, Uttrakhand', profileImage: me },
        { name: 'Jane Smith', graduationYear: 2012, occupation: 'Marketing Manager', location: 'New York, NY', profileImage: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'David Johnson', graduationYear: 2015, occupation: 'Doctor', location: 'Chicago, IL', profileImage: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Emily Brown', graduationYear: 2018, occupation: 'Teacher', location: 'Los Angeles, CA', profileImage: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'John Doe', graduationYear: 2010, occupation: 'Software Engineer', location: 'San Francisco, CA', profileImage: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Jane Smith', graduationYear: 2012, occupation: 'Marketing Manager', location: 'New York, NY', profileImage: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'David Johnson', graduationYear: 2015, occupation: 'Doctor', location: 'Chicago, IL', profileImage: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Emily Brown', graduationYear: 2018, occupation: 'Teacher', location: 'Los Angeles, CA', profileImage: 'https://randomuser.me/api/portraits/women/4.jpg' },
    ];

    return (
        <section className="py-12 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%] ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Alumni</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {alumniData.map(alumni => (
                        <div key={alumni.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                            <img src={alumni.profileImage} alt={alumni.name} className=" w-28 h-28 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{alumni.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">Class of {alumni.graduationYear}</p>
                            <p className="text-gray-600 text-sm mb-2">{alumni.occupation}</p>
                            <p className="text-gray-600 text-sm">{alumni.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Alumni;
