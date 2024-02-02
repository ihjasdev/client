import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Projects"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#a4f6cb6e] w-1/3 sm:flex-row sm:w-full sm:overflow-x-scroll">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10">
            <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72"/>
            
            <div className="flex flex-col w-2/3 sm:w-full">
          <h1 className="text-secondary text-xl font-bold sm:text-xl">
            {projects[selectedItemIndex].description}
          </h1>
          <h1 className="text-tertiary text-xl py-5 sm:text-sm">
            {projects[selectedItemIndex].technologies.join(', ')}
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
