export default function Header() {
   return (
      <div className="w-full flex justify-between items-center">
         <div className="flex mx-4 md:my-4 w-2/3">
            <div className="uppercase font-medium text-xs md:text-xl hover:text-purple duration-500 cursor-pointer">
               {' '}
               Home{' '}
            </div>
         </div>
         <div className="flex flex-wrap m-2 w-1/3 justify-around">
            <div className="uppercase font-medium text-xs md:text-xl hover:text-purple duration-500 cursor-pointer">
               LeaderBoard
            </div>
            <div className="uppercase font-medium text-xs md:text-xl hover:text-purple duration-500 cursor-pointer">
               Discover
            </div>
            <div className="uppercase font-medium text-xs md:text-xl hover:text-purple duration-500 cursor-pointer">
               Login
            </div>
         </div>
      </div>
   );
}
