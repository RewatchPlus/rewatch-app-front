import Image from 'next/image';
import IconPlaceHolder from '@assets/icons/placeholder/icon_placeholder.png';
import ReviewIcon from '@assets/icons/review_ico.png';
import MovieCardImage from '@assets/images/placeholders/movie_card_black_white.jpg';

export default function Leader() {
   return (
      <main className="h-auto md:h-[300px] flex w-full ">
         <ul className="w-[250px] md:w-[370px] mx-3 snap-center grid grid-cols-2 items-center">
            <div className="border-0 w-44 h-44 rounded-full select-none hover:cursor-pointer">
               <Image
                  width={200}
                  height={200}
                  alt="movie card"
                  loading="lazy"
                  src={IconPlaceHolder}
                  className="rounded-full object-cover"
               />
            </div>
            <div className="flex flex-col gap-4">
               <p className="font-bold uppercase text-2xl">Name</p>
               <div className="flex bg-black50 rounded-lg h-14 w-4/5 items-center justify-around">
                  <p>000</p>
                  <Image
                     src={ReviewIcon}
                     width={25}
                     height={25}
                     loading="lazy"
                     alt="icon"
                     className="w-7"
                  />
               </div>
               <div className="flex gap-4">
                  <div
                     id="movie1"
                     className="w-2/5 h-28 bg-blue hover:cursor-pointer"
                  >
                     <Image
                        src={MovieCardImage}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="movie thumb"
                        className="object-cover h-full"
                     />
                  </div>
                  <div
                     id="movie2"
                     className="w-2/5 h-28 bg-blue hover:cursor-pointer"
                  >
                     <Image
                        src={MovieCardImage}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="movie thumb"
                        className="object-cover h-full"
                     />
                  </div>
               </div>
            </div>
         </ul>
      </main>
   );
}
