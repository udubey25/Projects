import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard"; // Adjust the path if necessary

const App = () => {
  const user = {
    given_name: "Utkarsh",
    email: "utkarsh.luck5200@gmail.com",
    picture: "https://lh3.googleusercontent.com/a/ACg8ocIFI8Cj-B17Tm27mmYUSSAeCsrpWhg6shUkE_NcfQhhvMAr=s96-c",
  };

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
