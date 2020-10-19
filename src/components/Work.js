import React, { useEffect, useState } from 'react';
import content from '../content';

export default function Work() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <img
          src={process.env.PUBLIC_URL + '/assets/project-mobile.png'}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10 lg:max-w-md md:w-2/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            transform: animated
              ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
              : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
}

const ProjectDetail = () => {
  return (
    <div>
      <h1 className="inline-block m-4  font-dosis text-xl font-bold">
        {content.work.projectName}
      </h1>
      <p className="inline-block w-11/12 m-4  text-xl font-dosis">
        {content.work.desc}
      </p>
      <button className="px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl">
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Website</p>
      </button>
    </div>
  );
};
