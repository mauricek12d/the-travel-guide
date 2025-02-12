import express from "express";
import axios from "axios";

const router = express.Router();

// ✅ Fetch Time Data for a Given Location
router.get("/time/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(`http://worldtimeapi.org/api/timezone/${location}`);
    
    res.json({
      timezone: response.data.timezone,
      datetime: response.data.datetime,
      utc_offset: response.data.utc_offset,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch time data. Please check the location format." });
  }
});

export default router;
