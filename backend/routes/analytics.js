const express = require("express");
const router = express.Router();
const analytics = require("../controllers/analyticsController");

router.get("/overview", analytics.getOverview);
router.get("/top-products", analytics.getTopProducts);
router.get("/timeseries", analytics.getTimeseries);
router.get("/reports", analytics.getReportsHistory);
router.get("/recent-activity", analytics.getRecentActivity);

module.exports = router;
