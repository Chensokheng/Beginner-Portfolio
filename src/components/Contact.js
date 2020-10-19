import React from 'react';
import content from '../content';

export default function Contact() {
  return (
    <div className=" min-h-screen  flex justify-center items-center  ">
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <img
          src={content.contact.img}
          alt="profile"
          className="m-10 transtion duration-2000 ease-in-out w-3/5 md:w-1/5"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1 className="text-white text-5xl font-bold">
            {content.contact.title}
          </h1>
          <p className="text-white text-2xl">{content.contact.desc}</p>
          <div className="flex">
            {content.contact.socials.map((social, index) => {
              return (
                <img
                  className="m-2"
                  width="50px"
                  key={index}
                  src={social.img}
                  alt={social.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
