const db = require("../models/init");

// Overview
exports.getOverview = (req, res) => {
  const { startDate, endDate } = req.query;
  const start = startDate || "2000-01-01";
  const end = endDate || "2100-01-01";

  db.get(
    `SELECT SUM(total_revenue) as totalRevenue,
            AVG(total_revenue) as avgOrderValue,
            COUNT(*) as totalOrders
     FROM sales
     WHERE report_date BETWEEN ? AND ?`,
    [start, end],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(row);
    }
  );
};

// Top Products
exports.getTopProducts = (req, res) => {
  const { startDate, endDate } = req.query;
  const start = startDate || "2000-01-01";
  const end = endDate || "2100-01-01";

  db.all(
    `SELECT p.name, SUM(s.total_revenue) as revenue
     FROM sales s
     JOIN products p ON s.product_id = p.id
     WHERE report_date BETWEEN ? AND ?
     GROUP BY p.id
     ORDER BY revenue DESC
     LIMIT 5`,
    [start, end],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};

// Timeseries (daily revenue)
exports.getTimeseries = (req, res) => {
  const { startDate, endDate } = req.query;
  const start = startDate || "2000-01-01";
  const end = endDate || "2100-01-01";

  db.all(
    `SELECT report_date as date, SUM(total_revenue) as revenue
     FROM sales
     WHERE report_date BETWEEN ? AND ?
     GROUP BY report_date
     ORDER BY report_date ASC`,
    [start, end],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};

// Reports History
exports.getReportsHistory = (req, res) => {
  db.all(`SELECT * FROM reports ORDER BY generated_at DESC`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Recent Activity
exports.getRecentActivity = (req, res) => {
  db.all(
    `SELECT s.report_date as date, c.name as customer, p.name as product, s.total_revenue as revenue
     FROM sales s
     JOIN customers c ON s.customer_id = c.id
     JOIN products p ON s.product_id = p.id
     ORDER BY s.report_date DESC
     LIMIT 5`,
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};
