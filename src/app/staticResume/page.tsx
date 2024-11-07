"use client";

import { useState } from "react";

import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import Image from "next/image";
import React from "react";
import { RiProjectorFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";

const StaticResume = (): JSX.Element => {
  const [displaySkills, setDisplaySkills] = useState<boolean>(true);

  const resumeSubHeading = ` text-lg md:text-xl lg:text-2xl w-full border rounded-3xl p-2 px-4 mt-3 mb-3 text-white`;
  const educationStyling = `text-base desktop:text-lg font-bold mt-5`;
  const primaryBtn = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-5 py-2 rounded-lg text-white`;

  const skillData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Typescript",
    "React",
    "NextJs",
  ];
  const experienceData = [
    {
      title: "E-commerce Website",
      technologies: "ReactJS , Tailwind CSS",
      features:
        "Product listings, dynamic product pages, shopping cart functionality, and responsive design for mobile and desktop users.",
    },
    {
      title: "Personal Portfolio Website",
      technologies: "Next JS, Tailwind CSS",
      features:
        "Project gallery, detailed about section and responsive design to ensure compatibility with different devices.",
    },
    {
      title: "Resume Generator",
      technologies: "Next JS, Tailwind CSS",
      features:
        "Dynamic form handling, customizable color themes, and downloadable PDF functionality.",
    },
    {
      title: "Travelling Website",
      technologies: "React, Tailwind CSS",
      features:
        "Dynamic tour bookings, interactive maps, personalized itineraries, and responsive design for seamless browsing.",
    },
  ];

  const education = [
    {
      title: "Certified Professional in Software Management(CPISM)",
      institute: "Aptech Learning Institute",
    },
    {
      title: "Diploma in Software Engineering",
      institute: "Aptech Learning Institute | Ongoing",
    },
    {
      title: "Generative AI Course",
      institute: "Governor House | Ongoing",
    },
    {
      title: "Intermediate",
      institute: "Govt Degree Girls College, Karachi",
    },
    {
      title: "Matriculation (Science Group)",
      institute: "Brilliant Career Grammar School, Karachi",
    },
  ];

  const contact = [
    {
      icon: <MdLocalPhone />,
      title: "+92 3193885232",
    },
    {
      icon: <SiGmail />,
      title: "khuloodmaqbool3@gmail.com",
    },
    {
      icon: <TiLocation />,
      title: "Nazimabad, Karachi",
    },
  ];

  return (
    <>
      <div
        id="content"
        className="resumediv my-8 flex justify-center rounded-lg border-2 mx-auto w-4/5 max-w-full md:max-w-4xl lg:max-w-5xl background_col bg-white"
      >
        <div className="left bg-black text-white p-7 rounded-l-lg">
          <div className="flex justify-center items-center rounded-full bg-slate-100 mb-12 border-2 border-slate-100 w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 mx-auto">
            <Image
              className=" mx-auto w-full h-full rounded-full object-cover"
              src="/herosection_img.png"
              alt="profile"
              width={500}
              height={300}
              priority
            />
          </div>
          <h2
            className={`${resumeSubHeading} bg-black border border-primary-color`}
          >
            About Me
          </h2>
          <p className="text-sm desktop:text-base my-6">
            I am a passionate front-end developer with expertise in creating
            user-friendly and visually appealing websites. I have strong skills
            in HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js, allowing
            me to develop dynamic and responsive web applications.
          </p>

          <h2
            className={`${resumeSubHeading} bg-black border border-primary-color`}
          >
            Contact
          </h2>

          <div className="flex flex-col items-start w-full">
            {contact.map((crnt, index) => {
              return (
                <>
                  <div key={index} className="flex items-center w-full">
                    <div className="bg-primary-color  w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                      {crnt.icon}
                    </div>
                    <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                      {crnt.title}
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-center w-full">
              <div className="bg-primary-color w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                <FaLinkedinIn />
              </div>
              <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/khulood-maqbool-b45aa3255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile Link
                </a>
              </p>
            </div>

            <div className="flex items-center w-full">
              <div className="bg-primary-color w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                <RiProjectorFill />
              </div>
              <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                <a
                  className="underline"
                  href="https://my-portfolio-nine-theta-94.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Portfolio
                </a>
              </p>
            </div>
          </div>

          <h2
            className={`${resumeSubHeading} bg-black mt-6 border border-primary-color`}
          >
            Languages
          </h2>
          <p className="text-sm desktop:text-base my-5">English , Urdu</p>

          <h2
            className={`${resumeSubHeading} bg-black mt-6 border border-primary-color`}
          >
            Skills
          </h2>

          {displaySkills && (
            <ul>
              {skillData.map((skills, ind) => (
                <li
                  className={`text-sm desktop:text-base font-bold mt-5 ms-3 list-disc`}
                  key={ind}
                >
                  {skills}
                </li>
              ))}
            </ul>
          )}

          <button
            className={`${primaryBtn} my-5`}
            onClick={() => setDisplaySkills(!displaySkills)}
          >
            {displaySkills ? "Hide" : "Show"}
          </button>
        </div>

        <div className="right p-5">
          <h2 className="bg-primary-color text-white text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 rounded-3xl">
            Khulood Maqbool
          </h2>
          <h2
            style={{ fontFamily: "Dancing Script" }}
            className="font-bold text-center mb-6 mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Front End Developer
          </h2>

          <h2 className={`${resumeSubHeading} bg-primary-color`}>Education</h2>
          <ul className="mb-6">
            {education.map((crnt, ind) => {
              return (
                <div key={ind}>
                  <li className={`${educationStyling} list-disc ms-4 mb-1`}>
                    {crnt.title}
                  </li>
                  <p className={` desktop:text-base`}>{crnt.institute}</p>
                </div>
              );
            })}
          </ul>

          <h2 className={`${resumeSubHeading} bg-primary-color`}>Projects</h2>
          <div>
            {experienceData.map((crnt, index) => (
              <div className="mt-5" key={index}>
                <h4 className="text-2xl font-bold">{crnt.title}</h4>
                <h5 className="my-2">
                  <span className="font-bold">Technologies Used: </span>
                  {crnt.technologies}
                </h5>
                <p className="my-2">
                  <span className="font-bold">Features: </span>
                  {crnt.features}
                </p>
                <hr className="my-2" />
              </div>
            ))}
          </div>

          <h2 className={`${resumeSubHeading} bg-primary-color`}>
            Certification
          </h2>

          <div className="flex gap-4 my-6">
            <FaAward className="w-16 h-16" />
            <div>
              <p className="font-bold ">
                Certificate of Appreciation in Web Designing
              </p>
              <p>
                Awarded by Aptech Institute in 2024 for demonstrating
                proficiency in web design skills and techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaticResume;
