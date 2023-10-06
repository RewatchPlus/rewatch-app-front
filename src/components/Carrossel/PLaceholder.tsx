import MovieCard from "@components/Carrossel/MovieCard";

export default function Placeholder() {
    return (
        <main className="w-full">

            <div className="flex">
                {/* <div className="w-1/12 flex items-center"> prev </div> */}
                <div id="slidercontainer" className="w-full h-auto md:h-[340px] bg-transparent flex items-center scroll-smooth snap-x overflow-x-scroll cursor-grabbing">
                    {/* <div className="absolute right-0 w-1/2 h-[340px] bg-gradient-to-l from-offblack to-transparent select-none"></div> */}
                    <div id="slider" className=" h-auto md:h-[300px] flex w-full grow-1">
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>
                </div>
                {/* <div className="w-1/12 flex items-center"> next </div> */}
            </div>
        </main>
    );
}