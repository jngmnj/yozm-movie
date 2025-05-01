const Fade = ({ isOpen, handleClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-20 z-0 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleClick}
      role="presentation" // 의미 없음 명시
    ></div>
  );
};

export default Fade;
