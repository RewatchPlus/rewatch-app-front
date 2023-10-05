
export default function Placeholder() {
    return (
        <main className="w-full">
            {/* <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                <div id='note' className="flex float-right p-4 text-2xl font-bold"> 0,0 ★</div>
                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                    <div id="m-date" className="z-10 "> 0000 </div>
                </div>
            </div> */}

            <div className="flex">
                {/* <div className="w-1/12 flex items-center"> prev </div> */}
                <div id="slidercontainer" className="w-full h-[340px] bg-transparent flex items-center scroll-smooth snap-x overflow-x-scroll cursor-grabbing">
                    {/* <div className="absolute right-0 w-1/2 h-[340px] bg-gradient-to-l from-offblack to-transparent select-none"></div> */}
                    <div id="slider" className="h-[300px] flex w-full ">
                        <ul className="w-[500px] mx-3 snap-center">
                            <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                                <div id='note' className="flex float-right p-3.5 text-2xl font-bold"> 0,0 ★</div>
                                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                                    <div id="m-date" className="z-10 "> 0000 </div>
                                </div>
                            </div>
                        </ul>
                        <ul className="w-[500px] mx-3 snap-center">
                            <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                                <div id='note' className="flex float-right p-3.5 text-2xl font-bold"> 0,0 ★</div>
                                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                                    <div id="m-date" className="z-10 "> 0000 </div>
                                </div>
                            </div>
                        </ul>
                        <ul className="w-[500px] mx-3 snap-center">
                            <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                                <div id='note' className="flex float-right p-3.5 text-2xl font-bold"> 0,0 ★</div>
                                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                                    <div id="m-date" className="z-10 "> 0000 </div>
                                </div>
                            </div>
                        </ul>
                        <ul className="w-[500px] mx-3 snap-center">
                            <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                                <div id='note' className="flex float-right p-3.5 text-2xl font-bold"> 0,0 ★</div>
                                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                                    <div id="m-date" className="z-10 "> 0000 </div>
                                </div>
                            </div>
                        </ul>
                        <ul className="w-[500px] mx-3 snap-center">
                            <div id='movie' className="bg-cardph bg-no-repeat bg-cover w-[500px] h-full rounded-2xl hover:scale-105 cursor-pointer duration-500 ">
                                <div id='note' className="flex float-right p-3.5 text-2xl font-bold"> 0,0 ★</div>
                                <div id='info' className="h-4/5 w-full flex items-end justify-between bg-gradient-to-t from-blue to-transparent mix-blend-hard-light rounded-2xl p-4 text-2xl font-bold">
                                    <div id="m-name" className="z-10 w-3/4 text-ellipsis overflow-hidden break-normal hover:break-all"> Name </div>
                                    <div id="m-date" className="z-10 "> 0000 </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* <div className="w-2/12 flex items-center"> next </div> */}
            </div>
        </main>
    );
}