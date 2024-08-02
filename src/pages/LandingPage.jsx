import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../components/Footer';

// Import all the required images
import logo from '../assets/logo.png';
import dateIcon from '../assets/date.png';
import locationIcon from '../assets/location.png';
import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';
import key1 from '../assets/key1.png';
import key2 from '../assets/key2.png';
import key3 from '../assets/key3.png';
import key4 from '../assets/key4.png';
import slide1 from '../assets/slide1.jpeg.jpg';
import slide2 from '../assets/slide2.jpeg.jpg';
import slide3 from '../assets/slide3.jpeg.jpg';
import mapImage from '../assets/map.png';

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#CDE2D3] overflow-x-hidden">
      <header className="bg-[#CDE2D3] py-4 px-5">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          <h1 className="text-2xl text-[#1c4330] font-bold">SIPMT</h1>
          <button className="text-[#1c4330] text-2xl">☰</button>
        </div>
      </header>

      <section className="flex flex-col items-center w-full max-w-[1280px] mx-auto py-10 px-5">
        <img src={logo} alt="SIPMT Logo" className="w-64 h-64 mb-10" />
        <div className="w-full md:w-3/4 lg:w-1/2">
          <h3 className="text-sm font-normal mb-2">JOIN US FOR A SEMINAR ON</h3>
          <h2 className="text-3xl mb-6 text-[#043C2C] font-bold">SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK</h2>
          <div className="flex items-center mb-2">
            <img src={dateIcon} alt="Calendar" className="w-5 h-5 mr-2" />
            <p className="text-sm">9:30 am, 17 August 2024</p>
          </div>
          <div className="flex items-start mb-6">
            <img src={locationIcon} alt="Location" className="w-5 h-5 mr-2 mt-1" />
            <p className="text-sm">Alphonsian Pastoral Institute,<br />Arunapuram, Pala</p>
          </div>
          <a href="#" className="text-base text-black no-underline font-bold hover:underline uppercase">Register Now ⤴</a>
        </div>
      </section>

      <section className="bg-white py-10 px-5">
        <div className="flex flex-col items-start max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5">ORGANIZED BY</h2>
          <div className="flex justify-center md:justify-between w-full">
            <img src={org1} alt="Organization 1" className="h-16 w-auto mx-8" />
            <img src={org2} alt="Organization 2" className="h-16 w-auto mx-8" />
            <img src={org3} alt="Organization 3" className="h-16 w-auto mx-8" />
          </div>
        </div>
      </section>

      <section className="bg-[#CDE2D3] py-10 px-5 text-bold-[#000000]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5">WHAT IS SIPMT?</h2>
          <div className="w-full max-w-[1086px] mx-auto overflow-hidden rounded-lg mb-8">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              dynamicHeight={true}
              emulateTouch={true}
            >
              <div>
                <img src={slide1} alt="Slide 1" className="w-full h-auto" />
              </div>
              <div>
                <img src={slide2} alt="Slide 2" className="w-full h-auto" />
              </div>
              <div>
                <img src={slide3} alt="Slide 3" className="w-full h-auto" />
              </div>
            </Carousel>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <p className="flex-1 text-justify">
              Meenachil Taluk, Known For Its Natural Beauty And Rich Agricultural Heritage,
              Has Significant Untapped Industrial Potential.
            </p>
            <p className="flex-1 text-justify">
              Our Seminar Aims To Unlock This Potential And Stimulate Growth In Sectors
              Such As Education, Transportation, Construction, And Healthcare, While
              Fostering Local Talent And Employment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#CDE2D3] py-10 px-5 text-[#1c4330]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5">KEY OBJECTIVES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src={key1} alt="Enhance Industrial Footprint" className="w-24 h-24 mb-4" />
              <p className="text-center">Enhance Industrial Footprint</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={key2} alt="Generate Employment" className="w-24 h-24 mb-4" />
              <p className="text-center">Generate Employment</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={key3} alt="Leverage Connectivity" className="w-24 h-24 mb-4" />
              <p className="text-center">Leverage Connectivity</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={key4} alt="Diverse Industrial Base" className="w-24 h-24 mb-4" />
              <p className="text-center">Diverse Industrial Base</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-5 text-[#1c4330]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5">PRESENTING OUR PANEL OF DISTINGUISHED SPEAKERS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
              <img src="src/assets/anoop.png" alt="Er. Anoop Ambika" className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl mb-2">Er. Anoop Ambika</h3>
              <p className="text-gray-600">CEO of Kerala Startup Mission</p>
            </div>
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
              <img src="src/assets/anoop.png" alt="Er. Anoop Ambika" className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl mb-2">Er. Anoop Ambika</h3>
              <p className="text-gray-600">CEO of Kerala Startup Mission</p>
            </div>
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
              <img src="src/assets/anoop.png" alt="Er. Anoop Ambika" className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl mb-2">Er. Anoop Ambika</h3>
              <p className="text-gray-600">CEO of Kerala Startup Mission</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#CDE2D3] py-10 px-5 text-[#1c4330]">
  <div className="max-w-[1280px] mx-auto text-left">
    <h2 className="text-2xl font-bold text-[#043C2C] mb-5">JOIN US AS A SPONSOR</h2>
    <p className="mb-5">
      We warmly invite you to join this noble cause not only through your participation in the seminar but also by providing your wholehearted support through sponsorship.
    </p>
    <p className="mb-5">
      Your sponsorship will not only showcase your commitment to our cause, but also provide your brand with excellent visibility and engagement opportunities.
    </p>
    <a href="#" className="text-[#15825C] font-bold hover:underline">KNOW MORE ⤴</a>
  </div>
</section>


      <section className="bg-white py-10 px-5 text-[#1c4330]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5 text-left">GETTING THERE</h2>
          <img src={mapImage} alt="Map" className="w-full max-w-2xl mx-auto mb-5" />
          <p className="mb-2"><strong>Location:</strong> Alphonsian Pastoral Institute, Arunapuram, Pala</p>
          <p className="mb-2"><strong>Time:</strong> 9:30 AM</p>
          <p className="mb-2"><strong>Date:</strong> August 17, 2024</p>
          <p className="mb-2"><strong>Contact Us:</strong> sipmt.pala@gmail.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
