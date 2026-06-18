import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:7071/api/GetStatus")
      .then((res) => res.json())
      .then((result) => {
        console.log("RESULT:", result);
        setData(result);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setError(err.message);
      });
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
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 CloudOps Hub</h1>

      <div style={{ border: "1px solid #ddd", padding: "15px", marginTop: "15px" }}>
        <h2>System Status</h2>
        <p>🟢 {data.status}</p>
      </div>

      <div style={{ border: "1px solid #ddd", padding: "15px", marginTop: "15px" }}>
        <h2>Resource Health</h2>
        <p>Frontend: 🟢 {data.frontendHealth}</p>
        <p>Backend: 🟢 {data.backendHealth}</p>
      </div>

      <div style={{ border: "1px solid #ddd", padding: "15px", marginTop: "15px" }}>
        <h2>System Metrics</h2>
        <p>CPU Usage: {data.cpuUsage}</p>
        <p>Memory Usage: {data.memoryUsage}</p>
      </div>

      <div style={{ border: "1px solid #ddd", padding: "15px", marginTop: "15px" }}>
        <h2>Deployment Information</h2>
        <p>Last Deployment: {data.lastDeployment}</p>
      </div>
    </div>
  );
}

export default App;