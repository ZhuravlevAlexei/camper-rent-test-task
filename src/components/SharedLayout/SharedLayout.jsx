import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
