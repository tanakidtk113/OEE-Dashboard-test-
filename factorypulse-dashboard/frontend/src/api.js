import axios from "axios";

const BASE_URL = "https://oee-dashboard-test.onrender.com";

export const getKPI = () =>
  axios.get("https://oee-dashboard-test.onrender.com/kpi");

export const getEfficiency = () =>
  axios.get("https://oee-dashboard-test.onrender.com/efficiency");

export const getOutput = () =>
  axios.get("https://oee-dashboard-test.onrender.com/output");

export const getDowntime = () =>
  axios.get("https://oee-dashboard-test.onrender.com/downtime");