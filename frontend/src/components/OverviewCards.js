import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const OverviewCards = ({ summary }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h5">
              ₹{summary?.totalRevenue ? summary.totalRevenue.toLocaleString() : 0}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Avg Order Value</Typography>
            <Typography variant="h5">
              ₹{summary?.avgOrderValue ? summary.avgOrderValue.toLocaleString() : 0}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h5">{summary?.totalOrders || 0}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OverviewCards;
