import axios from "axios";

const API_BASE = "https://sales-analytics-dashboard-506j.onrender.com/api";

const api = {
  getOverview: (params) =>
    axios
      .get(`${API_BASE}/overview`, { params })
      .then((r) => r.data),
  getTopProducts: (params) =>
    axios
      .get(`${API_BASE}/top-products`, { params })
      .then((r) => r.data),
  getTimeseries: (params) =>
    axios
      .get(`${API_BASE}/timeseries`, { params })
      .then((r) => r.data),
  getReports: () => axios.get(`${API_BASE}/reports`).then((r) => r.data),
  getRecentActivity: () =>
    axios.get(`${API_BASE}/recent-activity`).then((r) => r.data),
};

export default api;
