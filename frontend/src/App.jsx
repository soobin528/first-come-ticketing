import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((data) => setStatus(data))
      .catch((err) => setStatus(`error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Frontend</h1>
      <p>Backend status: <b>{status}</b></p>
    </div>
  );
}

export default App;
