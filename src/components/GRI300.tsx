import React from "react";

const GRI300 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>GRI 300</h3>
        <h3 style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 301 Materials{" "}
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 301-1 Materials used by weight or volume{" "}
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginBottom: "30px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "40%",
                }}
              >
                Materials
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                non-renewable materials
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                renewable materials
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Weight /Volume of materials that are used to produce
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Weight /Volume of materials that are used to package
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 301-2 Recycled input materials used{" "}
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
                Particular
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
              "Percentage of recycled input materials used to manufacture the organization’s primary products and services.",
              "Percentage of recycled input materials",
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 301-3 Reclaimed products and their packaging materials{" "}
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
                Product category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Percentage of reclaimed products and their packaging materials
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
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
        <h3 style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 302 Energy{" "}
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 302-1 Energy consumption within the organization{" "}
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
                Particular
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Non-renewable
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Renewable
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total fuel consumption
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Joules
              </td>
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
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of Measurement
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
            {[
              "electricity consumption",
              "heating consumption",
              "cooling consumption",
              "steam consumption",
              "electricity sold",
              "Heating sold",
              "Cooling sold",
              "Steam sold",
              "Total energy consumption in organization",
            ].map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item === "Total energy consumption in organization"
                    ? "joules or multiples."
                    : "Watt-hours or multiples"}
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 302-2 Energy consumption outside of the organization{" "}
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
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
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unite of Measurement
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
                Energy consumption outside the organization
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Joules or multiples
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

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
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unite of Measurement
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
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Upstream categories
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Joules or multiples
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            {[
              "Purchased goods and services",
              "Capital goods",
              "Fuel- and energy-related activities",
              "Upstream transportation and distribution",
              "Waste generated in operations",
              "Business travel",
              "Employee commuting",
              "Upstream leased assets",
              "Other upstream",
            ].map((text, idx) => (
              <tr key={`up-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Downstream categories
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            {[
              "Downstream transportation and distribution",
              "Processing of sold products",
              "Use of sold products",
              "End-of-life treatment of sold products",
              "Downstream leased assets",
              "Franchises",
              "Investments",
            ].map((text, idx) => (
              <tr key={`down-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
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
          Disclosure 302-3 Energy intensity{" "}
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
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
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Within the Organization{" "}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Outside of organization
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Energy intensity ratio for the organization{" "}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 302-5 Reductions in energy requirements of products and
          services{" "}
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
                  width: "40%",
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
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Reductions in energy requirements of sold products and services
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <h3 style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 303 Water & effluents{" "}
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 303-1 Interactions with water as a shared resource{" "}
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 303-2 Management of water discharge-related impacts{" "}
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 303-3 Water withdrawal{" "}
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginBottom: "2rem",
          }}
        ></div>

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
                Water withdrawal [Disclosure 303-3]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS{" "}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATER STRESS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
                colSpan={3}
              >
                Water withdrawal by source
              </td>
            </tr>
            {[
              ["Surface water (total)", "", ""],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "", ""],

              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "ML"],

              ["Groundwater (total)", "ML", "ML"],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "ML", "ML"],
              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "ML"],

              ["Seawater (total)", "ML", "ML"],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "ML", "ML"],
              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "ML"],

              ["Produced water (total)", "ML", "ML"],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "ML", "ML"],
              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "ML"],

              ["Produced water (total)", "ML", "ML"],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "ML", "ML"],
              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "ML"],

              [
                "Total third-party water withdrawal by withdrawal source",
                "ML",
                "ML",
              ],
              [" Surface water", "ML", "ML"],
              [" Groundwater", "ML", "ML"],
              [" Seawater", "ML", "ML"],
              [" Produced water", "ML", "ML"],

              ["Total water withdrawal", "ML", "ML"],
              [
                " Surface water (total) + groundwater (total) + seawater (total) + produced water (total) + third-party water (total)",
                "ML",
                "ML",
              ],
            ].map(([label, wOrg, oOrg], index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight:
                      (label.toLowerCase().includes("(total)") ||
                        label.toLowerCase().includes("water withdrawal")) &&
                      !label.toLowerCase().includes("seawater")
                        ? "bold"
                        : "normal",
                  }}
                >
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {wOrg}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {oOrg}
                </td>
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 303-4 Water discharge
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginBottom: "2rem",
          }}
        ></div>

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
                Water discharge [Disclosure 303-4]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATER STRESS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water discharge by destination
              </td>
            </tr>
            {[
              ["Surface water", "ML", "X"],
              ["Groundwater", "ML", "X"],
              ["Seawater", "ML", "X"],
              ["Third-party water (total)", "ML", "X"],
              [
                "Third-party water sent for use to other organizations",
                "ML",
                "X",
              ],

              ["Total water discharge"],
              [
                "Surface water + groundwater + seawater + third-party water (total)",
                "ML",
                "ML",
              ],

              ["Water discharge by freshwater and other water"],
              ["Freshwater (≤1,000 mg/L Total Dissolved Solids)", "ML", "X"],
              ["Other water (>1,000 mg/L Total Dissolved Solids)", "ML", "X"],

              [
                "Water discharge by level of treatment - Note that this is recommended, but not required",
              ],
              ["No treatment", "ML", "X"],
              [
                "Treatment level [Provide the title for treatment level]",
                "ML",
                "X",
              ],
              [
                "Treatment level [Provide the title for treatment level]",
                "ML",
                "X",
              ],
              [
                "Treatment level [Provide the title for treatment level]",
                "ML",
                "X",
              ],
            ].map(([label, all, stress], idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight:
                      label.toLowerCase().includes("total water discharge") ||
                      label.toLowerCase().includes("discharge by") ||
                      label.toLowerCase().includes("level of treatment")
                        ? "bold"
                        : "normal",
                  }}
                  colSpan={label.toLowerCase().includes("discharge") ? 3 : 1}
                >
                  {label}
                </td>
                {!label.toLowerCase().includes("discharge") && (
                  <>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {all}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {stress}
                    </td>
                  </>
                )}
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 303-5 Water consumption
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
            marginBottom: "2rem",
          }}
        ></div>

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
                Water consumption [Disclosure 303-5]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATERSTRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Total water consumption", "ML", "ML"],
              [
                "Change in water storage, if water storage has been identified as having a significant water-related impact",
                "ML",
                "-",
              ],
            ].map(([label, all, stress], idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {all}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {stress}
                </td>
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
                FACILITIES IN AREAS WITH WATER STRESS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FACILITY A
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FACILITY B
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                [FACILITY X]
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water withdrawal (clause 2.2.1)
              </td>
            </tr>
            {[
              "Surface water",
              "Groundwater",
              "Seawater",
              "Produced water",
              "Third-party water",
            ].map((label, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={4}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water consumption (clause 2.5.1)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total water consumption
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
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
        <p style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 304 Biodiversity
        </p>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 304-1 Operational sites owned, leased, managed in, or
          adjacent to, protected areas and areas of high biodiversity value
          outside protected areas.
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
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  width: "30%",
                }}
              >
                Remarks
              </th>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Operational Sites
              </th>
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Owned
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Leased
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Managed
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Geographic location", ""],
              [
                "Subsurface and underground land that may be owned, leased, or managed by the organization",
                "",
              ],
              [
                "Position in relation to the protected area",
                "(in the area, adjacent to, or containing portions of the protected area) or the high biodiversity value area outside protected areas",
              ],
              [
                "Type of operation",
                "(office, manufacturing or production, or extractive)",
              ],
              [
                "Size of operational site in km²",
                "(or another unit, if appropriate)",
              ],
              [
                "Biodiversity value characterized by the attribute of the protected area or area of high biodiversity value outside the protected area",
                "(terrestrial, freshwater, or maritime ecosystem)",
              ],
              [
                "Biodiversity value characterized by listing of protected status",
                "(such as IUCN Protected Area Management Categories, Ramsar Convention, national legislation)",
              ],
            ].map(([particular, remark], idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {particular}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {remark}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 304-2 Significant impacts of activities, products and
          services on biodiversity
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 304-3 Habitats protected or restored
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
                Size
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {["habitat areas protected", "habitat areas restored"].map(
              (label, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {label}
                  </td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                </tr>
              )
            )}
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
          Disclosure 304-4 IUCN Red List species and national conservation list
          species with habitats in areas affected by operations
        </p>

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
                Level of extinction list
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of IUCN Red List species and national conservation
                list species
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Critically endangered",
              "Endangered",
              "Vulnerable",
              "Near threatened",
              "Least concern",
            ].map((status, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {status}
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
        <p style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 305 Emissions
        </p>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 305-1 Direct (Scope 1) GHG emissions
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Stationary Combustion Emission",
              "Mobile Combustion Emission",
              "Fugitive Emissions",
              "Process Emissions",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
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
          Disclosure 305-2 Energy indirect (Scope 2) GHG emissions
        </p>

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
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Energy Purchased from Third-party sources
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                GHG emissions in metric tons of CO2 equivalent.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 305-3 Other indirect (Scope 3) GHG emissions
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
                  width: "30%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Base line year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Energy Purchased from Third party sources",
              "Category 1 - Purchased goods and services",
              "Category 2 - Capital goods",
              "Category 3 - Fuel- and energy-related activities",
              "Category 4 - Upstream transportation and distribution",
              "Category 5 - Waste generated in operations",
              "Category 6 - Business travel",
              "Category 7 - Employee commuting",
              "Category 8 - Upstream leased assets",
              "Category 9 - Downstream transportation and distribution",
              "Category 10 - Processing of sold products",
              "Category 11 - Use of sold products",
              "Category 12 - End-of-life treatment of sold products",
              "Category 13 - Downstream leased assets",
              "Category 14 - Franchises",
              "Category 15 - Investments",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
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
          Disclosure 305-4 GHG emissions intensity
        </p>

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
                  width: "30%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "GHG emissions intensity ratio for the organization",
                "[Organization-specific metric (the denominator) chosen to calculate the ratio]",
              ],
              [
                "Total Emission Intensity for Scope 1: Direct Emissions",
                "(in tCO2e/organization specific metrics)",
              ],
              [
                "Total Emission Intensity for Scope 2: Indirect Emissions",
                "(in tCO2e/organization specific metrics)",
              ],
              [
                "Total Emission Intensity for Scope 3: Other Indirect Emissions",
                "(in tCO2e/organization specific metrics)",
              ],
            ].map(([label, unit], idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {unit}
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
          GRI 305-5 Reduction of GHG emissions
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
                  width: "30%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "GHG emissions reduced as a direct result of reduction initiatives",
              "GHG emissions reduced in Scope 1 emissions",
              "GHG emissions reduced in Scope 2 emissions",
              "GHG emissions reduced in Scope 3 emissions",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 305-6 Emissions of ozone-depleting substances (ODS)
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data Input
              </th>
            </tr>
          </thead>
          <tbody>
            {["Production of ODS", "Import of ODS", "Export of ODS"].map(
              (label, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {label}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    metric tons of CFC-11 (trichlorofluoromethane) equivalent
                  </td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                </tr>
              )
            )}
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
          Disclosure 305-7 Nitrogen oxides (NOx), sulfur oxides (SOx), and other
          significant air emissions
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
                }}
              >
                Quantitative data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data Input
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "NOx",
              "SOx",
              "Persistent organic pollutants (POP)",
              "Volatile organic compounds (VOC)",
              "Hazardous air pollutants (HAP)",
              "Particulate matter (PM)",
              "Other standard categories of air emissions identified in relevant regulations",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  kilograms or multiples
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
        <h3 style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 306 Waste{" "}
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 306-1 Waste generation and significant waste-related
          impacts{" "}
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 306-2 Management of significant waste related impacts
        </p>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 306-3 Waste generated
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
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
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total weight of waste generated
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Metric tons
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
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
                Waste category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {["Hazardous", "Non-hazardous"].map((type, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {type}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
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
                Sector-specific waste
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
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
                Material-specific waste
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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
          Disclosure 306-4 Waste diverted from disposal
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
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
                Qualitative data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total weight of waste diverted from disposal
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Metric tons
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
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
                }}
              >
                Total weight of waste diverted from disposal{" "}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Hazardous waste
              </td>
            </tr>
            {[
              "Preparation for reuse",
              "Recycling",
              "Other recovery operations",
              "Onsite",
              "Offsite",
            ].map((item, i) => (
              <tr key={`hazardous-${i}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Non-hazardous waste
              </td>
            </tr>
            {[
              "Preparation for reuse",
              "Recycling",
              "Other recovery operations",
              "Onsite",
              "Offsite",
            ].map((item, i) => (
              <tr key={`nonhazardous-${i}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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
          Disclosure 306-5 Waste directed to disposal
        </p>

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
                Total weight of waste diverted to disposal
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Hazardous Waste Section */}
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Hazardous waste
              </td>
            </tr>
            {[
              "Incineration (with energy recovery)",
              "Incineration (without energy recovery)",
              "Landfilling",
              "Other disposal operations",
              "Onsite",
              "Offsite",
            ].map((label, idx) => (
              <tr key={`hazardous-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            {/* Non-Hazardous Waste Section */}
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Non-hazardous waste
              </td>
            </tr>
            {[
              "Incineration (with energy recovery)",
              "Incineration (without energy recovery)",
              "Landfilling",
              "Other disposal operations",
              "Onsite",
              "Offsite",
            ].map((label, idx) => (
              <tr key={`nonhazardous-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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
        <h3 style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}>
          GRI 308 Supplier Environmental Assessment{" "}
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 308-1 New suppliers that were screened using environmental
          criteria{" "}
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginBottom: "30px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "40%",
                }}
              >
                Qualitative Data
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
                Percentage of new suppliers that were screened using
                environmental criteria{" "}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            border: "1px solid black",
            height: "50px",
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
          Disclosure 308-2 Negative environmental impacts in the supply chain
          and actions taken
        </p>

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
                Qualitative Data
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
                Number of suppliers assessed for environmental impacts.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                DPAN012
              </td>
            </tr>

            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Actual Negative Impacts
              </td>
            </tr>
            {[
              "Number of suppliers identified as having significant actual negative environmental impacts.",
              "Percentage of suppliers identified as having significant actual negative environmental impacts with which improvements were agreed upon as a result of assessment.",
              "Percentage of suppliers identified as having significant actual negative environmental impacts with which relationships were terminated as a result of assessment, and why.",
            ].map((label, idx) => (
              <tr key={`actual-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Potential negative Impacts
              </td>
            </tr>
            {[
              "Number of suppliers identified potential negative environmental impacts.",
              "Percentage of suppliers identified potential negative environmental impacts with which improvements were agreed upon as a result of assessment.",
              "Percentage of suppliers identified potential negative environmental impacts with which relationships were terminated as a result of assessment, and why.",
            ].map((label, idx) => (
              <tr key={`potential-${idx}`}>
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
    </div>
  );
};

export default GRI300;
