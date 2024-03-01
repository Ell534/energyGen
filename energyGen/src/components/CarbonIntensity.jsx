import React from 'react';

export default function CarbonIntensity({ setView }) {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
            <p className="uppercase font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                This will display carbon intensity data from the API
            </p>
            <button onClick={() => setView('home')} className="px-8 py-2 rounded-2xl bg-[#87a922] text-[#114232] greenShadow duration-200">
                <p>Home <i className="fa-solid fa-bolt"></i></p>
            </button>
        </div>
    );
}
