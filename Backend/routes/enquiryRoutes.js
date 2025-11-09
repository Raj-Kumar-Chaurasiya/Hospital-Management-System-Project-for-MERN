import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// POST → Save new enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newEnquiry = new Enquiry({ name, email, phone, subject, message });
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// GET → Get all enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(enquiries);
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// PUT → Update an enquiry by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, subject, message } = req.body;

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      id,
      { name, email, phone, subject, message },
      { new: true }
    );

    if (!updatedEnquiry) return res.status(404).json({ message: "Enquiry not found" });

    res.status(200).json({ message: "Enquiry updated successfully", updatedEnquiry });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// DELETE → Delete an enquiry by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) return res.status(404).json({ message: "Enquiry not found" });

    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
