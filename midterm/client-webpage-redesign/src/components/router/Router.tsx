import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home";
import MacPage from "../../pages/Mac";
import NotFound from "../../pages/404";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Mac" Component={MacPage} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
