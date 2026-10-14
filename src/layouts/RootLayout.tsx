import { Outlet, ScrollRestoration } from "react-router";

/** Wraps every route; ScrollRestoration resets scroll on navigation and restores it on back/forward. */
const RootLayout = () => (
  <>
    <Outlet />
    <ScrollRestoration />
  </>
);

export default RootLayout;
