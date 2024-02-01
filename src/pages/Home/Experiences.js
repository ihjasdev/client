import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Experience"} />
      <div className="flex py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#a4f6cb6e]">
          {experiences.map((experience, index) => (
            <div
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px]  bg-[#b1e3c926] py-3"
                    : "text-white"
                }`}
              >
                {experience.date}
              </h1>
            </div>
          ))}
        </div>
        <div>
          {/* {experiences.map((experience) => (
                <div>
                    <h1 className='text-xl text-white'>{experience.tittle}</h1>
                    <h1 className='text-xl text-white'>{experience.Company}</h1>
                    <h1 className='text-xl text-white'>{experience.location}</h1>
                    <p className='text-xl text-white'>{experience.description}</p>
                </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
