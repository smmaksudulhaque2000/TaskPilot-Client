import React from 'react';
import { FaDollarSign, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PricingPlans = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Choose Your Pricing Plan</h2>
        <p className="text-lg text-gray-500 mt-2">Find the perfect plan for your needs</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ease-in-out w-80">
          <div className="text-center mb-6">
            <FaDollarSign className="text-4xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">Basic Plan</h3>
            <p className="text-gray-400 text-lg">Perfect for individual users</p>
          </div>
          <div className="mb-6 text-center">
            <p className="text-3xl font-semibold text-gray-800">$9.99 / month</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Access to all basic features</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Email support</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-500 mr-3" />
              <span className="text-gray-400 line-through">No priority support</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Choose Plan</button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ease-in-out w-80">
          <div className="text-center mb-6">
            <FaDollarSign className="text-4xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">Standard Plan</h3>
            <p className="text-gray-400 text-lg">Great for small teams</p>
          </div>
          <div className="mb-6 text-center">
            <p className="text-3xl font-semibold text-gray-800">$29.99 / month</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Everything in Basic Plan</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Priority email support</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Access to reports</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Choose Plan</button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ease-in-out w-80">
          <div className="text-center mb-6">
            <FaDollarSign className="text-4xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">Premium Plan</h3>
            <p className="text-gray-400 text-lg">Best for large teams</p>
          </div>
          <div className="mb-6 text-center">
            <p className="text-3xl font-semibold text-gray-800">$49.99 / month</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Everything in Standard Plan</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">24/7 priority support</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-gray-700">Dedicated account manager</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
