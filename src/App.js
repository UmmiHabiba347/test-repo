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


function App() {
  return (
    <>
<div className='bg-[#F3F3F3]'>
<Home />
<WpIndex />
<AllCompanies />
<PotentialFutureListing />
<StateOfUSA />
<StoriesAndideas />
<SelectedWPPOOL />
<StickyNavbar />
</div>

 
    </>
  );
}

export default App;
