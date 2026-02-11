import { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import { animalsData } from "../data/animals";
import audioService from "../utils/audioService";

function Animals() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
    audioService.playAnimalSound(animal.name, animal.sound);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <Navbar title="Mengenal Hewan" />
      <BackButton />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🐾 Dunia Hewan
          </h2>
          <p className="text-xl text-white">
            Klik hewan untuk belajar lebih banyak!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {animalsData.map((animal, index) => (
            <Card
              key={index}
              onClick={() => handleAnimalClick(animal)}
              className={`${animal.color} text-center`}
            >
              <div className="text-6xl md:text-7xl mb-3">{animal.emoji}</div>
              <div className="text-xl md:text-2xl font-bold text-white">
                {animal.name}
              </div>
            </Card>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedAnimal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40"
            onClick={() => setSelectedAnimal(null)}
          >
            <div
              className={`${selectedAnimal.color} rounded-3xl p-8 md:p-12 max-w-lg w-full transform transition-all animate-bounce-in`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-8xl md:text-9xl mb-6">
                  {selectedAnimal.emoji}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {selectedAnimal.name}
                </div>

                <div className="bg-white bg-opacity-40 rounded-2xl p-6 mb-4">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3">
                    🔊 Suara:
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-700">
                    "{selectedAnimal.sound}"
                  </div>
                </div>

                <div className="bg-white bg-opacity-40 rounded-2xl p-6 mb-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3">
                    💡 Tahukah kamu?
                  </div>
                  <div className="text-xl md:text-2xl text-gray-700">
                    {selectedAnimal.fact}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedAnimal(null)}
                  className="bg-white text-gray-800 px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-transform"
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

export default Animals;
