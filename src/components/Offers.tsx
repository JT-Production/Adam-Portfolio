import bitcoin from "../assets/img/bitcion.png"
import success from "../assets/img/success.jpg"
import market from "../assets/img/marketing-removebg-preview.png"
import DownloadPdfButton from "./DownloadPdf copy";

const Offers = () => {
  return (
    <div className="lg:px-35 pb-10   md:py-0 lg:py-0 lg:mt-0 md:mt-0 relative z-0 inset-0 px-1 " id="offer">
        {/* <h1 className="font-bold text-3xl mb-5">What I Offer  <span className="text-xl font-normal">- Click for more information</span></h1> */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3">
            <div data-aos="fade-up"
          data-aos-duration="1000" className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 transition-all duration-1000 ease-in-out cursor-pointer p-6 rounded-2xl shadow-md">
            <img src={bitcoin} alt="" className="h-40 cssanimation hu__hu__  lg:mx-auto "  style={{ WebkitFilter: 'drop-shadow(5px 5px 5px  #ff8c0062)', filter: 'drop-shadow(5px 5px 10px #ff8c0062)' }}/>
                <h2 className="text-2xl mb-3 heading ">Bitcoin Blueprint</h2>
                <p className="text-white/50">One-on-one classes to master Bitcoin from the ground up—perfect for beginners or those ready to level up.</p>
                <div className="lg:w-auto md:w-50 w-49 flex justify-center items-center">
                    <DownloadPdfButton fileUrl="pdf\BitcoinBlueprint.pdf" />
                </div>
            </div>
            <div data-aos="fade-up"
          data-aos-duration="2000" className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md">
<img src={success} alt=""  className="h-40 cssanimation hu__hu__  lg:mx-auto" style={{ WebkitFilter: 'drop-shadow(5px 5px 5px  #ff8c0062)', filter: 'drop-shadow(5px 5px 10px #ff8c0062)' }} />
                <h2 className="text-2xl mb-3 heading ">Web3 Success</h2>
                <p className="text-white/50">Learn how to combine Bitcoin knowledge with digital marketing to thrive in the Web3 economy.</p>
                <div className="lg:w-auto md:w-50 w-49 flex justify-center items-center">
                    <DownloadPdfButton fileUrl="pdf\BitcoinBlueprint.pdf" />
                </div>
            </div>
            <div data-aos="fade-up"
          data-aos-duration="3000" className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md">
             <img src={market} alt=""  className="h-40 cssanimation hu__hu__  lg:mx-auto " style={{ WebkitFilter: 'drop-shadow(5px 5px 5px  #ff8c0062)', filter: 'drop-shadow(5px 5px 10px #ff8c0062)' }}/>
                <h2 className="text-2xl mb-3 heading ">Marketing Services</h2>
                <p className="text-white/50">I’ll promote your project or brand directly on my social media platforms—reach the right audience with credibility.</p>
                <div className="lg:w-auto md:w-50 w-49 flex justify-center items-center">
                <DownloadPdfButton fileUrl="pdf\BitcoinBlueprint.pdf" />                </div>
            </div>

        </div>
    </div>
  )
}

export default Offers