import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/main-navbar/main-navbar.component";
import PersonalNavbar from "./components/personal-navbar/personal-navbar.component";
import PhNavbar from "./components/ph-navbar/ph-navbar.component";
import BusinessNavbar from "./components/business-navbar/business-navbar.component";
import CalculatorA from "./components/calculator-a/calculator-a.component";
import FV from "./components/fv/fv.component";
import CalculatorB from "./components/calculator-b/calculator-b.component";
import CalculatorC from "./components/calculator-c/calculator-c.component";
import OCM from "./components/ocm/ocm.components";
import MDI from "./components/mdi/mdi.component";

function BA() {
  return <h1>I am BANK ACCOUNTS Page</h1>;
}
function CC() {
  return <h1>I am CREDIT CARDS Page</h1>;
}
function M() {
  return <h1>I am MORTGAGES Page</h1>;
}
function LLC() {
  return <h1>I am LLC Page</h1>;
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNavbar />}>
        <Route path="calculators" element={<PersonalNavbar />}>
          <Route path="1" element={<CalculatorA />} />
          <Route path="2" element={<CalculatorB />} />
          <Route path="3" element={<CalculatorC />} />
        </Route>
        <Route path="rates" element={<PhNavbar />}>
          <Route path="fv" element={<FV />} />
          <Route path="ocm" element={<OCM />} />
          <Route path="mdi" element={<MDI />} />
        </Route>
        {/* to do */}
        <Route path="compare" element={<BusinessNavbar />}>
          <Route path="m" element={<OCM />} />
          <Route path="llc" element={<MDI />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
