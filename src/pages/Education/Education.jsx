import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <>
      <div className="sm:w-[62rem] mb-16" id="Education">
        <div className="mt-12">
          <h1 className="text-3xl font-bold flex justify-center">
            EDUCATION DETAILS
          </h1>
          <hr className="bg-black h-0.5 my-2 sm:mx-64 mx-24" />
        </div>
        <div className="bg-gray-200 p-4 mt-8 rounded-md">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "16px solid  white",
              }}
              date="2020 - completed"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Polytechnic (3-Years Diploma in Computer Science And Engineering
                From Goverment Polytechnic Purnea).
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "16px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              icon={<IoSchool />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                B.Tech in Computer Science And Engineering (pursuing, in 3rd
                Semester ) From PCE(Govt: Purnea College Of Engineering) Purnea
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
