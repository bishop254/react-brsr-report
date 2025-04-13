import React from "react";

const SectionAPreview = () => {
  const data = [
    {
      label: "Corporate Identity Number (CIN) of the Listed Entity",
      value: "",
    },
    { label: "Name of the Listed Entity", value: "" },
    { label: "Year of Incorporation", value: "" },
    { label: "Registered office address", value: "" },
    { label: "Corporate office address", value: "" },
    { label: "E-mail", value: "" },
    { label: "Telephone", value: "" },
    { label: "Website", value: "" },
    { label: "Financial year for which reporting is being done", value: "" },
    {
      label: "Name of the Stock Exchange(s) where shares are listed",
      value: "",
    },
    { label: "Paid-up capital", value: "", highlight: true },
    {
      label:
        "Name and contact details of the person who may be contacted in case of any queries on the BRSR report",
      value: "",
    },
    { label: "Reporting Boundary", value: "" },
    { label: "Name of assurance provider", value: "" },
    { label: "Type of assurance obtained", value: "" },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        SECTION A: GENERAL DISCLOSURES
      </h3>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue", marginBottom: "1rem" }}>
          I. Details of the listed entity
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "50%" }}>Field</th>
              <th style={{ width: "45%" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  style={{
                    fontWeight: item.highlight ? "bold" : "normal",
                    color: item.highlight ? "red" : "black",
                  }}
                >
                  {item.label}
                </td>
                <td>{item.value || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue", marginBottom: "1rem" }}>
          II. Products/services
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          16. Details of business activities (accounting for 90% of the
          turnover):
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>S. No</th>
              <th style={{ width: "30%" }}>Description of Main activity</th>
              <th style={{ width: "30%" }}>Description of Business Activity</th>
              <th style={{ width: "45%" }}>% of Turnover of the entity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          17. Products/services sold by the entity (accounting for 90% of the
          entity's turnover)
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>S. No</th>
              <th style={{ width: "30%" }}>Product/Service</th>
              <th style={{ width: "30%" }}>NIC Code</th>
              <th style={{ width: "45%" }}>% of total Turnover contributed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue", marginBottom: "1rem" }}>
          III. Operations
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          18. Number of locations where plants and/or operations/offices of the
          entity are situated
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Location</th>
              <th style={{ width: "30%" }}>Number of plants</th>
              <th style={{ width: "30%" }}>Number of offices</th>
              <th style={{ width: "45%" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>National</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>International</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          19. Markets served by the entity
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          a. Number of locations
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Locations</th>
              <th style={{ width: "30%" }}>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>National (No. of states)</td>
              <td></td>
            </tr>
            <tr>
              <td>International (No. of countries)</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          b. What is the contribution of exports as a percentage of the total
          turnover of the entity?
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          -
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue", marginBottom: "1rem" }}>
          IV. Employees
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          20. Details as of March 31, 2025
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          a. Employees and workers (including differently abled)
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: "5%" }}>
                S. No.
              </th>
              <th rowSpan={2} style={{ width: "25%" }}>
                Particulars
              </th>
              <th rowSpan={2} style={{ width: "10%" }}>
                Total (A)
              </th>
              <th colSpan={2} style={{ width: "20%" }}>
                Male
              </th>
              <th colSpan={2} style={{ width: "20%" }}>
                Female
              </th>
            </tr>
            <tr>
              <th style={{ width: "10%" }}>No. (B)</th>
              <th style={{ width: "10%" }}>% (B/A)</th>
              <th style={{ width: "10%" }}>No. (C)</th>
              <th style={{ width: "10%" }}>% (C/A)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} style={{ border: "none", fontWeight: "bold" }}>
                EMPLOYEES
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Permanent (D)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Other than Permanent (E)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Total employees (D+E)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={7} style={{ border: "none" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Permanent (F)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Other than Permanent (G)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Total workers (F+G)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          b. Differently abled employees and workers
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: "5%" }}>
                S. No.
              </th>
              <th rowSpan={2} style={{ width: "25%" }}>
                Particulars
              </th>
              <th rowSpan={2} style={{ width: "10%" }}>
                Total (A)
              </th>
              <th colSpan={2} style={{ width: "20%" }}>
                Male
              </th>
              <th colSpan={2} style={{ width: "20%" }}>
                Female
              </th>
            </tr>
            <tr>
              <th style={{ width: "10%" }}>No. (B)</th>
              <th style={{ width: "10%" }}>% (B/A)</th>
              <th style={{ width: "10%" }}>No. (C)</th>
              <th style={{ width: "10%" }}>% (C/A)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} style={{ border: "none", fontWeight: "bold" }}>
                DIFFERENTLY ABLED EMPLOYEES
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Permanent (D)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Other than Permanent (E)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Total differently-abled employees (D+E)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={7} style={{ border: "none" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Permanent (F)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Other than Permanent (G)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Total differently-abled workers (F+G)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          21. Participation/inclusion/representation of women
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: "5%" }}>
                &nbsp;
              </th>
              <th rowSpan={2} style={{ width: "10%" }}>
                Total (A)
              </th>
              <th colSpan={2} style={{ width: "20%" }}>
                No. and percentage of females
              </th>
            </tr>
            <tr>
              <th style={{ width: "10%" }}>No. (B)</th>
              <th style={{ width: "10%" }}>% (B/A)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Directors</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Key Management Personnel</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          22. Turnover rate for permanent employees and workers
        </p>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: "5%" }}>
                &nbsp;
              </th>
              <th colSpan={3} style={{ width: "30%" }}>
                FY 2024-25
              </th>
              <th colSpan={3} style={{ width: "30%" }}>
                FY 2023-24
              </th>
              <th colSpan={3} style={{ width: "30%" }}>
                FY 2022-23
              </th>
            </tr>
            <tr>
              <th style={{ width: "10%" }}>Male</th>
              <th style={{ width: "10%" }}>Female</th>
              <th style={{ width: "10%" }}>Total</th>
              <th style={{ width: "10%" }}>Male</th>
              <th style={{ width: "10%" }}>Female</th>
              <th style={{ width: "10%" }}>Total</th>
              <th style={{ width: "10%" }}>Male</th>
              <th style={{ width: "10%" }}>Female</th>
              <th style={{ width: "10%" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Permanent Employees</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Permanent Workers</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionAPreview;
