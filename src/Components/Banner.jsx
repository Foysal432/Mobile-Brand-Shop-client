
const Banner = () => {
    const color={
      
       
        backgroundImage:'url("https://i.ibb.co/5MkSjkg/lovepik-5g-technology-mobile-phone-blue-glare-banner-background-image-605672458.jpg")',
        
        height:'85vh',

    }
   
    return (
        <div  className="hero mt-5" style={color}>
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div   className="max-w-md">
            <h1 data-aos="fade-right" data-aos-easing="linear"data-aos-duration="600" className="mb-5 text-5xl font-bold text-gray-300"><span className="">You Can Get Here All Brand New Technology and Electronics Product</span></h1>
            <p data-aos="flip-left" data-aos-easing="ease"data-aos-duration="500" className="mb-5 text-gray-300">We Are Provide You All Category of Technology and Electronics Product And We Also Provide You 100% Genuine And Authentic Product </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;