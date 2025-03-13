import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faMicrosoft, faAws } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import TechStack from "./TechStack";

function Expertise() {
  const labelsFirst = ["JavaScript", "HTML5", "CSS3", "Vue.js", "React.js", "Knockout.js", "jQuery.js", "TailwindCSS", "Bootstrap", "SASS"];
  const labelsSecond = ["C#", "ASP.NET MVC", ".NET Core", "SQL Server", "PHP", "PostgreSQL", "REST"];
  const labelsThird = ["AWS Lambda", "AWS API Gateway", "AWS CloudFormation", "AWS CloudWatch", "AWS IAM", "AWS S3", "AWS Route 53", "git"];

  return (
    <div id="about" className="flex flex-start items-center w-full px-[10%] py-48 bg-(--color-bg-dark) text-white shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-10">Expertise</h1>
        <div className="skills-grid grid grid-cols-3 gap-12">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3 className="my-5 text-xl font-bold">User Interfaces</h3>
            <p>
              I love making the user experience as beautiful and intuative as possible. Over the past 10 years I have developed several web applications, from small MVPs for a
              startup company, to an entire interface for a Headless Content Management System.
            </p>
            <TechStack labels={labelsFirst} />
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMicrosoft} size="3x" />
            <h3 className="my-5 text-xl font-bold">Web Applications & Data</h3>
            <p>
              A critical aspect of software is what goes on under the hood. Back end developement is like the engine. Here, business data and logic propel an application in to
              something users keep comming back to again and again.
            </p>
            <TechStack labels={labelsSecond} />
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3 className="my-5 text-xl font-bold">Deployment & Utilities</h3>
            <p>
              Developing software is one thing, getting it out to the world is an entirely different beast. There are many tools, like Amazon Web Services, that help distribute a
              product to the users who enjoy them. I utilized many of these tools when creating the presentation layer for a headless CMS project.
            </p>
            <TechStack labels={labelsThird} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
