import Rec from '@components/FollowUps/Recommend';
import Image from 'next/image';
import arrowRight from '@assets/icons/arrow_right.svg'

export default function Section() {
   return (
      <main className="w-full">
         <div className="flex">
            <div
               id="slidercontainer"
               className="w-full h-auto md:h-[340px] bg-transparent flex flex-col md:flex-row items-center scroll-smooth snap-x overflow-x-auto gap-20 px-10"
            >
               <div
                  id="slider"
                  className=" h-auto md:h-[300px] flex w-auto grow-1 justify-center"
               >
                  <Rec />
               </div>
               <div
                  id="slider"
                  className=" h-auto md:h-[300px] flex w-auto grow-1 justify-center"
               >
                  <Rec />
               </div>
            </div>
            <div className="md:w-4/12 ml-2 flex items-center">
               <p className="uppercase text-purple text-2xl font-bold">
                  Show More
               </p>
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
