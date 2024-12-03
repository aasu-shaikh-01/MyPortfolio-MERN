import React from "react";

const About = () => {
  return (
    <div
      className="text-black flex justify-center flex-col sm:flex-row items-center bg-white gap-4 sm:w-[62rem] rounded-xl sm:ml-56 sm:mt-4 mt-2
     shadow-2xl"
      id="About"
    >
      <div className="w-4/3 p-4">
        <img
          src="profile.jpg"
          className="h-[20rem] w-[50rem] rounded-lg shadow-2xl"
          alt=""
        />
      </div>
      <div className="p-4 sm:w-[110rem]">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempore totam necessitatibus debitis nam fuga neque nulla, ratione
          labore accusamus molestiae! Voluptatum nesciunt provident repudiandae
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempore totam necessitatibus debitis nam fuga neque nulla, ratione
          labore accusamus molestiae! Voluptatum nesciunt provident repudiandae
          voluptates earum, mollitia sit quasi!
        </p>
      </div>
    </div>
  );
};

export default About;
