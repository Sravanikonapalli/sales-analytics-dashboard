import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const RecentActivity = ({ activity }) => (
  <div>
    <h3>Recent Activity</h3>
    <List>
      {activity.map((a, i) => (
        <ListItem key={i}>
          <ListItemText primary={a.event} secondary={`${a.date} - ${a.user}`} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default RecentActivity;
