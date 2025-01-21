
const About = () => {
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                   <div>
                    <p className="grid-headtext">
                        Hi, I'm Tafadzwa
                    </p>
                    <p className="grid-subtext"> I'm a passionate front-end developer with a solid foundation in HTML, CSS, Tailwind, JavaScript, 
                        and React. I specialize in creating modern, responsive, and user-friendly interfaces that elevate user experiences.

                   In addition to traditional web development, I have experience in 3D web development, leveraging tools like Three.js and React Three Fiber to
                  build immersive, interactive experiences. I enjoy pushing creative boundaries by combining 3D visuals with intuitive design to create engaging
                   digital products.</p>

                   </div>
                </div>

            </div>

        </div>
      
    </section>
  );
};

export default About;
