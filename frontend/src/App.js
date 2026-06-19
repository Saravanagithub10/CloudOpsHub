import React, { useEffect, useState } from "react";

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://cloudopshub-func-e5avaqehhacydcex.centralindia-01.azurewebsites.net/api/GetStatus"
      )
        .then((res) => res.json())
        .then((result) => {
          console.log("RESULT:", result);
          setData(result);
          setLastUpdated(new Date().toLocaleTimeString());
        })
        .catch((err) => {
          console.error("API ERROR:", err);
          setError(err.message);
        });
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!data) {
    return <h1>Loading Dashboard...</h1>;
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ textAlign: "center" }}>🚀 CloudOps Hub</h1>

      <p style={{ textAlign: "center", color: "#666" }}>
        Azure Cloud Monitoring Dashboard
      </p>

      <p style={{ textAlign: "center", color: "#888" }}>
        Last Updated: {lastUpdated}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div style={cardStyle}>
          <h3>🟢 System Status</h3>
          <h2>{data.status}</h2>
        </div>

        <div style={cardStyle}>
          <h3>⚙ CPU Usage</h3>
          <h2>{data.cpuUsage}</h2>
        </div>

        <div style={cardStyle}>
          <h3>🧠 Memory Usage</h3>
          <h2>{data.memoryUsage}</h2>
        </div>

        <div style={cardStyle}>
          <h3>🚀 Deployment</h3>
          <h2>Success</h2>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div style={cardStyle}>
          <h2>Resource Health</h2>
          <p>Frontend: 🟢 {data.frontendHealth}</p>
          <p>Backend: 🟢 {data.backendHealth}</p>
        </div>

        <div style={cardStyle}>
          <h2>Deployment Information</h2>
          <p>Last Deployment: {data.lastDeployment}</p>
          <p>Project: {data.project}</p>
        </div>
      </div>
    </div>
  );
}

export default App;