import React from 'react';

const FAQ = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 animate__animated animate__fadeIn">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 mb-12 animate__animated animate__fadeIn animate__delay-1s">
                    Find answers to the most common questions asked by our customers.
                </p>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
                            <div className="flex items-center mb-4">
                                <i className="fas fa-question-circle text-2xl text-gray-800 mr-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800">What is Touch Management?</h3>
                            </div>
                            <p className="text-gray-600">Touch Management is a comprehensive solution for streamlining business operations and improving efficiency across various processes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
                            <div className="flex items-center mb-4">
                                <i className="fas fa-question-circle text-2xl text-gray-800 mr-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800">How can I contact support?</h3>
                            </div>
                            <p className="text-gray-600">You can contact our support team via email at support@touchmanagement.com or by using the contact form on our website.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-4s">
                            <div className="flex items-center mb-4">
                                <i className="fas fa-question-circle text-2xl text-gray-800 mr-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800">What services do you offer?</h3>
                            </div>
                            <p className="text-gray-600">We offer a range of services including process optimization, team management, and growth strategy development to enhance your business's success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
