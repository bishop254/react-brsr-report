// App.tsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// 🔥 Import your Section A form component
import SectionAWordExport from "./components/SectionAWordExport";
import SectionBWordExport from "./components/SectionBWordExport";
import PrincipleOne from "./components/PrincipleOne";
import PrincipleTwo from "./components/PrincipleTwo";
import PrincipleThree from "./components/PrincipleThree";
import PrincipleFour from "./components/PrincipleFour";
import PrincipleFive from "./components/PrincipleFive";

const principles = [
  "SECTION A: GENERAL DISCLOSURES",
  "SECTION B: MANAGEMENT AND PROCESS DISCLOSURES",
  // "SECTION C: PRINCIPLE-WISE PERFORMANCE DISCLOSURE",
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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // 0.0 to 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // Most visible first

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries[0];
        const sectionTitle = mostVisible.target.getAttribute("data-title");
        if (sectionTitle) {
          setSelected(sectionTitle);
        }
      }
    }, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
                onClick={() => {
                  setSelected(p);
                  const index = principles.indexOf(p);
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`principle-item ${selected === p ? "selected" : ""}`}
              >
                {p}
              </li>
            ))}
          </ul>
        </ScrollPanel>
      </div>

      <div className="main-content scroll-sections">
        {principles.map((p, index) => (
          <div
            key={p}
            ref={(el: any) => (sectionRefs.current[index] = el)}
            data-title={p}
            className="content-card"
            style={{ minHeight: "80vh", paddingBottom: "2rem" }}
          >
            {p === "SECTION A: GENERAL DISCLOSURES" && <SectionAWordExport />}

            {p === "SECTION B: MANAGEMENT AND PROCESS DISCLOSURES" && (
              <SectionBWordExport />
            )}

            {p === "PRINCIPLE 1: BUSINESSES SHOULD CONDUCT AND GOVERN..." && (
              <PrincipleOne />
            )}

            {p ===
              "PRINCIPLE 2: BUSINESSES SHOULD PROVIDE GOODS AND SERVICES..." && (
              <PrincipleTwo />
            )}

            {p === "PRINCIPLE 3: BUSINESSES SHOULD RESPECT AND PROMOTE..." && (
              <PrincipleThree />
            )}

            {p ===
              "PRINCIPLE 4: BUSINESSES SHOULD RESPECT THE INTERESTS..." && (
              <PrincipleFour />
            )}

            {p ===
              "PRINCIPLE 5: BUSINESSES SHOULD RESPECT AND PROMOTE HUMAN RIGHTS" && (
              <PrincipleFive />
            )}

            {/* {p ===
              "PRINCIPLE 6: BUSINESSES SHOULD RESPECT AND PROTECT THE ENVIRONMENT" && (
              <PrincipleSix />
            )} */}

            {/* {p ===
              "PRINCIPLE 7: BUSINESSES SHOULD ENGAGE IN POLICY IN A TRANSPARENT WAY" && (
              <PrincipleSeven />
            )} */}

            {/* {p ===
              "PRINCIPLE 8: BUSINESSES SHOULD PROMOTE INCLUSIVE GROWTH" && (
              <PrincipleEight />
            )} */}

            {/* {p ===
              "PRINCIPLE 9: BUSINESSES SHOULD PROVIDE VALUE TO CONSUMERS" && (
              <PrincipleNine />
            )} */}
          </div>
        ))}

        <div className="export-buttons" style={{ marginTop: "2rem" }}>
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
