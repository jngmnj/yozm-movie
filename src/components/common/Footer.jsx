const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Movie App</p>
    </footer>
  );
};

export default Footer;
