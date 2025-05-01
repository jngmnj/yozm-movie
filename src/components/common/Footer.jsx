import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center gap-12 items-center p-4 bg-white text-gray-500">
      <p className="text-xl font-bold">
        요즘 <span className="text-green-400 text-1xl font-black">movie</span>
      </p>
      <Link to="https://github.com/jngmnj" className="text-sm">&copy; {currentYear} jngmnj</Link>
    </footer>
  );
};

export default Footer;
