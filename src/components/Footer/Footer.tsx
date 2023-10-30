export default function Footer() {
   return (
      <footer className="w-full flex justify-between items-center bg-blue mt-5 py-4">
         <div className="flex flex-col">
            <div className="grid grid-cols-3 px-40">
               <div>
                  <h2 className="text-2xl font-medium uppercase text-center">
                     About Us
                  </h2>
                  <p className="flex items-center justify-center sm:text-sm">
                     <span className="2xl:w-7/12 text-center">
                        Rewatch+ is a company formed by movie critics who want
                        to share their opinions online & allow people to debate
                        their criticisms. Allowing a better experience to
                        everyone who is considering watching certain movies.
                     </span>
                  </p>
               </div>
               <div>
                  <h2 className="text-2xl font-medium uppercase text-center">
                     Pages
                  </h2>
                  <li className="flex flex-col items-center justify-center">
                     <ul>Home</ul>
                     <ul>Discover</ul>
                     <ul>Profile</ul>
                     <ul>List</ul>
                  </li>
               </div>
               <div>
                  <h2 className="text-2xl font-medium uppercase text-center">
                     Socials
                  </h2>
                  <li className="flex flex-col items-center justify-center">
                     <ul>Rewatch+</ul>
                     <ul>RewatchCinema</ul>
                     <ul>Rewatch+</ul>
                  </li>
               </div>
            </div>
            <div className="w-full h-[1px] bg-black50 mt-4 mb-4"></div>
            <div className="text-center">All rights reserved to api name</div>
         </div>
      </footer>
   );
}
