import logo from "../../../assets/apple_colorful.svg";

const Logo: React.FC = () => (
  <a href="/" aria-label="Apple homepage">
    <img
      src={logo}
      alt="Apple logo"
      className="h-6 w-auto"
      loading="eager"
      fetchPriority="high"
    />
  </a>
);

export default Logo;
