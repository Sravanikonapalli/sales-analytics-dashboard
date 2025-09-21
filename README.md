### Sales Analytics Dashboard 

A simple Sales Analytics Dashboard built with **React (frontend)** and **Express + SQLite (backend)**.
It shows total revenue, orders, top products, revenue trends, reports, and recent activity.

### Live URLS
- [Frontend]()

- [Backend]()

### Features

- Date Range Picker → filter all data by start & end date

- Overview Cards → Total Revenue, Average Order Value, Total Orders

- Revenue Trend Chart → Daily sales visualization

- Top Products Chart → Best-performing products by revenue

- Reports Table → Weekly & monthly reports

- Recent Activity → Track key updates

- Uses SQLite (lightweight relational DB)


### Tech Stack

Frontend: React, Material-UI, ECharts, Axios

Backend: Node.js, Express.js, SQLite3

Database: SQLite (with sample seed data)


### Setup Instructions
1. Clone the repository
git clone https://github.com/Sravanikonapalli/sales-analytics-dashboard.git
cd sales-analytics-dashboard

2. Backend Setup (Express + SQLite)
cd backend
npm install


Ensure you have a SQLite database file (db.sqlite).

If not, run the schema to create tables:

sqlite3 db.sqlite < schema.sql


Run backend:

npm start

3. Frontend Setup (React)
cd frontend
npm install


Run frontend:

npm start