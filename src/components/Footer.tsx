import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="h-52 flex justify-center items-center gap-3 pt-5 bg-(--color-bg-dark) text-white">
      <a href="https://github.com/mmarston-dev" target="_blank" rel="noreferrer">
        <GitHubIcon className="!text-3xl" />
      </a>
      <a href="https://www.linkedin.com/in/matt-j-marston/" target="_blank" rel="noreferrer">
        <LinkedInIcon className="!text-3xl" />{" "}
      </a>
    </footer>
  );
}

export default Footer;
