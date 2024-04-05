import React from 'react'
import me from '../Image/me.jpg'
// Sample data for past results {
const pastResults10 = [
    { name: 'Kavita ', Year: 2017, Result: '88%', profileImage: me },
    { name: 'Rachna', Year: 2023, Result: '85%', profileImage: me },
    { name: 'Manish', Year: 2023, Result: '96%', profileImage: me },
    { name: 'Ajeet Kumar', Year: 2017, Result: '93%', profileImage: me },
    


];
const pastResultsN = [
    { name: 'Muskan', Year: 2023, Result: '', profileImage: me },
    { name: 'Ganesh Prajapati', Year: 2017, Result: 'IIT-Roorkee Student', profileImage: me },
    { name: 'Muskan', Year: 2023, Result: '', profileImage: me },
    { name: 'Ganesh Prajapati', Year: 2017, Result: 'IIT-Roorkee Student', profileImage: me },

];
const pastResults8 = [
    { name: '1', Year: 2023, Result: 'A', profileImage: me },
    { name: '1', Year: 2023, Result: 'A', profileImage: me },
    { name: '1', Year: 2023, Result: 'A', profileImage: me },

];
function OverPastResult() {
    return (
        <>
            <section className="py-12 px-5 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%] ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">10th Class Result</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {pastResults10.map(result => (
                            <div key={result.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                                <img src={result.profileImage} alt={result.name} className=" w-28 h-28 rounded-full mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">Year: {result.Year}</p>
                                <p className="text-gray-600 text-sm mb-2">Result: {result.Result} Grade</p>

                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section className="py-5 px-5 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%] ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Navodaya selection</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {pastResultsN.map(result => (
                            <div key={result.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                                <img src={result.profileImage} alt={result.name} className=" w-28 h-28 rounded-full mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">Year: {result.Year}</p>
                                <p className="text-gray-600 text-sm mb-2">Result: {result.Result} Grade</p>

                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="py-5 px-5 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%] ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">8th Class Result</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                        {pastResults8.map(result => (
                            <div key={result.name} className="bg-white text-center shadow-md p-6 rounded-lg">
                                <img src={result.profileImage} alt={result.name} className=" w-28 h-28 rounded-full mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">Year: {result.Year}</p>
                                <p className="text-gray-600 text-sm mb-2">Result: {result.Result} Grade</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OverPastResult
