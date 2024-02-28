import Generation from './components/Generation';
import CarbonIntensity from './components/CarbonIntensity';
import ViewChoice from './components/ViewChoice';

function App() {


    return (
        <main className='min-h-screen flex flex-col bg-gradient-to-r from-[#b4574d] to-[#460c06] text-white text-sm sm:text-base'>
            <ViewChoice />
            <Generation />
            <CarbonIntensity />
        </main>
    );
}

export default App;
