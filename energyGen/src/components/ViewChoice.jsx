import React from 'react';

export default function ViewChoice() {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
            <p className="uppercase font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Choose what you want to see, energy generation information or
                carbon intensity data...
            </p>
            <button className="px-8 py-2 rounded-2xl border-[3px] border-amber-950 border-solid">
                <p>Generation</p>
            </button>
            <button className="px-8 py-2 rounded-2xl border-[3px] border-amber-950 border-solid">
                <p>Carbon Intensity</p>
            </button>
        </div>
    );
}
