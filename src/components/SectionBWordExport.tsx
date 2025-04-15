import React from "react";

const SectionBPreview = () => {
  const data = [
    {
      label: "P1",
      value:
        "Businesses should conduct and govern themselves with integrity in a manner that is ethical, transparent and accountable",
    },
    {
      label: "P2",
      value:
        "Businesses should provide goods and services in a manner that is sustainable and safe",
    },
    {
      label: "P3",
      value:
        "Businesses should respect and promote the well-being of all employees, including those in their value chains",
    },
    {
      label: "P4",
      value:
        "Businesses should respect the interests of and be responsive towards all its stakeholders",
    },
    {
      label: "P5",
      value: "Businesses should respect and promote human rights",
    },
    {
      label: "P6",
      value:
        "Businesses should respect, protect and make efforts to restore the environment",
    },
    {
      label: "P7",
      value:
        "Businesses when engaging in influencing public and regulatory policy, should do so in a manner that is responsible and transparent",
    },
    {
      label: "P8",
      value:
        "Businesses should promote inclusive growth and equitable development",
    },
    {
      label: "P9",
      value:
        "Businesses should engage with and provide value to their consumers in a responsible manner",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        SECTION B: MANAGEMENT AND PROCESS DISCLOSURE
      </h3>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <p
          style={{ fontWeight: "normal", color: "black", marginBottom: "1rem" }}
        >
          This section is aimed at helping businesses demonstrate the
          structures, policies and processes put in place towards adopting the
          NGRBC Principles and Core Elements.
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          The National Guidelines for Responsible Business Conduct (NGRBC) as
          prescribed by the Ministry of Corporate Affairs advocates nine
          principles referred as P1-P9 as given below:
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
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    fontWeight: "bold",
                    color: "black",
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
              <th style={{ width: "40%" }}>Disclosure Question</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>P5</th>
              <th>P6</th>
              <th>P7</th>
              <th>P8</th>
              <th>P9</th>
            </tr>
            <tr>
              <th colSpan={10} style={{ textAlign: "center" }}>
                POLICY AND MANAGEMENT PROCESSES
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                1. a. Whether your entity’s policy/ policies cover each
                principle and its core elements of the NGRBCs. (Yes/No)
              </td>
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
              <td style={{ fontWeight: "bold" }}>
                b. Has the policy been approved by the Board? (Yes/No)
              </td>
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
              <td colSpan={10} style={{ fontWeight: "bold" }}>
                c. Web link of the policies, if available
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                2. Whether the entity has translated the policy into procedures.
                (Yes/No)
              </td>
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
              <td style={{ fontWeight: "bold" }}>
                3. Do the enlisted policies extend to your value chain partners?
                (Yes/No)
              </td>
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
              <td colSpan={10} style={{ fontWeight: "bold" }}>
                4. Name the national and international codes/ certifications/
                labels/ standards
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 1</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 2</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 3</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 4</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 5</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 6</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 7</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 8</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Principle 9</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td colSpan={10} style={{ fontWeight: "bold" }}>
                5. Specific commitments, goals and targets set by the entity
                with defined timelines, if any
              </td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                Climate and Environment Targets
              </td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Social Targets</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Governance Targets</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td colSpan={10} style={{ fontWeight: "bold" }}>
                Performance of the entity against the specific commitments,
                goals, and targets along with reasons
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={9}></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={9}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        GOVERNANCE, LEADERSHIP AND OVERSIGHT
      </h3>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <p
          style={{ fontWeight: "normal", color: "black", marginBottom: "1rem" }}
        >
          7. Statement by the director responsible for the business
          responsibility report, highlighting ESG- related challenges, targets
          and achievements (listed entity has flexibility regarding the
          placement of this disclosure)
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          8. Details of the highest authority responsible for implementation and
          oversight of the Business Responsibility &amp; Sustainability (BRSR)
          Policy
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          9. Does the entity have a specified committee of the board/ director
          responsible for decision- making on sustainability-related issues?
          (Yes/ No). If yes, provide details
        </p>
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          10. Details of Review of the National Guidelines on Responsible
          Business Conduct (NGRBC) by the company:
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
              <th rowSpan={2} style={{ width: "25%" }}>
                Subject for Review
              </th>
              <th colSpan={9}>
                Indicate whether review was undertaken by Director / Committee
                of the Board / Any other Committee
              </th>
              <th colSpan={9}>
                Frequency: Annually (A) / Half yearly (H) / Quarterly (Q) / Any
                other – please specify
              </th>
            </tr>
            <tr>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>P5</th>
              <th>P6</th>
              <th>P7</th>
              <th>P8</th>
              <th>P9</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>P5</th>
              <th>P6</th>
              <th>P7</th>
              <th>P8</th>
              <th>P9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Performance against above policies &amp; follow up action</td>
              {[...Array(18)].map((_, i) => (
                <td key={`row1-col${i}`}></td>
              ))}
            </tr>
            <tr>
              <td>
                Compliance with statutory requirements of relevance to the
                principles, and rectification of any non-compliances
              </td>
              {[...Array(18)].map((_, i) => (
                <td key={`row2-col${i}`}></td>
              ))}
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: "0.9em", fontStyle: "italic" }}>
          *Note:
          <br />
          P3: The frequency of review is half yearly (H) for customers and
          employees.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          11. Has the entity carried out independent assessment/ evaluation of
          the working of its policies by an external agency? (Yes/No). If yes,
          provide name of the agency.
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
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>P5</th>
              <th>P6</th>
              <th>P7</th>
              <th>P8</th>
              <th>P9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <p style={{ fontWeight: "bold", color: "black", marginBottom: "1rem" }}>
          12. If answer to question (1) above is “No” i.e. not all Principles
          are covered by a policy, reasons to be stated:
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
              <th style={{ width: "40%" }}>Questions</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>P5</th>
              <th>P6</th>
              <th>P7</th>
              <th>P8</th>
              <th>P9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                The entity does not consider the Principles material to its
                business 11 (Yes/ No)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                The entity is not at a stage where it is in a position to
                formulate and implement the policies on specified principles
                (Yes/No)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                The entity does not have the financial or/human and technical
                resources available for the task (Yes/No)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                It is planned to be done in the next financial year (Yes/No)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>
                Any other reason (please specify)
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionBPreview;
