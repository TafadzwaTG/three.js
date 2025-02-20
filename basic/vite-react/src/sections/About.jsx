import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gumbitafadzwa@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {/* Intro */}
        <div className="col-span-1 xl:row-span-3 grid-container">
          <img src="/assets/grid1.png" alt="profile" className="w-full object-contain sm:h-[276px]" />
          <div>
            <p className="grid-headtext">Hey, I’m Tafadzwa</p>
            <p className="grid-subtext">
              I build sleek, functional interfaces with HTML, CSS, Tailwind, JavaScript, and React.  
              My work extends beyond flat design—I craft immersive, interactive 3D experiences  
              using Three.js and React Three Fiber, blending aesthetics with interactivity.  
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="col-span-1 xl:row-span-3 grid-container">
          <img src="/assets/logos.png" alt="skills" className="w-full object-contain sm:h-[276px]" />
          <div>
            <p className="grid-headtext">What I Work With</p>
            <p className="grid-subtext">HTML, CSS, Tailwind, JavaScript, Next.js, React, Three.js, GitHub.</p>
          </div>
        </div>

        {/* Remote Work & Globe */}
        <div className="col-span-1 xl:row-span-4 grid-container">
          <div className="rounded-3xl w-full sm:h[326px] flex justify-center items-center">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{ lat: -33.9249, lng: 18.4241, text: "Cape Town, South Africa", color: "white", size: 15 }]}
            />
          </div>
          <div>
            <p className="grid-headtext">I Work Anywhere</p>
            <p className="grid-subtext">Cape Town-based, but time zones don’t stop me.</p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
          </div>
        </div>

        {/* Passion */}
        <div className="xl:col-span-2 xl:row-span-3 grid-container">
          <img src="/assets/grid3.png" alt="passion" className="w-full object-contain sm:h-[266px]" />
          <div>
            <p className="grid-headtext">Beyond the Code</p>
            <p className="grid-subtext">
              I love building, learning, and teaching. I help young minds  
              break into tech, making coding less intimidating and more accessible.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2 grid-container">
          <img src="assets/grid4.png" alt="contact" className="w-full object-cover sm:h-[276px]" />
          <div className="space-y-2 text-center">
            <p className="grid-subtext">Let’s Connect</p>
            <div className="copy-container" onClick={handleCopy}>
              <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                gumbitafadzwa@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
