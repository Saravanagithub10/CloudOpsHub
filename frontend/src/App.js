import React, { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:7071/api/GetStatus")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((err) => {
        setApiData("ERROR: " + err.message);
      });
  }, []);

  return (
    <div>
      <h1>CloudOps Hub 🚀</h1>
      <pre>{apiData}</pre>
    </div>
  );
}

export default App;