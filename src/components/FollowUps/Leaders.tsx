export default function Leader() {
    return (
        <main className="h-auto md:h-[300px] flex w-full ">
            <ul className="w-[250px] md:w-[370px] mx-3 snap-center bg-gray-light grid grid-cols-2 items-center">
                <div className="border w-44 h-44 rounded-full">
                    {/* <img src="@images/placeholders/IconPh.png" alt="icon"/> */}
                    <img src="/images/placeholders/IconPh.png" className="rounded-full object-cover"/> 
                </div>
                <div>
                    <p>Name</p>
                    <div>Reviews</div>
                    <div>Movies</div>
                </div>
            </ul>
        </main>
    );
}