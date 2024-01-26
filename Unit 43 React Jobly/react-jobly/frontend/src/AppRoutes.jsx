import { Routes, Route } from "react-router-dom";
import JobsList from "./pages/JobsList";
import CompaniesList from "./pages/CompaniesList";
import CompanyDetail from "./CompanyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Logout from "./Logout";
import { useContext } from "react";
import UserContext from "./UserContext";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const { currentUser, token } = useContext(UserContext);

  return (
    <Routes >
      {/* Home routes.  */}
      <Route path="/" element={<Home />} />

      {/* Auth routes.  */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />

      {/* Login Protected Routes */}
      <Route element={<ProtectedRoutes token={token} />}>
        {/* Companies routes */}
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        {/* Jobs routes.  */}
        <Route path="/jobs" element={<JobsList />} />
        {/* Profile routes.  */}
        <Route path="/:username" element={<Profile user={currentUser} />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
