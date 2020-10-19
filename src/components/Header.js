import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';
import content from '../content';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="w-full md:w-2/5 ">
          <img
            src={content.header.img}
            alt="profile"
            className={`w-full mx-auto`}
          />
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <h2
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>

          <button
            className={` animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3500)}`}
          >
            {content.header.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
