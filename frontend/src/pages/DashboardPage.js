import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import api from "../services/api";
import OverviewCards from "../components/OverviewCards";
import RevenueChart from "../components/RevenueChart";
import TopProductsChart from "../components/TopProductsChart";
import ReportsTable from "../components/ReportsTable";
import RecentActivity from "../components/RecentActivity";

const DashboardPage = () => {
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1))); // 1 month ago
  const [endDate, setEndDate] = useState(new Date());
  const [summary, setSummary] = useState({});
  const [timeseries, setTimeseries] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [reports, setReports] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = {
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
      };
      const [overview, timeseriesData, topProductsData, reportsData, activityData] =
        await Promise.all([
          api.getOverview(params),
          api.getTimeseries(params),
          api.getTopProducts(params),
          api.getReports(),
          api.getRecentActivity(),
        ]);

      setSummary(overview);
      setTimeseries(timeseriesData);
      setTopProducts(topProductsData);
      setReports(reportsData);
      setActivity(activityData);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Sales Analytics Dashboard
      </Typography>

      <div style={{ marginBottom: 20, display: "flex", gap: "10px" }}>
        <div>
          <Typography variant="subtitle1">Start Date</Typography>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div>
          <Typography variant="subtitle1">End Date</Typography>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <OverviewCards summary={summary} />

          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12} md={6}>
              <RevenueChart data={timeseries} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TopProductsChart data={topProducts} />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12} md={6}>
              <ReportsTable reports={reports} />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecentActivity activity={activity} />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
