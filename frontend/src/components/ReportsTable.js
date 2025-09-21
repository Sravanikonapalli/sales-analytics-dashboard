import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const ReportsTable = ({ reports }) => (
  <div>
    <h3>Reports History</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Report Name</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reports.map((r, i) => (
          <TableRow key={i}>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.generatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default ReportsTable;
