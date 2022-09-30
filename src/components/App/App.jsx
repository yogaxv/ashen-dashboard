import { Route, Routes , BrowserRouter} from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MasterLayout from "../Layouts/MasterLayout/MasterLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/signin" element={<div>Sign in</div>} />
        
        <Route path="/" element={<MasterLayout />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
