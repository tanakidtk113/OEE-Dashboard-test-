import axios from "axios";

const BASE_URL = "https://oee-dashboard-test.onrender.com";

export const getKPI = () => axios.get(`${BASE_URL}/kpi`);
export const getEfficiency = () => axios.get(`${BASE_URL}/efficiency`);
export const getOutput = () => axios.get(`${BASE_URL}/output`);
export const getDowntime = () => axios.get(`${BASE_URL}/downtime`);
