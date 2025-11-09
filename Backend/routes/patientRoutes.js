import express from "express";
import Patient from "../models/Patients.js";

const router = express.Router();

// POST → Add a new patient
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const savedPatient = await patient.save();
    res.status(201).json({
      message: "Patient added successfully",
      patient: savedPatient,
    });
  } catch (error) {
    console.error("Error adding patient:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// GET → Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().sort({ admitDate: -1 });
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// GET → Get a single patient by ID
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// PUT → Update a patient by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPatient) return res.status(404).json({ message: "Patient not found" });

    res.status(200).json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// DELETE → Delete a patient by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

    if (!deletedPatient) return res.status(404).json({ message: "Patient not found" });

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
