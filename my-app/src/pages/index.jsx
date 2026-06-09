import bgImage from '../assets/LandingPage_Image.png'
import img from '../assets/productImage.png'
import imgtwo from '../assets/Product_Background.png'
import imgthree from '../assets/Skinglow_Image.png'
import imgfour from '../assets/ProductBottled_Image.png'

function Card(props) {
  return (
    <div className="flex flex-col gap-2">
      <img src={img} alt="" className="block rounded-lg w-full" />
      <div className="flex items-center flex-col">
        <p className="text-[11px] sm:text-[12px] md:text-[13px] font-sans">Lovry Aloe Serum</p>
        <h1 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold font-[sans-serif]">$35.00</h1>
        <button className="font-[sans-serif] mt-[3px] text-[11px] sm:text-[12px] md:text-[13px] w-[90%] py-2 text-white bg-[#547c24] rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <>
      {/* Hero / Landing Section */}
      <section
        className="w-full py-32 sm:py-48 md:py-60 lg:py-70 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImage})` }}
      >
        <div className="w-[90%]">
          <div className="w-full font-[serif] text-white text-center md:text-right md:flex md:flex-col md:items-end">
            <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.5rem] leading-tight tracking-[2px] font-medium">
              Glow with Aloe Naturally.<br className="hidden sm:block" /> Radiate Confidence.
            </h1>
            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] leading-7 tracking-[1px] mt-4 mb-7 max-w-full md:max-w-150">
              Experience the purity of nature blended with science-backed skincare made to nurture, not overwhelm.
            </p>
            <button
              className="bg-white text-black text-[0.9rem] sm:text-[1rem] py-2.5 font-medium px-12 sm:px-16 md:px-23 rounded-full"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="w-full py-12 sm:py-14 md:py-15 flex justify-center">
        <div className="w-[90%] flex flex-col gap-4 bg-white">
          <h1 className="text-[22px] sm:text-[25px] md:text-[29px] font-[serif]">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      {/* Nature's Heroes Section */}
      <section
        className="w-full py-20 sm:py-24 md:py-30 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgtwo})` }}
      >
        <div className="w-[90%] flex flex-col justify-center items-center gap-1 text-white text-center">
          <h1 className="font-[serif] text-[26px] sm:text-[32px] md:text-[39px]">Nature's Heroes, Bottled</h1>
          <p className="text-[15px] sm:text-[18px] md:text-[23px] leading-[1.5] font-[serif] max-w-xl md:max-w-none">
            Discover our latest skincare must-haves—thoughtfully crafted<br className="hidden md:block" /> with skin-loving botanicals and luxurious textures.
          </p>
          <button
            type="button"
            className="py-2.5 rounded-full bg-white text-black font-medium text-[13px] sm:text-[14px] px-14 sm:px-20 w-fit mt-5"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Organic Section 1 — stacked on mobile, text left + image right on desktop */}
      <section className="py-10 sm:py-12 md:py-13 w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
        <div className="w-[90%] md:w-[48%] flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="font-[serif] text-[1.7rem] sm:text-[2rem] md:text-[2.3rem]">
            Organic products, friendly for your skin
          </h1>
          <p className="font-[serif] text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]">
            From calming aloe vera to antioxidant-rich pomegranate, our ingredients are ethically sourced and clinically balanced for maximum impact.
          </p>
          <button
            type="button"
            className="py-2.5 px-16 sm:px-20 md:px-25 mt-2 text-[14px] sm:text-[15px] rounded-full w-fit self-center bg-[#547c24] text-white font-medium"
          >
            Shop Now
          </button>
        </div>
        <img src={imgthree} alt="" className="w-full md:w-[48%] block" />
      </section>

      {/* Organic Section 2 — stacked on mobile, image left + text right on desktop */}
      <section className="py-10 sm:py-12 md:py-13 w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
        <img src={imgfour} alt="" className="w-full md:w-[48%] block" />
        <div className="w-[90%] md:w-[48%] flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="font-[serif] text-[1.7rem] sm:text-[2rem] md:text-[2.3rem]">
            Organic products, friendly for your skin
          </h1>
          <p className="font-[serif] text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]">
            From calming aloe vera to antioxidant-rich pomegranate, our ingredients are ethically sourced and clinically balanced for maximum impact.
          </p>
          <button
            type="button"
            className="py-2.5 px-16 sm:px-20 md:px-25 mt-2 text-[14px] sm:text-[15px] rounded-full w-fit self-center bg-[#547c24] text-white font-medium"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="flex justify-center py-16 bg-[#E4EBD2]">
        <div className="w-[90%] flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-[1rem] font-bold text-black">About Us</h2>
              <a href="" className="text-[14px] sm:text-[15px]">Mission Statement</a>
              <a href="" className="text-[14px] sm:text-[15px]">Blog</a>
              <a href="" className="text-[14px] sm:text-[15px]">Careers</a>
              <a href="" className="text-[14px] sm:text-[15px]">Press Centre</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[1rem] font-bold text-black">Support</h2>
              <a href="" className="text-[14px] sm:text-[15px]">Product Guide</a>
              <a href="" className="text-[14px] sm:text-[15px]">Live Chat/Help Desk</a>
              <a href="" className="text-[14px] sm:text-[15px]">Product Update</a>
              <a href="" className="text-[14px] sm:text-[15px]">Community Forum</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[1rem] font-bold text-black">FAQ</h2>
              <a href="" className="text-[14px] sm:text-[15px]">How to know my skin type</a>
              <a href="" className="text-[14px] sm:text-[15px]">Shipping and Delivery</a>
              <a href="" className="text-[14px] sm:text-[15px]">Return Policy</a>
              <a href="" className="text-[14px] sm:text-[15px]">Account Management</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[1rem] font-bold text-black">Product</h2>
              <a href="" className="text-[14px] sm:text-[15px]">Features</a>
              <a href="" className="text-[14px] sm:text-[15px]">Size Guide</a>
              <a href="" className="text-[14px] sm:text-[15px]">Sustainability</a>
              <a href="" className="text-[14px] sm:text-[15px]">Return Policy</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
            <div className="flex flex-col gap-3">
              <h2 className="text-[0.85rem] sm:text-[0.9rem] text-black font-semibold">Sign Up for Email Deals & Cashback</h2>
              <div className="flex overflow-hidden rounded-lg bg-amber-50">
                <input
                  type="text"
                  className="px-4 outline-0 text-[13px] sm:text-[14px]"
                  placeholder="Enter email address"
                />
                <button type="button" className="py-2.5 px-5 sm:px-6 text-[13px] sm:text-[14px] text-white bg-[#547c24]">
                  Submit
                </button>
              </div>
            </div>
            <div className="flex gap-4 text-[1.3rem] sm:text-[1.5rem]">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero