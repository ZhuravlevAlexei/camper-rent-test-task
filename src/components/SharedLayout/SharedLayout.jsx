import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Navigation from "../Navigation/Navigation.jsx";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
