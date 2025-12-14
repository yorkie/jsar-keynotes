import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SlideCover from "@/pages/slides/SlideCover";
import SlideProblem from "@/pages/slides/SlideProblem";
import SlideDefinition from "@/pages/slides/SlideDefinition";
import SlideWebRationale from "@/pages/slides/SlideWebRationale";
import SlideComparison from "@/pages/slides/SlideComparison";
import SlideVisionSafari from "@/pages/slides/SlideVisionSafari";
import SlidePathCompare from "@/pages/slides/SlidePathCompare";
import SlideMethodology from "@/pages/slides/SlideMethodology";
import SlideArchitecture from "@/pages/slides/SlideArchitecture";
import SlideCapabilities from "@/pages/slides/SlideCapabilities";
import SlideChallengesAsync from "@/pages/slides/SlideChallengesAsync";
import SlideChallengesOverflow from "@/pages/slides/SlideChallengesOverflow";
import SlideChallengesEffects from "@/pages/slides/SlideChallengesEffects";
import SlideUseCases from "@/pages/slides/SlideUseCases";
import SlideSummary from "@/pages/slides/SlideSummary";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<SlideCover />} />
        <Route path="/slide/1" element={<SlideProblem />} />
        <Route path="/slide/2" element={<SlideDefinition />} />
        <Route path="/slide/3" element={<SlideWebRationale />} />
        <Route path="/slide/4" element={<SlideVisionSafari />} />
        <Route path="/slide/5" element={<SlideComparison />} />
        <Route path="/slide/6" element={<SlidePathCompare />} />
        <Route path="/slide/7" element={<SlideMethodology />} />
        <Route path="/slide/8" element={<SlideArchitecture />} />
        <Route path="/slide/9" element={<SlideCapabilities />} />
        <Route path="/slide/10" element={<SlideChallengesAsync />} />
        <Route path="/slide/11" element={<SlideChallengesOverflow />} />
        <Route path="/slide/12" element={<SlideChallengesEffects />} />
        <Route path="/slide/13" element={<SlideUseCases />} />
        <Route path="/slide/14" element={<SlideSummary />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
