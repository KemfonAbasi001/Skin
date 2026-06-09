import bgImage from '../assets/LandingPage_Image.png'

function Hero() {
  return (
    <section
      className="w-full py-50 flex justify-center items-center bg-cover bg-right bg-no-repeat"
      // style={{ backgroundImage: `url(${bgImage})` }}
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})` }} 
    >
      <div className="w-[90%] flex justify-end">
        <div className="w-full text-center font-[serif] text-[white]">
          <h1 className="text-[2.4rem] leading-[65px] tracking-[1px] font-medium">Glow with Aloe Naturally. Radiate Confidence.</h1>
          <p className="leading-7.5 tracking-[1px] text-[1.15rem] self-end mt-3 mb-8">Experience the purity of nature blended with science-backed skincare made to nurture, not overwhelm.</p>
          <button className="w-full py-3 bg-[white] text-[black] text-[1rem] rounded-full font-[500]" type="button">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero


