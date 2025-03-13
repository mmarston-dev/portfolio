import bgDark from "../assets/bg-dark.jpeg";
import headshot from "../assets/headshot-square.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Hero() {
  return (
    <div className="flex flex-start items-center w-full min-h-[80vh] px-[15%] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bgDark})` }}>
      <div className="min-w-[150px]">
        <img src={headshot} className="w-[150px] rounded-full" />
      </div>
      <div className="ml-6">
        <div className="flex gap-3 mb-5">
          <a href="https://github.com/mmarston-dev" target="_blank" rel="noreferrer">
            <GitHubIcon className="!text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/matt-j-marston/" target="_blank" rel="noreferrer">
            <LinkedInIcon className="!text-4xl" />{" "}
          </a>
        </div>
        <h1 className="text-8xl font-bold mb-5">Matt Marston</h1>
        <p className="text-3xl ml-1">Full Stack Engineer</p>
      </div>
    </div>
  );
}

export default Hero;
