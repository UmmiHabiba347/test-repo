import React from 'react';
import './LandingPage.css';
import { ButtonGroup, Button } from "@material-tailwind/react";
import bgimg from './../assets/images/LandingPage/video.mp4';
import g1 from './../assets/images/LandingPage/Group 17 (1).png';
import g2 from './../assets/images/LandingPage/Group 19.png';
import g3 from './../assets/images/LandingPage/Group 21 (1).png';
import g4 from './../assets/images/LandingPage/Group 22.png';
import card1 from './../assets/images/LandingPage/card1.png';
import card2 from './../assets/images/LandingPage/card2.png';
import g5 from './../assets/images/LandingPage/Group 23 (1).png';
import g6 from './../assets/images/LandingPage/Group 24.png';
import g7 from './../assets/images/LandingPage/Group 26.png';
import g8 from './../assets/images/LandingPage/Group 27.png';
import g9 from './../assets/images/LandingPage/Group 28.png';
import g10 from './../assets/images/LandingPage/Rectangle 6.png';
import g11 from './../assets/images/LandingPage/Group 25.png';
import g12 from './../assets/images/LandingPage/Group 29.png';
import g13 from './../assets/images/LandingPage/Group 30.png';
import g14 from './../assets/images/LandingPage/Group 32.png';
import g15 from './../assets/images/LandingPage/Group 33.png';
import g16 from './../assets/images/LandingPage/Group 34.png';
import g17 from './../assets/images/LandingPage/WhatsApp Image 2024-06-07 at 2.08.png';
import g18 from './../assets/images/LandingPage/WhatsApp Image 2024-06-07 at 2.20.png';
import g19 from './../assets/images/LandingPage/WhatsApp Image 2024-06-07 at 2.47.png';
import g20 from './../assets/images/LandingPage/Group 35.png';
import g21 from './../assets/images/LandingPage/WhatsApp (1).png';
import g22 from './../assets/images/LandingPage/Group 37 (1).png';
import g23 from './../assets/images/LandingPage/Social Icons (1).png';
import g24 from './../assets/images/LandingPage/Social Icons (2).png';
import g25 from './../assets/images/LandingPage/Social Icons (3).png';
import g26 from './../assets/images/LandingPage/Social Icons (4).png';
import g27 from './../assets/images/LandingPage/Social Icons (5).png';
import g28 from './../assets/images/LandingPage/Social Icons.png';
import g29 from './../assets/images/LandingPage/Web  1 (1).png';




import { CiSearch } from "react-icons/ci";


function LandingPage() {
  return (
    <div className='relative w-full h-screen '>
    {/* Video Background */}
    <video className='absolute top-0 left-0 w-full h-full object-cover' src={bgimg} autoPlay loop muted />

    {/* Content on top of the video */}
    <div className='relative z-10 w-full h-full'>
        <div className='flex justify-end  px-8'>
          <ButtonGroup className='mt-6'>
            <Button type='outlined' className="border border-[#6D978B] px-3 bg-[#6D978B] font-bold text-[16px] text-[#fff] rounded-full">
              <span className="shadow-2xl">Create Your Account</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className='flex flex-col items-center h-full'>
          <div className='font-normal text-[#fff] text-[36px] sm:text-[40px] md:text-[50px] mb-4 mt-8 text-center'>
            Connecting People to Education
          </div>

          <div className='py-3 px-2 rounded-full bg-[rgba(38,169,133,0.42)] text-[#fff]'>
            <div className='flex gap-4 sm:gap-6 py-6 px-4 text-[14px] sm:text-[18px] flex-wrap justify-center'>
              <span>All</span>
              <span>Courses</span>
              <span>Uni/Colleges & Schools</span>
              <span>Hostels & Share Rooms</span>
              <span>Academics</span>
              <span>Scholarships</span>
              <span>Internships</span>
            </div>

            {/* SEARCH INPUT FIELD */}
            <div className="w-full mt-2 px-2">
              <div className="relative sm:px-8 px-4 w-full h-[50px]">
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-blue-gray-500">
                           <CiSearch color='#fff' size={'35px'} />
                </div>
                 <input
                  className="w-full h-full bg-[#6D978B] px-4 py-3 border border-[#6D978B] text-[#333] font-sans font-normal outline-none placeholder:text-[16px] sm:placeholder:text-[20px] placeholder:text-[#fff] placeholder:font-sans rounded-full"
                  placeholder="      Search for courses, uni & colleges and information"
                  style={{ fontFamily: 'Nantes !important' }}
                />
              </div>
            </div>
          </div>

          <div className='text-[20px] sm:text-[24px] md:text-[28px] text-[#fff] mb-20 mt-4 text-center'>
            Apply to Any University, College, School and Hostel
          </div>
        </div>
    </div>

    {/* Image Overlay */}
    <div className='absolute top-[60%] mt-10 w-full z-2'>
        <img src={g1} width='100%' alt="Overlay" className='object-cover sm:h-[400px] sm:mb-14' />
    </div>

    {/* Cards one */}
    <div className='absolute top-[60%] w-full px-4 lg:px-14'>
      <div className='flex flex-row flex-wrap gap-6 items-center'>
        <div className='flex-1 min-w-[45%] sm:min-w-[30%] lg:min-w-[auto]'>
          <img src={card1} alt="Card 1" className='w-full h-auto object-contain' />
        </div>
        <div className='flex-1 min-w-[45%] sm:min-w-[30%] lg:min-w-[auto]'>
          <div>
            <img src={card2} alt="Card 2" className='w-full h-auto object-contain' />
          </div>
          <div className='mt-2 sm:mt-4 lg:mt-6 flex flex-row justify-center'>
            <span className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px]'>Advertisement.</span>
            <span className='text-[#4FFFB0] text-[10px] sm:text-[12px] md:text-[14px] ml-1'>Why seeing ads?</span>
          </div>
        </div>
        <div className='flex-1 min-w-[100%] sm:min-w-[60%] lg:min-w-[auto]'>
          <div className='bg-black text-[#fff] w-full py-4 px-4 lg:px-6'>
            <div style={{ fontFamily: 'Just Another Hand, cursive' }} className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-bold'>
              OPPORTUNITY
            </div>
            <div className='text-[12px] sm:text-[14px] md:text-[16px] leading-relaxed'>
              Want to start your own University
              <br />
              or Institute? Get expert advice and
              <br />
              a detailed feasibility report.
              <br />
              Let's make your vision a reality!
            </div>
          </div>
          <div className='mt-2 sm:mt-4 md:mt-6 flex flex-row justify-center'>
            <span className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px]'>Advertisement.</span>
            <span className='text-[#4FFFB0] text-[10px] sm:text-[12px] md:text-[14px] ml-1'>Why seeing ads?</span>
          </div>
        </div>
      </div>
    </div>

    {/* Cards two */}
    <div className='bg-[#1D8C6E] w-full h-auto py-12 sm:py-16 px-4 xl:px-12 sm:px-8 md:px-10 flex justify-center items-center'>
        <div className='flex flex-row  gap-6 sm:mt-20  xl:mt-20'>
        <div className='bg-[#8fc0a9] h-[25vh] w-[22vw] text-center overflow-hidden p-4 text-[#fff]'>
          <div className='xl:text-[96px] lg:text-[66px] md:text-[66px] sm:text-[46px]'>90</div>
          <div className='xl:text-[36px] md:text-[20px] lg:text-[26px] sm:text-[12px]'>Scholarships</div>
        </div>
        <div className='bg-[#8fc0a9] h-[25vh] w-[22vw] text-center overflow-hidden p-4 text-[#fff]'>
          <div className='xl:text-[96px]  lg:text-[66px] md:text-[66px] sm:text-[46px]'>1099</div>
          <div className='xl:text-[36px] md:text-[20px] lg:text-[26px] sm:text-[12px]'>New Admissions</div>
        </div>
        <div className='bg-[#8fc0a9] h-[25vh] w-[22vw] text-center overflow-hidden p-4 text-[#fff]'>
          <div className='xl:text-[96px]  lg:text-[66px] md:text-[66px] sm:text-[46px]'>209</div>
          <div className='xl:text-[36px] md:text-[20px] lg:text-[26px] sm:text-[12px]'>Total Insitutions</div>
        </div>
        <div className='bg-[#8fc0a9] h-[25vh] w-[22vw] text-center overflow-hidden p-4 text-[#fff]'>
          <div className='xl:text-[96px]  lg:text-[66px] md:text-[66px] sm:text-[46px]'>333</div>
          <div className='xl:text-[36px] md:text-[20px] lg:text-[26px] sm:text-[12px]'>Hostels</div>
        </div>
        </div>
    </div> 

    {/* Cards three */}
    <div className='bg-[#1D8C6E] w-full h-auto sm:px-6 py-12'>
      <div className='flex flex-row justify-center items-center gap-10'>
        <div className=''><img src={g2} alt="" /></div>
        <div className=''><img src={g3} alt="" /></div>
        <div className=''><img src={g4} alt="" /></div>
      </div>
    </div>

    {/*   INTERNATIONAL ADMISSIONS */}
    <div className='bg-[#1D8C6E] w-full h-auto py-12'>
        <img width={'100%'} height={'auto'} src={g5} alt="" />
    </div>

    {/* BS,MS & PHD PROGRAMS */}
    <div className='bg-[#CCCCCC] relative sm:h-[25vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]'>
  {/* Background Image */}
  <div className='relative z-0'>
    <img width={'100%'} height={'100%'} src={g10} alt="" />
  </div>

  {/* Images on Top of Background */}
  <div className='absolute inset-0 z-10 flex flex-row gap-6 sm:px-6 py-6 justify-center '>
    <div><img className='w-[100%]' width='100%' src={g6} alt="" /></div>
    <div><img className='w-[100%]' width={'100%'} src={g11} alt="" /></div>
  </div>
    </div>

    {/*SHORT COURSES,COACHING ACADEMY  */}
    <div className='bg-[#CCCCCC] sm:px-6'>
      <div className='flex flex-row gap-10 py-14 justify-center'>
        <div><img src={g7} alt="" /></div>
        <div><img src={g8} alt="" /></div>
        <div><img src={g9} alt="" /></div>
      </div>
    </div>

    {/* HOSTELS & ROOM SHARING */}
    <div className='bg-[#CCCCCC] py-14 flex justify-center sm:px-6 items-center gap-6'>
      <div><img src={g12} alt="" /></div>
      <div><img src={g13} alt="" /></div>

    </div>

    {/* OUR PARTNERS */}
    <div className='bg-[#CCCCCC] flex flex-col sm:flex-row items-center justify-center p-4'>
      <div className='text-center sm:text-left'>
        <span className='text-[#2ec89c] text-[40px] sm:text-[64px] font-bold'>Our</span>
        <span className='text-[40px] sm:text-[64px] text-#333 font-normal'>Partners</span>
      </div>
      <div className='mt-4 sm:mt-0 sm:ml-4'>
        <span className='inline-block px-6 sm:px-12 py-1 rounded-full font-bold text-[20px] sm:text-[30px] bg-[#2ec89c] text-[#fff]'>
          Apply for the Partnership
        </span>
      </div>
    </div>

    {/*   insitutions jobs & interhips */}
    <div className='bg-[#CCCCCC] w-full h-auto sm:px-6 py-12'>
      <div className='flex flex-row justify-center items-center gap-10'>
        <div className=''><img src={g14} alt="" /></div>
        <div className=''><img src={g15} alt="" /></div>
        <div className=''><img src={g16} alt="" /></div>
      </div>
    </div>

    {/* Admissions */}
    <div className='px-14 bg-[#CCCCCC]'>
      <div className='px-6 py-2 bg-[#1D8C6E] flex flex-col justify-center '>
        <div className=' font-bold text-[64px] text-[#fff]'>Easy Steps for Admission</div>
        <div>
          <span className=' font-bold text-[24px] text-[#fff]'>
          1. Choose Course and Institute 2. Submit Application 3. After Confirmation Pay Online 
          </span>
          <span className='text-[#00ffb6] text-[32px] font-bold ' >    “Apply Now”</span>
        </div>
      </div>
    </div>

    {/* Events & Open days */}
    <div className='bg-[#CCCCCC] px-14 py-4'>
      <div className=''>
        <span className='text-[#2ec89c] text-[64px] font-bold'>Events</span>
        <span className='text-[64px] text-#333 font-normal'> And Open Days</span>
      </div>

      <div className='flex flex-row justify-center gap-10'>
        <div className='w-[20vw] flex flex-col gap-4'>
          <div><img src={g17} alt="" /></div>
          <div>
            In March 2023, CISCO BRAINS Institute Peshawar,
            in collaboration with Admissionsuc, held an
            event with the Chairman of HEC as the chief guest,
            along with the CISCO Country Director and the Rector of BRAINS. 
            <div className='text-[#3DA5F4]'>Read More > </div>
          </div>
        </div>
        <div className='w-[20vw] flex flex-col gap-4'>
          <div><img src={g18} alt="" /></div>
          <div>
          In 2018-19, AUSC sent 70 students in the first 
          round and 100 students in the second round on 
          scholarships for MS programs to Sichuan
          University of Science and Technology in China. 
          <div className='text-[#3DA5F4]'>Read More > </div>

          </div>
        </div>
        <div className='w-[20vw] flex flex-col gap-4'>
          <div><img src={g19} alt="" /></div>
          <div>
          In May 2024, the Department of Management 
          Sciences at COMSATS University Islamabad,
          Attock Campus, hosted an event for startups.  
          <div className='text-[#3DA5F4]'>Read More > </div>
          </div>
        </div>
      </div>

    </div>

    {/*Career Page  */}
    <div className='bg-[#CCCCCC] w-full flex justify-center h-auto sm:px-6 py-12'>
        <img width={'70%'} height={'auto'} src={g20} alt="" />
    </div>

    {/* Live chat whatsapp */}
    <div className='bg-[#CCCCCC]  flex justify-center'>
      <div className='bg-[#1D8C6E] w-[70%] rounded-2xl px-8 flex flex-row justify-between items=center'>
        <div className='text-[#fff]  font-bold text-[40px] '>
        <div className='mt-3'>Live Chat</div>
        <div>whatsapp</div> 
        </div>
        <div><img src={g21 } alt="" /></div>
      </div>
    </div>

    {/* Footer */}
    <div className='bg-[#CCCCCC] py-12 relative'>
  {/* Container */}
  <div>
    {/* Image */}
    <div className='relative z-0'>
      <img className='w-full h-full ' src={g22} alt="" />
    </div>
    
    {/* Second div positioned on top */}
    <div className='second absolute inset-0 z-10 sm:pb-10 xl:pb-20 flex flex-row justify-around items-center'>
      <div className='flex flex-col sm:gap-2 xl:gap-4'>
        <div className='flex justify-center'>
          <button style={{border:'3px solid #fff'}} className='rounded-full text-[#fff] sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] sm:py-1 sm:px-4 py-2 px-6'>Contact Us</button>
        </div>
        <div className='flex flex-row lg:gap-6 md:gap-4 sm:gap-3 xl:gap-8 justify-center'>
          <div><img className='sm:w-[25px] xl:w-[100%]' width={'100%'} height={'100%'} src={g23} alt="" /></div>
          <div><img className='sm:w-[25px] xl:w-[100%]' src={g24} alt="" /></div>
          <div><img className='sm:w-[25px] xl:w-[100%]'  src={g25} alt="" /></div>
          <div><img className='sm:w-[25px] xl:w-[100%]' src={g26} alt="" /></div>
          <div><img className='sm:w-[25px] xl:w-[100%]' src={g27} alt="" /></div>
        </div>
      </div>

      <div className='flex flex-row gap-8 '>
        <div className='flex flex-col gap-2 sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] text-[#fff]'>
          <span>Select your Course</span>
          <span>Apply for Admission</span>
          <span>Become a Partner</span>
          <span>Join our team</span>
        </div>
        <div className='flex flex-col gap-2 sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] text-[#fff]'>
          <span>Apply for Institutions</span>
          <span>About Us</span>
          <span>Privacy Policy</span>
          <span>Student Reviews</span>
        </div>
      </div>
    </div>
  </div>
    </div>



    </div>
  );
}

export default LandingPage;
