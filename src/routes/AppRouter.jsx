import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Alphabet from "../pages/Alphabet";
import Numbers from "../pages/Numbers";
import Animals from "../pages/Animals";
import Quiz from "../pages/Quiz";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
