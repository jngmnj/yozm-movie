import Fade from "@components/modal/Fade";
import { RiCloseLargeLine } from "react-icons/ri";

const Modal = ({ className, modalTitle, isOpen, children, handleClick}) => {
  return (
    <div>
      <Fade isOpen={isOpen} handleClick={handleClick} />
      <div
        className={`fixed w-2/3 max-w-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-6 ${className} rounded-2xl`}
      >
        <button
          onClick={handleClick}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <RiCloseLargeLine />
        </button>
        <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2>
        {/* Modal content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal