import React from "react";
import ReactECharts from "echarts-for-react";

const RevenueChart = ({ data }) => {
  const chartData = data.length
    ? data
    : [{ date: "All Time", revenue: 0 }];

  const option = {
    title: { text: "Revenue Trend" },
    tooltip: {
      trigger: "axis",
      formatter: (params) => `₹${params[0].value.toLocaleString()}`,
    },
    xAxis: { type: "category", data: chartData.map((d) => d.date) },
    yAxis: { type: "value" },
    series: [
      {
        type: "line",
        data: chartData.map((d) => d.revenue),
        smooth: true,
        label: {
          show: true,
          formatter: (params) => `₹${params.value.toLocaleString()}`,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default RevenueChart;
