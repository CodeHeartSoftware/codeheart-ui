import { Outlet, ScrollRestoration } from "react-router";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

/** Wraps every route; ScrollRestoration resets scroll on navigation and restores it on back/forward. */
const RootLayout = () => (
  <>
    <Outlet />
    <SiteFooter />
    <ScrollRestoration />
  </>
);

export default RootLayout;
