import { useState } from "react";
import { Link } from "react-router-dom";
import audioService from "../utils/audioService";

function Navbar({ title }) {
  const [soundEnabled, setSoundEnabled] = useState(audioService.isEnabled());

  const toggleSound = () => {
    const newState = audioService.toggle();
    setSoundEnabled(newState);

    // Give feedback
    if (newState) {
      audioService.speak("Suara dinyalakan");
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-primary">
            🎓 Belajar Anak
          </Link>

          <div className="flex items-center gap-4">
            {title && (
              <h1 className="text-xl md:text-2xl font-bold text-purple-600">
                {title}
              </h1>
            )}

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="text-3xl md:text-4xl p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all"
              aria-label={soundEnabled ? "Matikan Suara" : "Nyalakan Suara"}
              title={soundEnabled ? "Matikan Suara" : "Nyalakan Suara"}
            >
              {soundEnabled ? "🔊" : "🔇"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
