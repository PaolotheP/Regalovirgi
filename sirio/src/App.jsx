import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Background from "./components/Background.jsx";
import Shell from "./components/Shell.jsx";
import { Toaster } from "./components/ui.jsx";
import { useStore } from "./lib/store.jsx";

import Welcome from "./features/Welcome.jsx";
import Onboarding from "./features/Onboarding.jsx";
import Pricing from "./features/Pricing.jsx";
import Dashboard from "./features/Dashboard.jsx";
import Plan from "./features/Plan.jsx";
import Topics from "./features/Topics.jsx";
import Topic from "./features/Topic.jsx";
import Heatmap from "./features/Heatmap.jsx";
import Leitner from "./features/Leitner.jsx";
import Flashcards from "./features/Flashcards.jsx";
import Feedback from "./features/Feedback.jsx";
import { QuizHub, QuizRun } from "./features/Quiz.jsx";
import { VeroFalsoHub, VeroFalsoRun, ApertaHub, ApertaRun } from "./features/Written.jsx";
import { Tutor, Esaminatore, Palestra } from "./features/AiLocked.jsx";
import { Podcast, Video, Mappe, Punti, Ripasso, Upload } from "./features/Content.jsx";
import { Classifica, Diario, Coorte, Costudy, Gemello, Mentori, QA, Bandi } from "./features/Community.jsx";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RequireOnboard({ children }) {
  const { state } = useStore();
  if (!state.onboarded) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  const { state } = useStore();
  return (
    <MotionConfig reducedMotion={state.a11y.reduceMotion ? "always" : "user"}>
      <Background />
      <Toaster />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/app" element={<RequireOnboard><Shell /></RequireOnboard>}>
          <Route index element={<Dashboard />} />
          <Route path="piano" element={<Plan />} />
          <Route path="argomenti" element={<Topics />} />
          <Route path="topic/:id" element={<Topic />} />
          <Route path="heatmap" element={<Heatmap />} />
          <Route path="quiz" element={<QuizHub />} />
          <Route path="quiz/:id" element={<QuizRun />} />
          <Route path="verofalso" element={<VeroFalsoHub />} />
          <Route path="verofalso/:id" element={<VeroFalsoRun />} />
          <Route path="aperta" element={<ApertaHub />} />
          <Route path="aperta/:id" element={<ApertaRun />} />
          <Route path="leitner" element={<Leitner />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="tutor" element={<Tutor />} />
          <Route path="esaminatore" element={<Esaminatore />} />
          <Route path="palestra" element={<Palestra />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="video" element={<Video />} />
          <Route path="mappe" element={<Mappe />} />
          <Route path="punti" element={<Punti />} />
          <Route path="upload" element={<Upload />} />
          <Route path="ripasso" element={<Ripasso />} />
          <Route path="classifica" element={<Classifica />} />
          <Route path="diario" element={<Diario />} />
          <Route path="coorte" element={<Coorte />} />
          <Route path="costudy" element={<Costudy />} />
          <Route path="gemello" element={<Gemello />} />
          <Route path="mentori" element={<Mentori />} />
          <Route path="qa" element={<QA />} />
          <Route path="bandi" element={<Bandi />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MotionConfig>
  );
}
