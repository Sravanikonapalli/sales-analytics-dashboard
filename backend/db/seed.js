const db = require("../models/init");

db.serialize(() => {
  db.run("DELETE FROM customers");
  db.run("DELETE FROM products");
  db.run("DELETE FROM sales");
  db.run("DELETE FROM reports");

  const customers = [
    ["Alice", "North", "Individual"],
    ["Bob Corp", "South", "Business"],
    ["Charlie", "East", "Individual"],
    ["Delta Ltd", "West", "Business"]
  ];
  customers.forEach(c =>
    db.run("INSERT INTO customers (name, region, type) VALUES (?, ?, ?)", c)
  );

  const products = [
    ["Laptop", "Electronics", 1200],
    ["Headphones", "Electronics", 150],
    ["Shoes", "Fashion", 80],
    ["Smartphone", "Electronics", 800]
  ];
  products.forEach(p =>
    db.run("INSERT INTO products (name, category, price) VALUES (?, ?, ?)", p)
  );

  const sales = [
    [1, 1, 2, 2400, "2024-01-15"],
    [2, 2, 5, 4000, "2024-03-20"],
    [3, 3, 1, 150, "2024-07-10"],
    [4, 4, 3, 320, "2024-11-02"],
    [1, 2, 1, 1200, "2025-02-05"],
    [2, 3, 4, 3200, "2025-04-14"],
    [3, 1, 3, 240, "2025-07-18"],
    [4, 4, 2, 1600, "2025-09-01"]
  ];
  sales.forEach(s =>
    db.run(
      "INSERT INTO sales (customer_id, product_id, quantity, total_revenue, report_date) VALUES (?, ?, ?, ?, ?)",
      s
    )
  );

  const reports = [
    ["Weekly Sales Report", "2025-09-10", "Completed"],
    ["Monthly Marketing Analysis", "2025-09-01", "Completed"],
    ["Customer Segmentation", "2025-08-20", "Completed"]
  ];
  reports.forEach(r =>
    db.run("INSERT INTO reports (name, generated_at, status) VALUES (?, ?, ?)", r)
  );

  console.log("Database seeded with sample data");
});
