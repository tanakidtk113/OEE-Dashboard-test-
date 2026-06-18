import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function DowntimeChart({ data }) {
  return (
    <BarChart width={900} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Bar dataKey="downtime" fill="orange" />
    </BarChart>
  );
}