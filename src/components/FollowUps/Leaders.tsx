export default function Leader() {
    return (
        <main className="h-auto md:h-[300px] flex w-full ">
            <ul className="w-[250px] md:w-[370px] mx-3 snap-center grid grid-cols-2 items-center">
                <div className="border-0 w-44 h-44 rounded-full select-none hover:cursor-pointer">
                    <img src="/images/placeholders/IconPh.png" className="rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold uppercase text-2xl">Name</p>
                    <div className="flex bg-black50 rounded-lg h-14 w-4/5 items-center justify-around">
                        <p>000</p>
                        <img src="/icons/review_ico.png" alt="icon" className="w-7" />
                    </div>
                    <div className="flex gap-4">
                        <div id="movie1" className="w-2/5 h-28 bg-blue hover:cursor-pointer">
                            <img src="/images/placeholders/MovieCardPh.jpg" className="object-cover h-full" />
                        </div>
                        <div id="movie2" className="w-2/5 h-28 bg-blue hover:cursor-pointer">
                            <img src="/images/placeholders/MovieCardPh.jpg" className="object-cover h-full" />
                        </div>
                    </div>
                </div>
            </ul>
        </main>
    );
}