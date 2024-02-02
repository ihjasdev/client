import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Experience"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#a4f6cb6e] w-1/3 sm:flex-row sm:w-full sm:overflow-x-scroll">
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
        <div className="flex flex-col w-2/3 sm:w-full">
          <h1 className="text-secondary text-3xl font-bold sm:text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <div className="flex items-center gap-4">
            <h1 className="text-tertiary text-xl py-5 font-semibold sm:text-sm">
              {experiences[selectedItemIndex].company}
            </h1>
            <h1 className="text-tertiary text-xl sm:text-sm">
              {experiences[selectedItemIndex].location}
            </h1>
          </div>
          <p className="text-white sm:text-sm">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
