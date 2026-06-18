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
    getKPI()
      .then(res => {
        console.log("KPI:", res.data);
        setKPI(res.data);
      })
      .catch(err => console.error("KPI error:", err));

    getEfficiency()
      .then(res => {
        console.log("EFF:", res.data);
        setEfficiency(res.data);
      })
      .catch(err => console.error("EFF error:", err));

    getOutput()
      .then(res => {
        console.log("OUTPUT:", res.data);
        setOutput(res.data);
      })
      .catch(err => console.error("OUTPUT error:", err));

    getDowntime()
      .then(res => {
        console.log("DOWN:", res.data);
        setDowntime(res.data);
      })
      .catch(err => console.error("DOWN error:", err));
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