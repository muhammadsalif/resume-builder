import React, { useState } from "react";
import { User as UserCircleIcon } from "lucide-react";


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

  const [photo, setPhoto] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
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
    setPhoto(null);
  };

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  return (
    <div className="flex flex-col w-full bg-white p-6 rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4 mb-6">

        <div className="flex flex-col gap-2">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
            Personal info
          </h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      {/* Upload section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-4 mb-6">
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center overflow-hidden">
          {photo ? (
            <img
              src={photo}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <UserCircleIcon className="w-16 h-16 text-gray-400" />
          )}
        </div>

        {/* Upload + Reset + Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="bg-blue-600 text-white text-sm font-medium px-4 py-2 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-blue-700 transition">
              Upload your photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onPhotoUpload}
              />
            </label>
            <button
              type="button"
              onClick={onReset}
              className="px-4 py-2 h-10 flex items-center justify-center text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={onNext} className="space-y-6">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            placeholder="Full name *"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="Title *"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email address *"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Phone number *"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Full-width Address */}
        <input
          name="address"
          value={form.address}
          onChange={onChange}
          placeholder="Address *"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Two-column grid for links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={onChange}
            placeholder="LinkedIn URL (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="indeed"
            value={form.indeed}
            onChange={onChange}
            placeholder="Indeed URL (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="behance"
            value={form.behance}
            onChange={onChange}
            placeholder="Behance URL (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="website"
            value={form.website}
            onChange={onChange}
            placeholder="Website URL (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
