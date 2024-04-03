const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center
         items-center transition-colors ${
           open ? "visible bg-black/20" : "invisible"
         }
    `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#f8f0e5] rounded-xl shadow m-3 p-3 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-lg bg-[#f8f0e5] text-[#553939]"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
