// import rocket from '../assets/img/hero-1-1.jpg'

const BannerSection = () => {
  return (
  <>
      <div className="h-8/12 flex justify-center items-center">
    <div className="   text-white ">
        <h1 className="font-extrabold lg:text-5xl text-4xl  lg:leading-16 heading mb-10 cssanimation leBlurIn sequence">ADAM BITCOIN</h1>
        <p className="text-center lg:text-md flex justify-between ">
          <span data-aos="fade-up"  data-aos-duration="1000">A Crypto Enthusiast </span>
          <span data-aos="fade-up"  data-aos-duration="2000">Content Creator</span>
          <span data-aos="fade-up"  data-aos-duration="3000">Community Builder</span>
          </p>

        {/* <div className='me-auto'>
        <img src={rocket} alt=""  className="h-32 "/>
        </div> */}
    </div>
    </div>
   

  </>
  )
}

export default BannerSection