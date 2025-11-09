import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  contact: String,
  email: String,
  address: String,
  disease: String,
  doctor: String,
  admitDate: Date,
}, { timestamps: true });

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
