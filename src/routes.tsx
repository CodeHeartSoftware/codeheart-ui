import { createBrowserRouter } from "react-router";
import { CASE_STUDIES } from "./constants/caseStudies";
import { Routes } from "./constants/routes";
import RootLayout from "./layouts/RootLayout";
import CaseStudyPage from "./pages/CaseStudyPage/CaseStudyPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import HowWeWorkPage from "./pages/HowWeWorkPage/HowWeWorkPage";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: Routes.HOME, Component: HomePage },
      { path: Routes.HOW_WE_WORK, Component: HowWeWorkPage },
      { path: Routes.CONTACT, Component: ContactPage },
      // Keyed so moving between case studies remounts the page instead of reusing it.
      ...CASE_STUDIES.map((caseStudy) => ({
        path: caseStudy.route,
        element: <CaseStudyPage key={caseStudy.id} caseStudy={caseStudy} />,
      })),
      { path: "*", Component: HomePage },
    ],
  },
]);
