import { useEffect, useState } from "react";
import Charts from "./Charts";
import OutputChart from "./OutputChart";
import DowntimeChart from "./DowntimeChart";
import { getKPI, getEfficiency, getOutput, getDowntime } from "./api";

function App() {
  const [kpi, setKPI] = useState(null);
  const [efficiency, setEfficiency] = useState(null);
  const [output, setOutput] = useState(null);
  const [downtime, setDowntime] = useState(null);

  useEffect(() => {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    const fetchWithRetry = async (fn, setState) => {
      for (let i = 0; i < 5; i++) {
        try {
          const res = await fn();
          setState(res.data);
          return;
        } catch (err) {
          console.log("Retry...", i + 1);
          await delay(2000);
        }
      }
      console.error("Failed after retries");
    };

    const init = async () => {
      try {
        await fetch("https://oee-dashboard-test.onrender.com/kpi");
        console.log("Server warmed ");
      } catch {}

      await delay(3000);

      fetchWithRetry(getKPI, setKPI);
      fetchWithRetry(getEfficiency, setEfficiency);
      fetchWithRetry(getOutput, setOutput);
      fetchWithRetry(getDowntime, setDowntime);
    };

    init();
  }, []);

  if (!kpi || !efficiency || !output || !downtime) {
    return <p>Loading...</p>;
  }

  const latest = kpi[kpi.length - 1];

  return (
    <div>
      <h1>FactoryPulse Dashboard</h1>

      <h3>KPI</h3>
      <p>Month: {latest.month}</p>
      <p>Output: {latest["Output"]}</p>
      <p>OEE: {latest["OEE(%)"]}%</p>
      <p>Defect: {latest["Defect Rate(%)"]}%</p>
      <p>Downtime: {latest["Downtime(Min)"]} min</p>

      <h3>Efficiency</h3>
      <Charts data={efficiency} />

      <h3>Output</h3>
      <OutputChart data={output} />

      <h3>Downtime</h3>
      <DowntimeChart data={downtime} />
    </div>
  );
}

export default App;