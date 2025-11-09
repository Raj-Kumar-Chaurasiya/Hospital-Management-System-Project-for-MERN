import React, { useState, useEffect } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function EnquiryAdmin() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/enquiries");
      const data = await res.json();
      setEnquiries(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✅ Enquiry submitted successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        fetchEnquiries();
      } else setStatus("❌ Failed to submit enquiry.");
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Could not connect to backend.");
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/enquiries/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setEditingId(null); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); fetchEnquiries(); }
      else alert("❌ Failed to update enquiry");
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this enquiry?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/enquiries/${id}`, { method: "DELETE" });
      if (res.ok) fetchEnquiries(); else alert("❌ Failed to delete enquiry");
    } catch (err) { console.error(err); }
  };

  // Styles
  const sectionStyle = { background: "linear-gradient(120deg, #00b4d8, #90e0ef)", minHeight: "100vh", padding: "40px 20px", color: "#023e8a", display: "flex", flexDirection: "column", alignItems: "center" };
  const formContainer = { background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", borderRadius: "15px", padding: "30px 40px", width: "100%", maxWidth: "600px", marginBottom: "50px" };
  const titleStyle = { fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#0077b6", textAlign: "center", textTransform: "uppercase" };
  const labelStyle = { display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "16px" };
  const inputStyle = { width: "100%", padding: "10px 15px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "15px" };
  const textareaStyle = { ...inputStyle, height: "100px", resize: "none" };
  const buttonStyle = { background: "linear-gradient(90deg, #0077b6, #00b4d8)", color: "white", border: "none", padding: "12px 25px", fontSize: "16px", fontWeight: "bold", borderRadius: "8px", cursor: "pointer", width: "100%" };
  const tableStyle = { width: "100%", maxWidth: "1000px", borderCollapse: "collapse", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", background: "white", borderRadius: "10px", overflow: "hidden" };
  const thStyle = { padding: "12px", borderBottom: "2px solid #0077b6", textAlign: "left", background: "#0077b6", color: "white" };
  const tdStyle = { padding: "10px", borderBottom: "1px solid #ddd" };
  const smallButton = { marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", cursor: "pointer" };

  return (
    <div>
      <Header />
      <Navbar />
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Enquiry Form</h2>
        <div style={formContainer}>
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" name="name" placeholder="Enter your name" style={inputStyle} value={formData.name} onChange={handleChange} required />
            <label style={labelStyle}>Email</label>
            <input type="email" name="email" placeholder="Enter your email" style={inputStyle} value={formData.email} onChange={handleChange} required />
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter contact" style={inputStyle} value={formData.phone} onChange={handleChange} required />
            <label style={labelStyle}>Subject</label>
            <input type="text" name="subject" placeholder="Subject" style={inputStyle} value={formData.subject} onChange={handleChange} required />
            <label style={labelStyle}>Message</label>
            <textarea name="message" placeholder="Message" style={textareaStyle} value={formData.message} onChange={handleChange} required />
            <button type="submit" style={buttonStyle}>Submit Enquiry</button>
          </form>
          {status && <p style={{ textAlign: "center", marginTop: "15px" }}>{status}</p>}
        </div>

        <h2 style={{ ...titleStyle, marginBottom: "20px" }}>Manage Enquiries</h2>
        {loading ? <p>Loading enquiries...</p> : enquiries.length === 0 ? <p>No enquiries found.</p> :
          <table style={tableStyle}>
            <thead>
              <tr><th style={thStyle}>Name</th><th style={thStyle}>Email</th><th style={thStyle}>Phone</th><th style={thStyle}>Subject</th><th style={thStyle}>Message</th><th style={thStyle}>Actions</th></tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr key={enq._id}>
                  <td style={tdStyle}>{editingId === enq._id ? <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} /> : enq.name}</td>
                  <td style={tdStyle}>{editingId === enq._id ? <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} /> : enq.email}</td>
                  <td style={tdStyle}>{editingId === enq._id ? <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} /> : enq.phone}</td>
                  <td style={tdStyle}>{editingId === enq._id ? <input type="text" name="subject" value={formData.subject} onChange={handleChange} style={inputStyle} /> : enq.subject}</td>
                  <td style={tdStyle}>{editingId === enq._id ? <textarea name="message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, height: "60px" }} /> : enq.message}</td>
                  <td style={tdStyle}>
                    {editingId === enq._id ? <>
                      <button style={{ ...smallButton, background: "#00b4d8", color: "white" }} onClick={() => handleUpdate(enq._id)}>Save</button>
                      <button style={{ ...smallButton, background: "#ccc" }} onClick={() => setEditingId(null)}>Cancel</button>
                    </> : <>
                      <button style={{ ...smallButton, background: "#0077b6", color: "white" }} onClick={() => { setEditingId(enq._id); setFormData({ name: enq.name, email: enq.email, phone: enq.phone, subject: enq.subject, message: enq.message }); }}>Edit</button>
                      <button style={{ ...smallButton, background: "#d90429", color: "white" }} onClick={() => handleDelete(enq._id)}>Delete</button>
                    </>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
      </section>
      <Footer />
    </div>
  );
}
