import { createBrowserRouter } from "react-router";
import { Routes } from "./constants/routes";
import RootLayout from "./layouts/RootLayout";
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
      { path: "*", Component: HomePage },
    ],
  },
]);
