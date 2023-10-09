export default function Section() {
    return (
        <main className="w-full">
            <div className="flex">
                <div id="slidercontainer" className="w-full h-auto md:h-[340px] bg-transparent flex items-center scroll-smooth snap-x overflow-x-auto">
                    <div id="slider" className=" h-auto md:h-[300px] flex w-full grow-1 justify-center">
                        
                    </div>
                </div>
                <div className="w-2/12 flex items-center">
                    <img src="/icons/arrow_right.svg" alt=">" className="hover:scale-125 duration-500 hover:cursor-pointer"/>
                </div>
            </div>
        </main>
    );
}