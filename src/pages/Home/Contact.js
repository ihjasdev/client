import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Ihjas Abdullah",
    age: "26",
    gender: "Male",
    email: "ihjasdev@gmail.com",
    mobile: "+94766313173",
    country: "Sri Lanka",
    city: "Colombo",
  };
  return (
    <div>
      <SectionTitle title={"Say Hello!"} />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5">
              <span className="text-white">{key} : </span>
              <span className="text-white">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[500px] w-[650px]">
          <lottie-player
            src="https://lottie.host/f0e09c7d-e30c-4f1f-8793-b2d515b1c14d/Il2S0xNfye.json"
            background="##FFFFFF"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
