import React from 'react';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-3">
        <h1 className="text-3xl  font-bold text-white flex-1">
          {content.nav.logo}
          <span className="h-3 w-3 bg-red-400 inline-block ml-2  rounded-full"></span>
        </h1>
        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <span className="mr-4" key={index}>
                {link}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
