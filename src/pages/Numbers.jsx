import { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import { numbersData } from "../data/numbers";
import audioService from "../utils/audioService";

function Numbers() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberClick = (item) => {
    setSelectedNumber(item);
    audioService.playNumberSound(item.number, item.word);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-teal-300 to-blue-300">
      <Navbar title="Belajar Angka" />
      <BackButton />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🔢 Angka 0 sampai 9
          </h2>
          <p className="text-xl text-white">
            Klik angka untuk melihat contohnya!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          {numbersData.map((item) => (
            <Card
              key={item.number}
              onClick={() => handleNumberClick(item)}
              className={`${item.color} text-center`}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {item.number}
              </div>
              <div className="text-4xl md:text-5xl">{item.emoji}</div>
            </Card>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedNumber && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40"
            onClick={() => setSelectedNumber(null)}
          >
            <div
              className={`${selectedNumber.color} rounded-3xl p-8 md:p-12 max-w-lg w-full transform transition-all animate-bounce-in`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-9xl md:text-[10rem] font-bold text-white mb-4">
                  {selectedNumber.number}
                </div>
                <div className="text-7xl md:text-8xl mb-4">
                  {selectedNumber.emoji}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedNumber.word}
                </div>
                <div className="text-xl md:text-2xl text-white bg-white bg-opacity-30 rounded-2xl p-4">
                  {selectedNumber.description}
                </div>
                <button
                  onClick={() => setSelectedNumber(null)}
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

export default Numbers;
