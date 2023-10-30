export default function MovieCard() {
   return (
      <main className="h-auto md:h-[300px] flex w-full ">
         <ul className="w-[250px] md:w-[500px] mx-3 snap-center">
            <div
               id="movie"
               className="bg-cardph bg-no-repeat bg-cover w-[250px] md:w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 "
            >
               <div
                  id="note"
                  className="flex float-right md:p-3.5 text-2xl font-bold"
               >
                  {' '}
                  0,0 ★
               </div>
               <div
                  id="info"
                  className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold"
               >
                  <div
                     id="m-name"
                     className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"
                  >
                     {' '}
                     Name{' '}
                  </div>
                  <div id="m-date" className="z-10 ">
                     {' '}
                     0000{' '}
                  </div>
               </div>
            </div>
         </ul>
      </main>
   );
}
