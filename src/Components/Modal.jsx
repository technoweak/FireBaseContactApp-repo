import {AiOutlineClose} from "react-icons/ai";
import {createPortal} from "react-dom";

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && 
    <div  className="backdrop-blur h-screen w-screen absolute top-0 z-80 grid place-items-center">
    <div className="min-h-[200px] min-w-[80%] bg-white p-4 z-50 relative m-auto">
      <div className="flex justify-end">
        <AiOutlineClose onClick={onClose} className="text-2xl self-end cursor-pointer"/>
      </div>
      {children}
      </div>
      <div onClick={onClose} className="backdrop-blur h-screen w-screen absolute top-0 z-80 "/>

    </div>
    }
    </>
  ,document.getElementById("modal-root")
)
}

export default Modal