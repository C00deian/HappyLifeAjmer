import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import FloatingContactButton from "./components/layout/FloatingContactButton";
import HomePage from "./pages/HomePage";
import ConsultancyPage from "./pages/ConsultancyPage";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultancy-form" element={<ConsultancyPage />} />
        </Routes>
      </main>
      <FloatingContactButton />
    </div>
  );
}

export default App;
