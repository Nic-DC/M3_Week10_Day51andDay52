import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

function App() {
  // const showLoader = useSelector((state) => state.jobsResult.isLoading);
  // console.log({ showLoader });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
