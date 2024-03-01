import React from 'react';

export default function ViewChoice({ setView }) {

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
            <p className="uppercase font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Select a Data Option from Below
            </p>
            <button onClick={() => setView('generation')} className="px-8 py-2 rounded-2xl bg-[#87a922] text-[#114232] greenShadow duration-200">
                <p>Generation <i className="fa-solid fa-bolt"></i></p>
            </button>
            <button onClick={() => setView('carbon')} className="px-8 py-2 rounded-2xl bg-[#87a922] text-[#114232] greenShadow duration-200">
                <p>Carbon Intensity <i className="fa-solid fa-smog"></i></p>
            </button>
        </div>
    );
}
