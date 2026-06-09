import { useState } from 'react'
import bgImage from '../assets/LandingPage_Image.png'
import img from '../assets/productImage.png'
import imgtwo from '../assets/Product_Background.png'
import imgthree from '../assets/Skinglow_Image.png'
import imgfour from '../assets/ProductBottled_Image.png'

function Card(props) {
  return (
    <div className="flex flex-col gap-3">
      {/* Image wrapper — clips overflow, image keeps its natural size */}
      <span className="block w-full overflow-hidden rounded-lg">
        <img
          src={img}
          alt=""
          className="w-full block transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </span>
      <div className="flex items-center flex-col">
        <p className="text-[16px] sm:text-[12px] md:text-[13px] font-sans">Lovry Aloe Serum</p>
        <h1 className="text-[1.4rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold font-[sans-serif]">$35.00</h1>
        <button className="font-[sans-serif] mt-[3px] text-[14px] sm:text-[12px] md:text-[13px] w-[80%] md:w-[90%] lg:w-[90%] py-2.5 text-white bg-[#547c24] hover:bg-[#426118] transition-colors duration-200 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  )
}

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <p className="text-[.85rem] lg:text-[.9rem] text-center py-2.75 bg-[#547c24] text-white">
        Free Shipping on all orders above $250
      </p>

      <header className="w-full">
        <nav className="w-[90%] mx-auto my-0 bg-white flex justify-between items-center py-2" id="myNavbar">
          <a className="italic text-[#547c24] font-[600]" href="index.html">
            <h1 className="text-[1.5rem] font-semibold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem]">SkinLovry</h1>
          </a>

          <ul className="hidden lg:flex lg:items-center lg:gap-6 list-none" id="navLinks">
            <li><a href="#" className="text-[16px] hover:text-[#547c24] transition-colors">Best Sellers</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#547c24] transition-colors">Collections</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#547c24] transition-colors">Sale</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#547c24] transition-colors">Shop</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#547c24] transition-colors">Skin Type</a></li>
          </ul>

          <button
            className="lg:hidden text-[1.1rem] p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div className="hidden lg:flex gap-[6px]" id="iconsSection">
            <i className="fa-solid fa-magnifying-glass text-[1.1rem]" id="searchIcon"></i>
            <i className="fa-regular fa-heart heart-icon text-[1.1rem]"></i>
            <i className="fa-solid fa-cart-shopping text-[1.1rem]"></i>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer — no logo, close button only, nav links + icons at bottom */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-white z-50 lg:hidden flex flex-col pt-6 px-6 shadow-xl
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button row */}
        <div className="flex justify-end items-center mb-6">
          <button
            className="text-[1.2rem] p-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        {/* Nav links */}
        <ul className="list-none flex flex-col gap-5">
          <li><a href="#" className="text-[1.5rem] font-medium hover:text-[#547c24] transition-colors" onClick={() => setMenuOpen(false)}>Best Sellers</a></li>
          <li><a href="#" className="text-[1.5rem] font-medium hover:text-[#547c24] transition-colors" onClick={() => setMenuOpen(false)}>Collections</a></li>
          <li><a href="#" className="text-[1.5rem] font-medium hover:text-[#547c24] transition-colors" onClick={() => setMenuOpen(false)}>Sale</a></li>
          <li><a href="#" className="text-[1.5rem] font-medium hover:text-[#547c24] transition-colors" onClick={() => setMenuOpen(false)}>Shop</a></li>
          <li><a href="#" className="text-[1.5rem] font-medium hover:text-[#547c24] transition-colors" onClick={() => setMenuOpen(false)}>Skin Type</a></li>
        </ul>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100" />

        {/* Icons row — icon only, no labels */}
        <div className="flex items-center gap-4 justify-end">
          <button aria-label="Search" className="hover:text-[#547c24] transition-colors">
            <i className="fa-solid fa-magnifying-glass text-[1.5rem]"></i>
          </button>
          <button aria-label="Wishlist" className="hover:text-[#547c24] transition-colors">
            <i className="fa-regular fa-heart text-[1.5rem]"></i>
          </button>
          <button aria-label="Cart" className="hover:text-[#547c24] transition-colors">
            <i className="fa-solid fa-cart-shopping text-[1.5rem]"></i>
          </button>
        </div>
      </div>

      {/* Hero / Landing Section */}
      <section
        className="w-full py-45 sm:py-48 md:py-60 lg:py-70 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImage})` }}
      >
        <div className="w-[90%]">
          <div className="w-full font-[serif] text-white text-center md:text-right md:flex md:flex-col md:items-end">
            <h1 className="text-[2.3rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.5rem] leading-tight tracking-[2px] font-medium">
              Glow with Aloe Naturally.<br className="hidden sm:block" /> Radiate Confidence.
            </h1>
            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] leading-7 tracking-[1px] mt-4 mb-7 max-w-full md:max-w-150">
              Experience the purity of nature blended with science-backed skincare made to nurture, not overwhelm.
            </p>
            <button
              className="bg-white text-black text-[1rem] sm:text-[1rem] py-2.5 font-medium px-20 sm:px-16 md:px-23 rounded-full hover:bg-gray-100 transition-colors duration-200"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="w-full py-12 sm:py-14 md:py-15 flex justify-center">
        <div className="w-[90%] flex flex-col gap-6 bg-white">
          <h1 className="text-[28px] sm:text-[25px] md:text-[29px] font-[serif]">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      {/* Nature's Heroes Section */}
      <span className="block w-full overflow-hidden">
        <section
          className="w-full py-20 sm:py-24 md:py-30 flex justify-center items-center bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{ backgroundImage: `url(${imgtwo})` }}
        >
          <div className="w-[90%] flex flex-col justify-center items-center gap-1 text-white text-center">
            <h1 className="font-[serif] text-[26px] sm:text-[32px] md:text-[39px]">Nature's Heroes, Bottled</h1>
            <p className="text-[17px] sm:text-[18px] md:text-[23px] leading-[1.5] font-[serif] max-w-xl md:max-w-none">
              Discover our latest skincare must-haves — thoughtfully crafted<br className="hidden md:block" /> with skin-loving botanicals and luxurious textures.
            </p>
            <button
              type="button"
              className="py-2.5 rounded-full bg-white text-black font-medium text-[15px] sm:text-[14px] px-17 sm:px-20 w-fit mt-5 hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Now
            </button>
          </div>
        </section>
      </span>

      {/* Organic Section 1 */}
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
            className="py-2.5 px-25 sm:px-20 md:px-25 mt-2 text-[15px] rounded-full w-fit self-center bg-[#547c24] text-white font-medium hover:bg-[#426118] transition-colors duration-200"
          >
            Shop Now
          </button>
        </div>
        <span className="block w-full md:w-[48%] overflow-hidden">
          <img
            src={imgthree}
            alt=""
            className="w-full h-full object-cover block transition-transform duration-500 ease-in-out hover:scale-[1.03]"
          />
        </span>
      </section>

      {/* Organic Section 2 */}
      <section className="py-10 sm:py-12 md:py-13 w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
        <span className="block w-full md:w-[48%] overflow-hidden">
          <img
            src={imgfour}
            alt=""
            className="w-full h-full object-cover block transition-transform duration-500 ease-in-out hover:scale-[1.03]"
          />
        </span>
        <div className="w-[90%] md:w-[48%] flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="font-[serif] text-[1.7rem] sm:text-[2rem] md:text-[2.3rem]">
            Organic products, friendly for your skin
          </h1>
          <p className="font-[serif] text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]">
            From calming aloe vera to antioxidant-rich pomegranate, our ingredients are ethically sourced and clinically balanced for maximum impact.
          </p>
          <button
            type="button"
            className="py-2.5 px-25 sm:px-20 md:px-25 mt-2 text-[15px] rounded-full w-fit self-center bg-[#547c24] text-white font-medium hover:bg-[#426118] transition-colors duration-200"
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
              <h2 className="text-[1.1rem] font-bold text-black">About Us</h2>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Mission Statement</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Blog</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Careers</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Press Centre</a>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[1.1rem] font-bold text-black">Support</h2>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Product Guide</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Live Chat/Help Desk</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Product Update</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Community Forum</a>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[1.1rem] font-bold text-black">FAQ</h2>
              <a href="" className="text-[1.07rem] sm:text-[15px]">How to know my skin type</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Shipping and Delivery</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Return Policy</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Account Management</a>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[1.1rem] font-bold text-black">Product</h2>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Features</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Size Guide</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Sustainability</a>
              <a href="" className="text-[1.07rem] sm:text-[15px]">Return Policy</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-[1rem] sm:text-[0.9rem] text-black font-semibold">Sign Up for Email Deals & Cashback</h2>
              <div className="flex overflow-hidden rounded-lg bg-amber-50">
                <input
                  type="text"
                  className="px-4 outline-0 text-[16px] sm:text-[14px] bg-white text-black"
                  placeholder="Enter email address"
                />
                <button type="button" className="py-2.5 px-5 sm:px-6 text-[16px] sm:text-[14px] text-white bg-[#547c24] hover:bg-[#426118] transition-colors duration-200">
                  Submit
                </button>
              </div>
            </div>
            <div className="flex gap-4 justify-center self-center items-center">
              <i className="fa-brands fa-x-twitter text-[1.4rem]"></i>
              <i className="fa-brands fa-tiktok text-[1.4rem]"></i>
              <i className="fa-brands fa-square-facebook text-[1.4rem]"></i>
              <i className="fa-brands fa-instagram text-[1.4rem]"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero