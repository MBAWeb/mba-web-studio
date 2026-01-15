import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route
            path="*"
              element={
                <div className="containerPage">
                  <section className="sectionPad">
                    <h1 className="h1">Page not found</h1>
                    <p className="p subtle mt-2">
                      That page doesn’t exist. Try heading back home.
                    </p>
                    <Link to="/" className="btn btnPrimary mt-4 inline-block">
                      Go home
                    </Link>
                  </section>
                </div>
              }
            />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
