function Card({ children, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`
        p-6 rounded-2xl shadow-lg cursor-pointer
        transform transition-all duration-300
        hover:scale-105 active:scale-95
        animate-bounce-in
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
