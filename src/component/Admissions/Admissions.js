import React from 'react';

function Admission() {
    const handleDownload = () => {
        // Assuming you have a PDF file named "example.pdf" in the public folder
        const url = process.env.PUBLIC_URL + '/example.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = 'example.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="py-12 px-5 bg-gray-100 h-full pt-[25%] sm:pt-[15%] md:pt-[10%]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Admissions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Admission Process</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies aliquam eros, vel commodo ex fermentum nec. Cras sit amet nulla at ligula dictum blandit nec sit amet tellus.</p>
                        <ul className="list-disc list-inside mt-4">
                            <li className="text-gray-600">Step 1: Fill out the application form.</li>
                            <li className="text-gray-600">Step 2: Submit required documents and pay application fee.</li>
                            <li className="text-gray-600">Step 3: Attend an admissions interview, if required.</li>
                            <li className="text-gray-600">Step 4: Receive admission decision.</li>
                        </ul>
                        <ul className="list-disc list-inside mt-4">
                            <h3 className="text-xl font-semibold mb-2">R. T.E. Right to Education Act 2009</h3>
                            <p className="text-gray-600">Education was declared a fundamental right by Article 21-A of the 46th Amendment of the Constitution. Passed in 2009, accepted by the President in August.This law was implemented in the country from 1 April 2010.Rule. Prath. Education Act 1964 (Act No. 31 of 1964)
                            </p>
                            <p>Note:- Children belonging to rare and disadvantaged group will be given free admission in 25 percent classes in the school.
                            </p>
                            <li className="text-gray-600">Total seats in the class: 25 percent free seats...</li>
                        </ul>


                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Admission Requirements</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies aliquam eros, vel commodo ex fermentum nec. Cras sit amet nulla at ligula dictum blandit nec sit amet tellus.</p>
                        <ul className="list-disc list-inside my-4 ">
                            <li className="text-gray-600">High school transcripts</li>
                            <li className="text-gray-600">Standardized test scores (e.g., SAT, ACT)</li>
                            <li className="text-gray-600">Letters of recommendation</li>
                            <li className="text-gray-600">Personal statement or essay</li>
                        </ul>
                        <button
                            className="text-white bg-blue-700 text-[16px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-Quicksand rounded-lg px-3 py-2.5 me-2 mb-2  font-bold dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleDownload}
                        >
                            ADMISSION FORM
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Admission;
