import React, { useState, useEffect } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function ManagePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    disease: "",
    doctor: "",
    admitDate: "",
  });

  // Fetch all patients
  const fetchPatients = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/patients");
      const data = await res.json();
      setPatients(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEditingId(null);
        setFormData({
          name: "",
          age: "",
          gender: "",
          contact: "",
          email: "",
          address: "",
          disease: "",
          doctor: "",
          admitDate: "",
        });
        fetchPatients();
      } else {
        alert("❌ Failed to update patient");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this patient?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchPatients();
      else alert("❌ Failed to delete patient");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading patients...</p>;

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "30px",
    fontFamily: "Arial, sans-serif",
  };
  const thStyle = {
    padding: "10px",
    background: "#0077b6",
    color: "white",
    border: "1px solid #000",
    textAlign: "center",
  };
  const tdStyle = {
    padding: "8px",
    border: "1px solid #000",
    textAlign: "center",
  };
  const inputStyle = {
    width: "100%",
    padding: "5px",
    boxSizing: "border-box",
  };
  const smallButton = {
    marginRight: "5px",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0077b6" }}>Manage Patients</h2>

        {patients.length === 0 ? (
          <p style={{ textAlign: "center" }}>No patients found.</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Address</th>
                <th style={thStyle}>Disease</th>
                <th style={thStyle}>Doctor</th>
                <th style={thStyle}>Admit Date</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p._id}>
                  {editingId === p._id ? (
                    <>
                      <td style={tdStyle}>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="age"
                          type="number"
                          value={formData.age}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="disease"
                          value={formData.disease}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          name="admitDate"
                          type="date"
                          value={formData.admitDate.split("T")[0]}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </td>
                      <td style={tdStyle}>
                        <button
                          style={{ ...smallButton, background: "#00b4d8", color: "white" }}
                          onClick={() => handleUpdate(p._id)}
                        >
                          Save
                        </button>
                        <button
                          style={{ ...smallButton, background: "#ccc" }}
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={tdStyle}>{p.name}</td>
                      <td style={tdStyle}>{p.age}</td>
                      <td style={tdStyle}>{p.gender}</td>
                      <td style={tdStyle}>{p.contact}</td>
                      <td style={tdStyle}>{p.email}</td>
                      <td style={tdStyle}>{p.address}</td>
                      <td style={tdStyle}>{p.disease}</td>
                      <td style={tdStyle}>{p.doctor}</td>
                      <td style={tdStyle}>
                        {p.admitDate ? new Date(p.admitDate).toLocaleDateString() : ""}
                      </td>
                      <td style={tdStyle}>
                        <button
                          style={{ ...smallButton, background: "#0077b6", color: "white" }}
                          onClick={() => {
                            setEditingId(p._id);
                            setFormData({ ...p });
                          }}
                        >
                          Edit
                        </button>
                        <button
                          style={{ ...smallButton, background: "#d90429", color: "white" }}
                          onClick={() => handleDelete(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
}
