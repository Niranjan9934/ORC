import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ProfessionalTraining from "./pages/ProfessionalTraining";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import WhatsNew from "./pages/WhatsNew";
import Documents from "./pages/Document";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/professional-training"
            element={<ProfessionalTraining />}
          />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
