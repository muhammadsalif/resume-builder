import React, { useState } from "react";
import "../personal/personalForm.css";

export default function PersonalInfoForm() {
  const [form, setForm] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    indeed: "",
    behance: "",
    website: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onReset = () => {
    setForm({
      fullName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      indeed: "",
      behance: "",
      website: "",
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    // Later: write to global store / localStorage / API
    alert("Saved (UI placeholder)");
  };

  return (
    <div className="personal-root">
      <div className="personal-header">
        <h2>Personal info</h2>
        <div className="photo-actions">
          <label className="upload-btn">
            Upload your photo
            <input type="file" style={{ display: "none" }} />
          </label>
          <button type="button" className="reset-btn" onClick={onReset}>Reset</button>
        </div>
      </div>

      <form className="personal-form" onSubmit={onSave}>
        <div className="grid-2">
          <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full name *" />
          <input name="title" value={form.title} onChange={onChange} placeholder="Title *" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email address *" />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone number *" />
        </div>

        <div className="full-row">
          <input name="address" value={form.address} onChange={onChange} placeholder="Address *" />
        </div>

        <div className="grid-2">
          <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="LinkedIn URL (optional)" />
          <input name="indeed" value={form.indeed} onChange={onChange} placeholder="Indeed URL (optional)" />
          <input name="behance" value={form.behance} onChange={onChange} placeholder="Behance URL (optional)" />
          <input name="website" value={form.website} onChange={onChange} placeholder="Website URL (optional)" />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
}
