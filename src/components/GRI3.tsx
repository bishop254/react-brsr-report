import React from "react";

const GRI3 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>GRI 3</h3>
        <h3 style={{ fontWeight: "bold" }}>
          2. Disclosures on material topics
        </h3>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 3-1 Process to determine material topics
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
          Disclosure 3-2 List of material topics
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
                List of Material Topics
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Priority
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
          Disclosure 3-3 Management of material topics
        </p>

        <div style={{ lineHeight: "1.6", fontSize: "16px" }}>
          <ol type="a">
            <li>
              Describe the actual and potential, negative and positive impacts
              on the economy, environment, and people, including impacts on
              their human rights;
            </li>
            <li>
              Report whether the organization is involved with the negative
              impacts through its activities or as a result of its business
              relationships, and describe the activities or business
              relationships;
            </li>
            <li>
              Describe its policies or commitments regarding the material topic
            </li>
            <li>
              Describe actions taken to manage the topic and related impacts,
              including:
              <ol type="i">
                <li>
                  Actions to prevent or mitigate potential negative impacts;
                </li>
                <li>
                  Actions to address actual negative impacts, including actions
                  to provide for or cooperate in their remediation;
                </li>
                <li>Actions to manage actual and potential positive impacts</li>
              </ol>
            </li>
            <li>
              Report the following information about tracking the effectiveness
              of the actions taken:
              <ol type="i">
                <li>
                  Processes used to track the effectiveness of the actions;
                </li>
                <li>
                  Goals, targets, and indicators used to evaluate progress;
                </li>
                <li>
                  The effectiveness of the actions, including progress toward
                  the goals and targets;
                </li>
                <li>
                  Lessons learned and how these have been incorporated into the
                  organization’s operational policies and procedures
                </li>
              </ol>
            </li>
          </ol>
          <p style={{ marginTop: "20px" }}>
            Describe how engagement with stakeholders has informed the actions
            taken and how it has informed whether the actions have been
            effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GRI3;
