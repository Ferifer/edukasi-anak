import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import audioService from "../utils/audioService";

function Home() {
  useEffect(() => {
    // Play welcome sound when home page loads
    const timer = setTimeout(() => {
      audioService.playWelcome();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-bounce-in">
            👋 Halo Adik-Adik!
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Ayo belajar sambil bermain! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <Link to="/alphabet" className="block">
            <Card className="bg-gradient-to-br from-yellow-300 to-orange-400 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🔤</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Belajar Huruf
                </h2>
                <p className="text-lg md:text-xl text-white">A sampai Z</p>
              </div>
            </Card>
          </Link>

          <Link to="/numbers" className="block">
            <Card className="bg-gradient-to-br from-green-300 to-teal-400 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🔢</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Belajar Angka
                </h2>
                <p className="text-lg md:text-xl text-white">0 sampai 9</p>
              </div>
            </Card>
          </Link>

          <Link to="/animals" className="block">
            <Card className="bg-gradient-to-br from-pink-300 to-purple-400 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🐾</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Mengenal Hewan
                </h2>
                <p className="text-lg md:text-xl text-white">
                  Belajar tentang hewan
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/quiz" className="block">
            <Card className="bg-gradient-to-br from-purple-400 to-indigo-500 hover:shadow-2xl border-4 border-yellow-300">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🎮</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Quiz Mode
                </h2>
                <p className="text-lg md:text-xl text-white">
                  Uji kemampuanmu!
                </p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-lg md:text-xl">
            Pilih salah satu untuk mulai belajar! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
