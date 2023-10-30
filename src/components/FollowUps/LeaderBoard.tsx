import Leaders from '@components/FollowUps/Leaders';
import Image from 'next/image';
import medalCooper from '@assets/icons/medalha-de-bronze.svg'
import medalSilver from '@assets/icons/medalha-de-prata.svg'
import medalGold from '@assets/icons/medalha-de-ouro.svg'
import arrowRight from '@assets/icons/arrow_right.svg';

export default function Section() {
   return (
      <main className="w-full">
         <div className="flex">
            <div
               id="slidercontainer"
               className="w-full h-auto md:h-[340px] bg-transparent flex items-center scroll-smooth snap-x overflow-x-auto"
            >
               <div
                  id="slider"
                  className=" h-auto md:h-[300px] flex w-full grow-1 justify-center"
               >
                  <div id="first" className="static">
                     <Image
                        width={50}
                        height={50}
                        loading='lazy'
                        src={medalGold}
                        alt="top1"
                        className="absolute -z-10 mx-[60px] mt-56"
                     />
                     <Leaders />
                  </div>
                  <div id="second" className="static">
                     <Image
                        width={50}
                        height={50}
                        loading='lazy'
                        src={medalSilver}
                        alt="top1"
                        className="absolute -z-10 mx-[60px] mt-56"
                     />
                     <Leaders />
                  </div>
                  <div id="third" className="static">
                     <Image
                        width={50}
                        height={50}
                        loading='lazy'
                        src={medalCooper}
                        alt="top1"
                        className="absolute -z-10 mx-[60px] mt-56"
                     />
                     <Leaders />
                  </div>
               </div>
            </div>
            <div className="w-2/12 flex items-center">
               <Image
                  src={arrowRight}
                  alt=">"
                  width={50}
                  height={50}
                  loading='lazy'
                  className="hover:scale-125 duration-500 hover:cursor-pointer"
               />
            </div>
         </div>
      </main>
   );
}
