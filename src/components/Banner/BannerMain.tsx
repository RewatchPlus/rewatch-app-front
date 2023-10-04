import React from 'react';
// import banner from '@/public/images/Banners/mainbanner.png';

// console.log(banner);

export default function BannerMain() {
    return (
        <div className="bg-eeaobanner bg-no-repeat bg-cover h-2/3 w-full flex items-center justify-start md:px-24 px-0">
            <div>
                <h1 className='md:text-7xl text-2xl font-bold'>Rewatch +</h1>
                <br/>
                <div>
                    <input placeholder="Placeholder for Searchbar" />
                </div>

            </div>
        </div>
    );
}