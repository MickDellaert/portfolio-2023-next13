import Image from "next/image";
import portret from "../../public/portret/portret-gray-23.jpg";

const About = () => {
  return (
    <>
      {/* <div id="about" className="about-anchor"></div> */}
      <div id="about" className="relative top-36"></div>

      <section className="about-container mx-6 mt-44 mb-12 rounded-2xl bg-neutral-100 py-20 ">
        {/* <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-6 md:mx-16 2xl:mx-40 pt-6 md:pt-16 2xl:pt-32">
          <h1 className="header-title leading-normal text-4xl text-emerald-600">
            About
          </h1>
        </div> */}

        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 px-6 md:grid-cols-8 md:px-12">
          <div className="about-text md:col-span-8 xl:col-span-5 xl:row-span-2 2xl:col-span-5">
            <h1 className="header-title mb-4 text-4xl font-bold leading-normal text-primary">
              About Me
            </h1>
            <p className="text-xl leading-snug">
              Hi, I&apos;m Mick, an experienced graphic designer, knowledgeable
              dtp-operator, and aspiring web developer from Antwerp. Nice to
              meet you, welcome to my portfolio.
              <br></br>
              <br></br>
              On this website you can find some of the projects made recently
              with new skills I gained during a seven-month full-time Junior Web
              Developer training at BeCode Antwerp, a graduation project at Hack
              Your Future Antwerp and my first internship at Webit. They
              represent the first steps I have been taking in my ambition of
              becoming a full stack developer with an emphasis on front-end.
              More projects can be found on my{" "}
              <a
                href="https://github.com/MickDellaert"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Github
              </a>{" "}
              profile.
              <br></br>
              <br></br>
              Up until now I have been working in the graphic design industry,
              mainly for printed output. During my{" "}
              <a
                href="https://www.linkedin.com/in/mick-dellaert"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                career
              </a>{" "}
              I have worked on a broad range of projects: making layouts for
              books, magazines, advertisements, and newspapers; designing
              packaging, POS materials, logos, exhibition stands, interactive
              magazines, websites, and illustrations.
              <br></br>
              <br></br>
              Currently, I would love to add a more dynamic and interactive
              dimension to my skills and enter the world of web development with
              its endless possibilities and exciting prospects. At the moment I
              am actively looking for a job or an internship, hoping to
              contribute and complete my new knowledge in a fresh position and
              continue my journey. If I sparked your interest, don&apos;t
              hesitate to{" "}
              <a href="mailto: mickdellaert@yahoo.com" className="font-bold">
                contact
              </a>{" "}
              me.
            </p>
          </div>
          <div className="portrait mt-6 md:col-span-3 md:mt-6 xl:col-span-2 xl:col-start-7 xl:mt-0 2xl:col-span-2 2xl:col-start-7">
            <Image
              src={portret}
              alt={"mick"}
              width={800}
              height={800}
              className={"image rounded-2xl"}
              placeholder="blur"
            />
          </div>
          <div className="contact my-6 self-end text-xl font-bold text-primary md:col-span-4 md:mb-0 xl:col-span-2 xl:col-start-7 2xl:col-span-2 2xl:col-start-7">
            <h1 className="mb-4 text-4xl leading-normal text-primary">
              Contact
            </h1>
            <a
              className="contact-link text-neutral-950 font-semibold leading-relaxed hover:text-primary"
              href="https://www.linkedin.com/in/mick-dellaert"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-link text-neutral-950 block font-semibold leading-relaxed hover:text-primary"
              href="https://github.com/MickDellaert"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="contact-link text-neutral-950 block font-semibold leading-relaxed hover:text-primary"
              href="tel:number: 0488244705"
            >
              0488 244 705
            </a>



            <a
              className="contact-link text-neutral-950 font-semibold leading-relaxed hover:text-primary"
              href="mailto: mickdellaert@yahoo.com"
            >
              mickdellaert@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
