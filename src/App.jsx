import Dashboard from "./modules/Dashboard/Dashboard";
import Dashboar from "./modules/Dashboard/Dashboard";
import Form from "./modules/Form/Form";
import { Navigate, redirect, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;
  if (!isLoggedIn) {
    <Navigate to={"users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoute>
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>

    // <div className="bg-[#cedff8] h-screen flex justify-center items-center">
    //   {/* <Form /> */}
    //   <Dashboar />
    // </div>
  );
}

export default App;
