import Generation from './components/Generation';
import CarbonIntensity from './components/CarbonIntensity';
import ViewChoice from './components/ViewChoice';

function App() {


    return (
        <main className='min-h-screen flex flex-col bg-[#114232] text-[#fcdc2a] text-sm sm:text-base'>
            <ViewChoice />
            <Generation />
            <CarbonIntensity />
        </main>
    );
}

export default App;
