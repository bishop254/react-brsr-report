// App.tsx
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// 🔥 Import your Section A form component
import SectionAWordExport from "./components/SectionAWordExport";

const principles = [
  "SECTION A: GENERAL DISCLOSURES",
  "SECTION B: MANAGEMENT AND PROCESS DISCLOSURES",
  "SECTION C: PRINCIPLE-WISE PERFORMANCE DISCLOSURE",
  "PRINCIPLE 1: BUSINESSES SHOULD CONDUCT AND GOVERN...",
  "PRINCIPLE 2: BUSINESSES SHOULD PROVIDE GOODS AND SERVICES...",
  "PRINCIPLE 3: BUSINESSES SHOULD RESPECT AND PROMOTE...",
  "PRINCIPLE 4: BUSINESSES SHOULD RESPECT THE INTERESTS...",
  "PRINCIPLE 5: BUSINESSES SHOULD RESPECT AND PROMOTE HUMAN RIGHTS",
  "PRINCIPLE 6: BUSINESSES SHOULD RESPECT AND PROTECT THE ENVIRONMENT",
  "PRINCIPLE 7: BUSINESSES SHOULD ENGAGE IN POLICY IN A TRANSPARENT WAY",
  "PRINCIPLE 8: BUSINESSES SHOULD PROMOTE INCLUSIVE GROWTH",
  "PRINCIPLE 9: BUSINESSES SHOULD PROVIDE VALUE TO CONSUMERS",
];

function App() {
  const [selected, setSelected] = useState(principles[0]);
  const [isLoading, setIsLoading] = useState(false);

  const reportStructure = {
    cover: {
      title: "Business Responsibility and Sustainability Report",
      year: "2024",
      company: "Your Company Name",
    },
    index: principles,
    sections: principles.map((p) => ({
      title: p,
      content: `Placeholder content for ${p}.`,
      formulaData: {},
    })),
    selected,
  };

  const exportReport = async (type: string) => {
    setIsLoading(true);
    try {
      const fileName = type === "pdf" ? "BRSR_Report.pdf" : "BRSR_Report.docx";
      const response = await axios.post(
        `http://127.0.0.1:3000/report/download/${type}`,
        reportStructure,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Failed to download report");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="brsr-report-container">
      <div className="sidebar">
        <h2 className="sidebar-title">BRSR Report Index</h2>
        <ScrollPanel className="sidebar-scroll">
          <ul className="principles-list">
            {principles.map((p) => (
              <li
                key={p}
                onClick={() => setSelected(p)}
                className={`principle-item ${selected === p ? "selected" : ""}`}
              >
                {p}
              </li>
            ))}
          </ul>
        </ScrollPanel>
      </div>

      <div className="main-content">
        <div className="content-card">
          {selected === "SECTION A: GENERAL DISCLOSURES" ? (
            <SectionAWordExport />
          ) : (
            <Card title={selected}>
              <p>
                This is a sample report section for <strong>{selected}</strong>.
              </p>
            </Card>
          )}
        </div>

        <div className="export-buttons">
          <Button
            label={isLoading ? "Exporting PDF..." : "Export PDF"}
            icon="pi pi-file-pdf"
            onClick={() => exportReport("pdf")}
            loading={isLoading}
            severity="danger"
          />
          <Button
            label={isLoading ? "Exporting Word..." : "Export Word"}
            icon="pi pi-file-word"
            onClick={() => exportReport("word")}
            loading={isLoading}
            severity="info"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
