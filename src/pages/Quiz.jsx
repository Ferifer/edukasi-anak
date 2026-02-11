import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import { alphabetData } from "../data/alphabet";
import { numbersData } from "../data/numbers";
import { animalsData } from "../data/animals";
import audioService from "../utils/audioService";

function Quiz() {
  const navigate = useNavigate();
  const [quizType, setQuizType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const totalQuestions = 10;

  useEffect(() => {
    if (quizType && !currentQuestion) {
      generateQuestion();
    }
  }, [quizType]);

  const generateQuestion = () => {
    if (questionsAnswered >= totalQuestions) {
      setShowResult(true);
      return;
    }

    let question, correctAnswer, allOptions;

    if (quizType === "alphabet") {
      const correct =
        alphabetData[Math.floor(Math.random() * alphabetData.length)];
      const wrongOptions = alphabetData
        .filter((item) => item.letter !== correct.letter)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      question = `Cari huruf ${correct.letter}`;
      correctAnswer = correct.letter;
      allOptions = [correct, ...wrongOptions].sort(() => 0.5 - Math.random());
    } else if (quizType === "numbers") {
      const correct =
        numbersData[Math.floor(Math.random() * numbersData.length)];
      const wrongOptions = numbersData
        .filter((item) => item.number !== correct.number)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      question = `Cari angka ${correct.number}`;
      correctAnswer = correct.number;
      allOptions = [correct, ...wrongOptions].sort(() => 0.5 - Math.random());
    } else if (quizType === "animals") {
      const correct =
        animalsData[Math.floor(Math.random() * animalsData.length)];
      const wrongOptions = animalsData
        .filter((item) => item.name !== correct.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      question = `Hewan yang bersuara "${correct.sound}"?`;
      correctAnswer = correct.name;
      allOptions = [correct, ...wrongOptions].sort(() => 0.5 - Math.random());
    }

    setCurrentQuestion({ question, correctAnswer });
    setOptions(allOptions);
  };

  const handleAnswer = (selectedItem) => {
    const isCorrect =
      (quizType === "alphabet" &&
        selectedItem.letter === currentQuestion.correctAnswer) ||
      (quizType === "numbers" &&
        selectedItem.number === currentQuestion.correctAnswer) ||
      (quizType === "animals" &&
        selectedItem.name === currentQuestion.correctAnswer);

    if (isCorrect) {
      setScore(score + 1);
      audioService.playCorrectSound();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    } else {
      audioService.playWrongSound();
    }

    setQuestionsAnswered(questionsAnswered + 1);
    setTimeout(() => {
      setCurrentQuestion(null);
      generateQuestion();
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizType(null);
    setCurrentQuestion(null);
    setScore(0);
    setQuestionsAnswered(0);
    setShowResult(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "Sempurna! Kamu hebat sekali! 🌟";
    if (percentage >= 80) return "Bagus sekali! Pintar! 🎉";
    if (percentage >= 60) return "Bagus! Terus belajar ya! 👍";
    return "Coba lagi! Kamu pasti bisa! 💪";
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
        <Navbar title="Hasil Quiz" />
        <BackButton />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center animate-bounce-in">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
              Quiz Selesai!
            </h2>
            <div className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
              {score}/{totalQuestions}
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              {getScoreMessage()}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-blue-500 text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-transform"
              >
                Main Lagi 🔄
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-green-500 text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-transform"
              >
                Ke Menu Utama 🏠
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!quizType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
        <Navbar title="Quiz Mode" />
        <BackButton />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🎮 Pilih Quiz
            </h2>
            <p className="text-xl md:text-2xl text-white">
              Ayo uji kemampuanmu!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card
              onClick={() => setQuizType("alphabet")}
              className="bg-gradient-to-br from-yellow-300 to-orange-400"
            >
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🔤</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Quiz Huruf
                </h3>
                <p className="text-lg md:text-xl text-white mt-2">
                  Cari huruf yang tepat!
                </p>
              </div>
            </Card>

            <Card
              onClick={() => setQuizType("numbers")}
              className="bg-gradient-to-br from-green-300 to-teal-400"
            >
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🔢</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Quiz Angka
                </h3>
                <p className="text-lg md:text-xl text-white mt-2">
                  Cari angka yang tepat!
                </p>
              </div>
            </Card>

            <Card
              onClick={() => setQuizType("animals")}
              className="bg-gradient-to-br from-pink-300 to-purple-400"
            >
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🐾</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Quiz Hewan
                </h3>
                <p className="text-lg md:text-xl text-white mt-2">
                  Tebak hewan dari suaranya!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
      <Navbar title={`Quiz - ${questionsAnswered}/${totalQuestions}`} />
      <BackButton />

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-9xl animate-ping">🎉</div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {currentQuestion && (
          <>
            <div className="text-center mb-8">
              <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="text-2xl md:text-3xl text-white mb-4">
                Skor: {score} ⭐
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {options.map((item, index) => (
                <Card
                  key={index}
                  onClick={() => handleAnswer(item)}
                  className={`${
                    quizType === "alphabet"
                      ? item.color
                      : quizType === "numbers"
                        ? item.color
                        : item.color
                  } text-center`}
                >
                  <div className="text-6xl md:text-7xl mb-2">
                    {quizType === "alphabet" && item.emoji}
                    {quizType === "numbers" && item.emoji}
                    {quizType === "animals" && item.emoji}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {quizType === "alphabet" && item.letter}
                    {quizType === "numbers" && item.number}
                    {quizType === "animals" && item.name}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
