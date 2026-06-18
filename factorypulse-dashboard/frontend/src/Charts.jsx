import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

export default function Charts({ data }) {
  return (
    <LineChart width={900} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Legend />

      <Line type="monotone" dataKey="OEE(%)" stroke="green" strokeWidth={3} />
      <Line type="monotone" dataKey="Defect Rate(%)" stroke="red" strokeWidth={3} />
    </LineChart>
  );
}