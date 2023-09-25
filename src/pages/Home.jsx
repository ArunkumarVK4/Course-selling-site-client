import React from 'react';
import mern from '../images/mern.png';
export default function Home() {
  return (
    <>
      <div className='m-8 mx-auto'>
        <p className='text-3xl text-gray-500'>We craft digital solutions that drive success.</p>
      </div>
      <div>
        <h2 className='text-xl font-medium m-2'>What we Offer</h2>
        <div>
          <p className='mx-8 border  border-indigo-900 p-8 bg-cyan-700 rounded-xl '>
            "Discover a world of knowledge with our diverse range of online courses, designed to
            empower learners of all levels and interests."
          </p>
          <p className='m-8 border  border-indigo-900 p-8 bg-cyan-700 rounded-xl'>From coding to cooking, our platform offers expert-led courses that cater to your passions and aspirations, all in one convenient place.</p>
          <p className='m-8 border  border-indigo-900 p-8 bg-cyan-700 rounded-xl'>Join a community of lifelong learners, where you can explore, grow, and achieve your goals through engaging and interactive online courses.</p>
        </div>
      </div>
    </>
  );
}
