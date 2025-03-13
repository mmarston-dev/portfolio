import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/History.css";

function History() {
  return (
    <div id="history" className="flex flex-center flex-col text-left w-full px-[10%] pt-48">
      <h1 className="text-4xl font-bold mb-10">Career History</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#0d1116" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2023 - 2025"
          iconStyle={{ background: "#1caf6a", color: "#0d1116" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-xl font-bold">Software Engineer III</h3>
          <h4 className="font-bold">EasyPost</h4>
          <p className="">Frontend Development, Backend Development, User Experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#0d1116" }}
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#1caf6a", color: "#0d1116" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-xl font-bold">Software Engineer II</h3>
          <h4 className="font-bold">Scentsy</h4>
          <p>Frontend Development, Backend Development, Database Development, User Experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#0d1116" }}
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: "#1caf6a", color: "#0d1116" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-xl font-bold">SoftwareEngineer I</h3>
          <h4 className="font-bold">ETT Aviation</h4>
          <p>Frontend Development, Backend Development, Database Development, User Experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#0d1116" }}
          className="vertical-timeline-element--work"
          date="2015 - 2015"
          iconStyle={{ background: "#1caf6a", color: "#0d1116" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-xl font-bold">Web Developer</h3>
          <h4 className="font-bold">BasedIn</h4>
          <p>Frontend Development, User Experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#0d1116" }}
          className="vertical-timeline-element--work"
          date="2014 - 2014"
          iconStyle={{ background: "#1caf6a", color: "#0d1116" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-xl font-bold">Game Developer Intern</h3>
          <h4 className="font-bold">SOM Games</h4>
          <p>Game Development, Animation</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default History;
