import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// Export library
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// 🔥 Import your Section components
import SectionAWordExport from "./components/SectionAWordExport";
import SectionBWordExport from "./components/SectionBWordExport";
import PrincipleOne from "./components/PrincipleOne";
import PrincipleTwo from "./components/PrincipleTwo";
import PrincipleThree from "./components/PrincipleThree";
import PrincipleFour from "./components/PrincipleFour";
import PrincipleFive from "./components/PrincipleFive";
import PrincipleSix from "./components/PrincipleSix";
import PrincipleSeven from "./components/PrincipleSeven";
import PrincipleEight from "./components/PrincipleEight";
import PrincipleNine from "./components/PrincipleNine";

const principles = [
  "SECTION A: GENERAL DISCLOSURES",
  "SECTION B: MANAGEMENT AND PROCESS DISCLOSURES",
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

type LoadingType = "pdf" | "word";

function App() {
  const [loadingType, setLoadingType] = useState<LoadingType | null>(null);
  const [selected, setSelected] = useState(principles[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    };
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length) {
        const top = visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];
        const title = top.target.getAttribute("data-title");
        if (title) setSelected(title);
      }
    }, options);
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  const exportWord = () => {
    setLoadingType("word");
    setTimeout(() => {
      try {
        const element = document.getElementById("report-content")!;
        const html = element.outerHTML;
        const css = `
        <style>
          table { width:100%; border-collapse:collapse; }
          th, td { border:1px solid #333; padding:6px; }
        </style>`;
        const fullDoc = `<!DOCTYPE html><html><head><meta charset='utf-8'/>${css}</head><body>${html}</body></html>`;
        const blob = new Blob([fullDoc], {
          type: "application/msword;charset=utf-8",
        });
        saveAs(blob, "BRSR_Report.doc");
      } catch (e) {
        console.error(e);
        alert("Word export failed");
      } finally {
        setLoadingType(null);
      }
    }, 100);
  };

  const exportPDF = async () => {
    setLoadingType("pdf");

    try {
      const content = document.getElementById("report-content");
      if (!content) throw new Error("Report content not found");

      const html = `
        <html>
          <head>
            <style>
              body { font-family: Arial; padding: 40px; }
              .page-break { page-break-before: always; }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              th, td { border: 1px solid #333; padding: 6px; text-align: left; }
              h2 { color: #2c3e50; }
            </style>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `;

      const response = await fetch(
        "http://localhost:3001/report/download/pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ html }),
        }
      );

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "BRSR_Report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("PDF export failed", err);
      alert("PDF export failed");
    } finally {
      setLoadingType(null);
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
                  const idx = principles.indexOf(p);
                  sectionRefs.current[idx]?.scrollIntoView({
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

      <div id="report-content" className="main-content scroll-sections">
        {principles.map((p, i) => (
          <div
            key={p}
            ref={(el: any) => (sectionRefs.current[i] = el)}
            data-title={p}
            className="content-card"
            style={{ minHeight: "80vh", paddingBottom: "2rem" }}
          >
            {p === "SECTION A: GENERAL DISCLOSURES" && <SectionAWordExport />}
            {p === "SECTION B: MANAGEMENT AND PROCESS DISCLOSURES" && (
              <SectionBWordExport />
            )}
            {p.includes("PRINCIPLE 1") && <PrincipleOne />}
            {p.includes("PRINCIPLE 2") && <PrincipleTwo />}
            {p.includes("PRINCIPLE 3") && <PrincipleThree />}
            {p.includes("PRINCIPLE 4") && <PrincipleFour />}
            {p.includes("PRINCIPLE 5") && <PrincipleFive />}
            {p.includes("PRINCIPLE 6") && <PrincipleSix />}
            {p.includes("PRINCIPLE 7") && <PrincipleSeven />}
            {p.includes("PRINCIPLE 8") && <PrincipleEight />}
            {p.includes("PRINCIPLE 9") && <PrincipleNine />}
          </div>
        ))}

        <div className="export-buttons" style={{ marginTop: "2rem" }}>
          <Button
            label={loadingType === "word" ? "Exporting Word..." : "Export Word"}
            icon="pi pi-file-word"
            onClick={exportWord}
            loading={loadingType === "word"}
            severity="info"
          />
          <Button
            label={loadingType === "pdf" ? "Exporting PDF..." : "Export PDF"}
            icon="pi pi-file-pdf"
            onClick={exportPDF}
            loading={loadingType === "pdf"}
            severity="danger"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
