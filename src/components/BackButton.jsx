import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed bottom-6 left-6 z-50
        bg-white text-4xl p-4 rounded-full shadow-2xl
        hover:scale-110 active:scale-95
        transition-transform duration-200
      "
      aria-label="Kembali"
    >
      ⬅️
    </button>
  );
}

export default BackButton;
