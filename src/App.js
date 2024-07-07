import logo from './logo.svg';
import './App.css';
import Home from './View/Home';
import WpIndex from './View/WpIndex'
import StickyNavbar from './View/StickyNavbar';
import AllCompanies from './View/AllCompanies';

function App() {
  return (
    <>
<div className='bg-[#F3F3F3]'>
<Home />
<WpIndex />
<AllCompanies />
<StickyNavbar />
</div>

 
    </>
  );
}

export default App;
