'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const RequestSmartBin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, location, reason });
  };

  return (
    <div className="container mx-auto max-w-[80%] p-4 flex flex-col items-center text-black">
      <h1 className="text-3xl font-extrabold text-[#006B20] text-center max-w-[80%] pt-12 pb-10">Request a SmartBin</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 flex flex-col items-start w-[80%] mx-auto">
          <label htmlFor="email" className="block text-green-700 font-semibold">Email*</label>
          <div className="w-full flex justify-center">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email..."
              className="w-full p-3 pl-5 border border-[#08B651] rounded-xl"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col items-start w-[80%] mx-auto">
          <label htmlFor="location" className="block text-green-700 font-semibold">Location*</label>
          <div className="relative w-full">
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Requested location"
              className="w-full p-3 pl-5 border border-[#08B651] rounded-xl pr-10"
              required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Image
                src="/assets/Search.png"
                alt="Search icon"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-start w-[80%] mx-auto">
          <label htmlFor="reason" className="block text-green-700 font-semibold">Reason*</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Tell us briefly your reason for a SmartBin..."
            className="w-full p-3 pl-5 border border-[#08B651] rounded-xl h-36"
            required
          />
        </div>
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="w-[65%] bg-[#E4FA84] text-[#006B20] font-semibold py-2 px-4 rounded-2xl hover:bg-green-200 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestSmartBin;
