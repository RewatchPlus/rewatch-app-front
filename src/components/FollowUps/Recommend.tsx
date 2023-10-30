export default function Rec() {
    return (
        <main className="h-auto md:h-[300px] flex w-full ">
            <div className="h-auto w-auto flex">
                <div className="h-auto w-[300px] flex">
                    <div className="-z-1 absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="372" height="284" viewBox="0 0 372 284" fill="none">
                            <path d="M0 0H322V142V213L372 248.5L322 284H0V0Z" fill="url(#paint0_linear_314_880)" />
                            <path d="M0 0H322V142V213L372 248.5L322 284H0V0Z" fill="url(#paint1_radial_314_880)" fill-opacity="0.2" />
                            <defs>
                                <linearGradient id="paint0_linear_314_880" x1="161" y1="6.229e-05" x2="-6.24504" y2="271.44" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.109987" stop-color="#3B3B4F" />
                                    <stop offset="0.70143" stop-color="#585883" />
                                    <stop offset="1" stop-color="#5B5B9B" />
                                </linearGradient>
                                <radialGradient id="paint1_radial_314_880" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238.369 104.004) rotate(111.743) scale(208.855 256.681)">
                                    <stop stop-color="#8481EF" />
                                    <stop offset="0.666667" stop-opacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="z-10 p-6 flex flex-col justify-around items-center	">
                        <h2 className="uppercase font-bold text-xl">
                            Só uma obra de arte  pra contar a história de um artista
                        </h2>
                        <div className="flex w-full gap-10 justify-center">
                            <div className="flex flex-col justify-center">
                                <h1 className="uppercase font-bold text-3xl	"> Br3nda </h1>
                                <p> ★★★★☆ </p>
                            </div>
                            <div className=" w-[93px] h-[93px] rounded-full select-none">
                                <img src="/images/placeholders/IconPh.png" className="rounded-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[282px] w-[175px] ml-8">
                    <img src="/images/placeholders/MovieCardPh.jpg" className="object-cover h-full" />
                </div>
            </div>
        </main>
    );
}