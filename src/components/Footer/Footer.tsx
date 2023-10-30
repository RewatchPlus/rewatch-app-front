export default function Footer() {
    return (
        <main className="w-full flex justify-between items-center h-[325px] bg-blue mt-10">
            <div className="flex flex-col">
                <div className="grid grid-cols-3 px-40">
                    <div className="">
                        <h2 className="text-2xl font-medium uppercase text-start" >About Us</h2>
                        <br/>
                        <p>RewatchCinema is a company formed by movie critics who want to share their opinions online & allow people to debate their criticisms. Allowing a better experience to everyone who is considering watching certain movies.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium uppercase text-center">Pages</h2>
                        <li>
                            <ul>Home</ul>
                            <ul>Discover</ul>
                            <ul>Profile</ul>
                            <ul>List</ul>
                        </li>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium uppercase text-end">Socials</h2>
                        <li>
                            <ul>Rewatch+</ul>
                            <ul>RewatchCinema</ul>
                            <ul>Rewatch+</ul>
                        </li>
                    </div>
                </div>

                <hr />
                
                <div className="">
                    All rights reserved to api name
                </div>
            </div>
        </main>
    );
}