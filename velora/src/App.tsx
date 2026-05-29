import { useState } from "react";
import Navbar from "./components/Navbar";
import { PAGES } from "./utils/constants";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState(PAGES.HOME);
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <main className="pt-[60px] text-white">
        {page === PAGES.HOME && <Home setPage={setPage} />}
        {/* {page === PAGES.UPLOAD && (
          <UploadPage setPage={setPage} setAnalysis={setAnalysis} />
        )}
        {page === PAGES.ANALYSIS && (
          <AnalysisPage analysis={analysis} setPage={setPage} />
        )}
        {page === PAGES.COMPARE && <ComparePage analysis={analysis} />}
        {page === PAGES.AREA && <AreaPage />} */}
      </main>
    </>
  );
}

export default App;
