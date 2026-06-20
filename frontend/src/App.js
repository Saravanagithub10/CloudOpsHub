import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch(
      "https://cloudopshub-func-e5avaqehhacydcex.centralindia-01.azurewebsites.net/api/GetStatus"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

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
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 CloudOps Hub</h1>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginTop: "20px",
    marginBottom: "20px"
  }}
>
  <div
    style={{
      backgroundColor: "#e5f0ff",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center"
    }}
  >
    <h3>💻 CPU Usage</h3>
    <h2>{data.cpuUsage}</h2>
  </div>

  <div
    style={{
      backgroundColor: "#e8ffe8",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center"
    }}
  >
    <h3>🧠 Memory Usage</h3>
    <h2>{data.memoryUsage}</h2>
  </div>

  <div
    style={{
      backgroundColor: "#fff4e5",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center"
    }}
  >
    <h3>👥 Active Users</h3>
    <h2>{data.activeUsers}</h2>
  </div>

  <div
    style={{
      backgroundColor: "#ffe5e5",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center"
    }}
  >
    <h3>🚨 Total Alerts</h3>
    <h2>
      {(data.alerts?.critical || 0) +
        (data.alerts?.warning || 0) +
        (data.alerts?.info || 0)}
    </h2>
  </div>
</div>

      <button
        onClick={fetchData}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        🔄 Refresh Dashboard
      </button>

      {/* System Status */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>System Status</h2>
        <p>🟢 {data.status}</p>
      </div>

      {/* Resource Health */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>Resource Health</h2>
        <p>Frontend: 🟢 {data.frontendHealth}</p>
        <p>Backend: 🟢 {data.backendHealth}</p>
      </div>

      {/* System Metrics */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>System Metrics</h2>
        <p>CPU Usage: {data.cpuUsage}</p>
        <p>Memory Usage: {data.memoryUsage}</p>
        <p>Uptime: {data.uptime}</p>
        <p>Active Users: {data.activeUsers}</p>
      </div>

      {/* Deployment */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>Deployment Information</h2>
        <p>Last Deployment: {data.lastDeployment}</p>
      </div>

      {/* Azure Monitoring */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>Azure Monitoring</h2>
        <p>📊 Application Insights: Connected</p>
        <p>📡 Live Telemetry: Active</p>
        <p>🟢 Frontend Status: Healthy</p>
        <p>🟢 Backend Status: Healthy</p>
      </div>

      {/* Alert Management */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>🚨 Alert Management</h2>

        <div
          style={{
            backgroundColor: "#ffe5e5",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          🚨 Critical Alerts: {data.alerts?.critical}
        </div>

        <div
          style={{
            backgroundColor: "#fff4e5",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          ⚠️ Warning Alerts: {data.alerts?.warning}
        </div>

        <div
          style={{
            backgroundColor: "#e5f0ff",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          ℹ️ Information Alerts: {data.alerts?.info}
        </div>
      </div>

      {/* Recent Alerts */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "15px"
        }}
      >
        <h2>📋 Recent Alerts</h2>

        {data.recentAlerts?.map((alert, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #eee"
            }}
          >
            <strong>{alert.severity}</strong> - {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;