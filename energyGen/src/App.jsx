import Generation from './components/Generation';
import CarbonIntensity from './components/CarbonIntensity';
import ViewChoice from './components/ViewChoice';

function App() {


    return (
        <main className='min-h-screen flex flex-col bg-[#2e2938] text-[#efb215] text-sm sm:text-base'>
            <ViewChoice />
            <Generation />
            <CarbonIntensity />
        </main>
    );
}

export default App;
