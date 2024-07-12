import logo from './logo.svg';
import './App.css';
import Home from './View/Home';
import WpIndex from './View/WpIndex'
import StickyNavbar from './View/StickyNavbar';
import AllCompanies from './View/AllCompanies';
import PotentialFutureListing from './View/PotentialFutureListing';
import StateOfUSA from './View/StateOfUSA';
import StoriesAndideas from './View/StoriesAndideas';
import SelectedWPPOOL from './View/SelectedWPPOOL';
import AboutWPPOOL from './View/AoutWPOOL'
import Footer from './View/Footer';

function App() {
  return (
    <>
<div className='bg-[#F3F3F3]  w-[100vw]'>
<Home />
{/* <AllCompanies />
<PotentialFutureListing />
<StateOfUSA />
<StoriesAndideas />
<AboutWPPOOL />
<SelectedWPPOOL />
<Footer /> */}
{/* <StickyNavbar /> */}
</div>

 
    </>
  );
}

export default App;
