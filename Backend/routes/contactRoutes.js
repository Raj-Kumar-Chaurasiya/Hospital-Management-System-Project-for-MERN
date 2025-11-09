import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
