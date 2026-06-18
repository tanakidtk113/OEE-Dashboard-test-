import axios from "axios";

export const getKPI = () => axios.get("http://127.0.0.1:8000/kpi");
export const getEfficiency = () => axios.get("http://127.0.0.1:8000/efficiency");
export const getOutput = () => axios.get("http://127.0.0.1:8000/output");
export const getDowntime = () => axios.get("http://127.0.0.1:8000/downtime");