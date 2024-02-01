import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Tailwind",
        "firebase",
        "Nextjs",
        "Redux",
        "Git",
        "VScode",

      ]
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2">
          <lottie-player
            src="https://lottie.host/efe66093-67e3-4ec5-9fcb-c54af299171e/oxTaLyUijo.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            I am a driven and enthusiastic Associate Software Engineer, eager to
            apply theoretical knowledge and gain practical experience in the
            software development field. With a strong foundation in programming
            languages and a passion for problem-solving, I am dedicated to
            delivering efficient and reliable solutions. My commitment to
            continuous learning and staying abreast of industry trends equips me
            with the adaptability needed to navigate complex projects and
            contribute effectively to a dynamic team environment.
          </p>
          <p className="text-white">
            As I embark on my journey in software development, I am excited
            about the opportunity to tackle challenging problems and collaborate
            with like-minded professionals. I thrive on pushing the boundaries
            of my capabilities, always seeking ways to enhance my skills and
            contribute meaningfully to innovative projects. Through my proactive
            approach and a keen eye for detail, I aim to make valuable
            contributions to the success of software development initiatives,
            ensuring the delivery of high-quality solutions that meet and exceed
            client expectations
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border-2 border-tertiary px-10 py-3 rounded">
                <h1 className="text-tertiary">{skill}</h1>
            </div>
              
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
