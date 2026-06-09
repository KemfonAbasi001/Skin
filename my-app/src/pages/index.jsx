import bgImage from '../assets/LandingPage_Image.png'

function Hero() {
  return (
    <section
      className="w-full py-40 flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[90%] flex justify-end">
        <div className="w-full bg-amber-950 text-center font-[serif] text-[white]">
          <h1 className="text-[3rem] leading-16 tracking-[2px] font-medium">Glow with Aloe Naturally. Radiate Confidence.</h1>
          <p className="leading-7 tracking-[1px] max-w-153.75 text-[1.4rem] self-end bg-red">Experience the purity of nature blended with science-backed skincare made to nurture, not overwhelm.</p>
          <button className="button" type="button">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero


