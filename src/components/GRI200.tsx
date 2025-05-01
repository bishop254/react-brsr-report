import React from "react";

const GRI200 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>GRI 200</h3>
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 201 Economic Performance
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 201-1 Direct economic value generated and distributed
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "60%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY20xx–20xx (INR Million)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Economic Value Generated",
              "Net revenue",
              "Operating Cost",
              "Employee wages and benefits",
              "Spent on Employee benefit",
              "Payments to the providers of capital",
              "% of net profit contributed to the community",
              "The amount contributed to the Community",
              "Amount of Payments to the government in the form of Tax",
              "Economic value distributed",
              "Economic value retained",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 201-2 Financial implications and other risks and
          opportunities due to climate change
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 201-3 Defined benefit plan obligations and other retirement
          plans
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 201-4 Financial assistance received from government
        </p>
        <p style={{ fontWeight: "normal" }}>
          Total monetary value of financial assistance received by the
          organization from any government during the reporting period
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "70%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                tax relief and tax credits
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  color: "red",
                }}
              >
                subsidies
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                investment grants, research and development grants, and other
                relevant types of grant;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                awards
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                royalty holidays
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                financial assistance from Export Credit Agencies (ECAs);
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                financial incentives;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                other financial benefits received or receivable from any
                government for any operation
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 202 Market Presence
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 202-1 Ratios of standard entry-level wage by gender
          compared to local minimum wage
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 202-2 Proportion of senior management hired from the local
          community
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 203 Indirect Economic Impact
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 203-1 Infrastructure investments and services supported
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 203-2 Significant indirect economic impacts
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 204 Procurement Practices
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 204-1 Proportion of spending on local suppliers
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                % of products and services purchased locally <br />
                (% procurement budget spent on local supplier)
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Location 1
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Location 2
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(2)].map((_, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  &nbsp;
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  &nbsp;
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 205 Anti-Corruption
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 205-1 Operations assessed for risks related to corruption
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                Particular
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total number of operations assessed for risks related to
                corruption.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                MT
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of operations assessed for risks related to
                corruption.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 205-2 Communication and training about anti-corruption
          policies and procedures
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Governance body members
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Employees
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Business partner
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total number of whom the organization’s anticorruption policies
                and procedures have been communicated
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                % of whom the organization’s anticorruption policies and
                procedures have been communicated
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Governance body members
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of whom received training on anticorruption
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                % of whom received training on anticorruption
              </th>
            </tr>
          </thead>
          <tbody>
            {["Location 1", "Location 2"].map((loc, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {loc}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Employee Category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of whom received training on anticorruption
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                % of whom received training on anticorruption
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Senior management",
              "Mid-level management",
              "Entry level employees",
            ].map((cat, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {cat}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 205-3 Confirmed incidents of corruption and actions taken
        </p>
        <p style={{ fontWeight: "normal", marginLeft: "1rem" }}>
          a) Nature of confirmed incidents of corruption.
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "70%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {[
              "Total number of confirmed incidents of corruption",
              "Total number of confirmed incidents in which employees were dismissed or disciplined for corruption",
              "Total number of confirmed incidents when contracts with business partners were terminated or not renewed due to violations related to corruption.",
              "Public legal cases regarding corruption brought against the organization or its employees during the reporting period and the outcomes of such cases.",
            ].map((text, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 206: Anti-competitive Behavior
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 206-1 Legal actions for anti-competitive behavior,
          anti-trust, and monopoly practices
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "70%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of legal actions pending or completed during the
                reporting period regarding anti-competitive behavior and
                violations of anti-trust and monopoly legislation in which the
                organization has been identified as a participant.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: "blue" }}>
          GRI 207: Tax
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 207-1 Approach to tax
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 207-2 Tax governance, control, and risk management
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 207-3 Stakeholder engagement and management of concerns
          related to tax
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 207-4 Country-by-country reporting
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "60%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Tax Jurisdiction
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Names of the resident entities",
              "Primary activities of the organization",
              "Number of employees, and the basis of calculation of this number;",
              "Revenues from third-party sales;",
              "Revenues from intra-group transactions with other tax jurisdictions;",
              "Profit/loss before tax",
              "Tangible assets other than cash and cash equivalents;",
              "Corporate income tax paid on a cash basis;",
              "Corporate income tax accrued on profit/loss;",
              "Reasons for the difference between corporate income tax accrued on profit/loss and the tax due if the statutory tax rate is applied to profit/loss before tax.",
            ].map((text, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginTop: "2rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GRI200;
