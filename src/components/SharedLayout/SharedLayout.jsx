import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../../shared/components/Loader/Loader.jsx";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
