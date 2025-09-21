import React from "react";
import ReactECharts from "echarts-for-react";

const TopProductsChart = ({ data }) => {
  const option = {
    title: { text: "Top Products" },
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const item = params[0];
        return `${item.name}: ₹${item.value.toLocaleString()}`;
      },
    },
    xAxis: { type: "category", data: data.map((d) => d.name) },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.revenue),
        label: {
          show: true,
          position: "top",
          formatter: (params) => `₹${params.value.toLocaleString()}`,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default TopProductsChart;
