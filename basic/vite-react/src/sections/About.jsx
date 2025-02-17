import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  // State to manage copy-to-clipboard functionality
  const [hasCopied, setHasCopied] = useState(false);

  // Function to handle copying email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText("gumbutafadzwa@gmail.com");
    setHasCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Left Grid Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Tafadzwa</p>
              <p className="grid-subtext">
                I'm a passionate front-end developer with a solid foundation in
                HTML, CSS, Tailwind, JavaScript, and React. I specialize in
                creating modern, responsive, and user-friendly interfaces that
                elevate user experiences.
                <br />
                <br />
                In addition to traditional web development, I have experience in
                3D web development, leveraging tools like Three.js and React
                Three Fiber to build immersive, interactive experiences. I enjoy
                pushing creative boundaries by combining 3D visuals with
                intuitive design to create engaging digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Right Grid Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/logos.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Skills</p>
              <p className="grid-subtext">
                HTML, CSS, Tailwind, JavaScript, Next.JS, React, Three.js and
                GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section - Remote Work Availability */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: -33.9249,
                    lng: 18.4241,
                    text: "Cape Town, South Africa",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                Based in Cape Town, South Africa, with remote work available
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I’m passionate about building interactive, user-friendly web
                applications and continuously enhancing my skills. Beyond
                coding, I enjoy exploring new technologies and empowering others
                by teaching young minds to code, unlocking their potential in
                the digital world
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  gumbutafadzwa@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
