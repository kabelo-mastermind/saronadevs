import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Online Presence with Expert
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Web Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Elevate your business and bring your web ideas to life with our expert web development services. The team with
        our intuitive tools, inovations and strategic SEO solutions ensure your website and web apps not only look great but perform flawlessly.
        Get started today and transform your vision into digital success!
      </p>
      <div className="flex justify-center my-10 flex-wrap">
        {/* <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 my-2 sm:my-0 rounded-md text-center w-full sm:w-auto"
        >
          Get a Free Consultation
        </a> */}
        <a
          href="https://forms.gle/8ye8t3sikFgDTSZi9"
          className="py-3 px-4 mx-3 my-2 sm:my-0 rounded-md border text-center w-full sm:w-auto"
        >
          {/* View Our Portfolio */}
          Get a Free Consultation
        </a>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 justify-center">
        <img
          src={image1}
          alt="Description of image 1"
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <img
          src={image2}
          alt="Description of image 2"
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
