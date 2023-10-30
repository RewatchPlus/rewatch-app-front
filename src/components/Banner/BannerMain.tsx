import Image from 'next/image';
import React from 'react';
import search from '@assets/icons/search.svg'

export default function BannerMain() {
   return (
      <div className="bg-eeaobanner md:bg-fixed bg-center bg-no-repeat bg-cover h-2/3 w-full flex items-center justify-start">
         <div className="absolute bg-gradient-to-r from-blue-dark to-transparent mix-blend-multiply bg-no-repeat bg-cover h-2/3 w-1/2 z-0"></div>
         <div className="md:px-24 px-0 z-10 w-2/3">
            <h1 className="md:text-7xl text-2xl font-bold">Rewatch +</h1>
            <br />
            <div className="w-initial">
               <form className=" rounded-2xl flex flex-row border-0 w-2/3 bg-white">
                  <input
                     placeholder="Placeholder for Searchbar"
                     className="h-10 rounded-l-2xl px-3 text-offblack flex-grow bg-transparent focus:border-0"
                  />
                  <button className="border-0 rounded-r-2xl flex justify-center items-center bg-blue w-14">
                     <Image
                        src={search}
                        alt="Search"
                        width={25}
                        loading='lazy'
                        height={25}
                     />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}
