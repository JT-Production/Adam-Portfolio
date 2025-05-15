import bitcoin from "../assets/img/bitcion.png"
import success from "../assets/img/success.jpg"
import market from "../assets/img/marketing-removebg-preview.png"

import Button from "./Button"
import DownloadPdfButton from "./DownloadPdf copy";

const Offers = () => {
  return (
    <div className="lg:px-35 pb-10   md:py-0 lg:py-0 lg:mt-0 md:mt-0 relative z-0 inset-0 px-1 ">
        <h1 className="font-bold text-3xl mb-5">What I Offer</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3">
            <div className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 transition-all duration-1000 ease-in-out cursor-pointer p-6 rounded-2xl shadow-md">
            <img src={bitcoin} alt="" className="h-40 cssanimation hu__hu__  lg:mx-auto " />
                <h2 className="text-2xl mb-3 heading ">Bitcoin Blueprint</h2>
                <p className="text-white/50">One-on-one classes to master Bitcoin from the ground up—perfect for beginners or those ready to level up.</p>
                <div className="w-50">
                    <DownloadPdfButton fileUrl="pdf\Web3__Growth.pdf" />
                </div>
            </div>
            <div className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md">
            <img src={success} alt=""  className="h-40 cssanimation hu__hu__  lg:mx-auto "/>
                <h2 className="text-2xl mb-3 heading ">Web3 Success</h2>
                <p className="text-white/50">Learn how to combine Bitcoin knowledge with digital marketing to thrive in the Web3 economy.</p>
                <div className="w-50">
                    <DownloadPdfButton fileUrl="pdf\Web3__Growth.pdf" />
                </div>
            </div>
            <div className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md">
             <img src={market} alt=""  className="h-40 cssanimation hu__hu__  lg:mx-auto "/>
                <h2 className="text-2xl mb-3 heading ">Marketing Services</h2>
                <p className="text-white/50">I’ll promote your project or brand directly on my social media platforms—reach the right audience with credibility.</p>
                <div className="w-50">
                    {/* <Button onClickk={handleDownload} link="" target="null" text="Free Bitcoin Guide"   classNam="relative inset-0 flex items-center gap-2 bg-transparent border border-orange-400 hover:bg-zinc-900 " icon={<MdOutlineFileDownload />} /> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Offers