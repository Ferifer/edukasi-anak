import { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import { alphabetData } from "../data/alphabet";
import audioService from "../utils/audioService";

function Alphabet() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (item) => {
    setSelectedLetter(item);
    audioService.playLetterSound(item.letter, item.word);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300">
      <Navbar title="Belajar Huruf" />
      <BackButton />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🔤 Huruf A sampai Z
          </h2>
          <p className="text-xl text-white">
            Klik huruf untuk melihat contohnya!
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
          {alphabetData.map((item) => (
            <Card
              key={item.letter}
              onClick={() => handleLetterClick(item)}
              className={`${item.color} text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                {item.letter}
              </div>
              <div className="text-3xl md:text-4xl">{item.emoji}</div>
            </Card>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedLetter && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40"
            onClick={() => setSelectedLetter(null)}
          >
            <div
              className={`${selectedLetter.color} rounded-3xl p-8 md:p-12 max-w-lg w-full transform transition-all animate-bounce-in`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-8xl md:text-9xl font-bold text-white mb-4">
                  {selectedLetter.letter}
                </div>
                <div className="text-7xl md:text-8xl mb-4">
                  {selectedLetter.emoji}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedLetter.word}
                </div>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="mt-6 bg-white text-gray-800 px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-transform"
                >
                  Tutup ✖️
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alphabet;
