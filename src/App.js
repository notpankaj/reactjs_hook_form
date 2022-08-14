import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Result from "./pages/Result";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Header from "./components/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
