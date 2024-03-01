import Generation from './components/Generation';
import CarbonIntensity from './components/CarbonIntensity';
import ViewChoice from './components/ViewChoice';
import { useState } from 'react';


function App() {

    const [view, setView] = useState('home')
    return (
        <main className='min-h-screen flex flex-col bg-[#114232] text-[#fcdc2a] text-sm sm:text-base'>
            {view === 'home' && <ViewChoice setView={setView} />}
            {view === 'generation' && <Generation setView={setView} />}
            {view === 'carbon' && <CarbonIntensity setView={setView} />}
        </main>
    );
}

export default App;
