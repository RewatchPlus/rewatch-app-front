import Leaders from "@components/FollowUps/Leaders"

export default function Section() {
    return (
        <main className="w-full">
            <div className="flex">
                <div id="slidercontainer" className="w-full h-auto md:h-[340px] bg-transparent flex items-center scroll-smooth snap-x overflow-x-scroll">
                    <div id="slider" className=" h-auto md:h-[300px] flex w-full grow-1">
                        <div id="first">
                            <Leaders/>
                        </div>
                    </div>
                </div>
                <div className="w-1/12 flex items-center"> next </div>
            </div>
        </main>
    );
}