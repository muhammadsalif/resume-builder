import React, { useState } from "react";
import { User as UserCircleIcon } from "lucide-react";
import Splitter from "../../components/Splitter";
import nextIcon from "../../assets/next.svg";

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
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6">
        <div className="flex flex-col gap-2 p-5">
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
        {/* Full Name & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="e.g John doe"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Placeholder"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="e.g John doe"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              type="tel"
              placeholder="e.g 00 000 0000"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder="e.g Villa #1234, Stre..."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <Splitter className="my-4" />

        {/* LinkedIn & Indeed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              LinkedIn URL (optional)
            </label>
            <input
              name="linkedin"
              value={form.linkedin}
              onChange={onChange}
              placeholder="www."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Indeed URL (optional)
            </label>
            <input
              name="indeed"
              value={form.indeed}
              onChange={onChange}
              placeholder="www."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Behance & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Behance URL (optional)
            </label>
            <input
              name="behance"
              value={form.behance}
              onChange={onChange}
              placeholder="www."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-[Montserrat] text-[14px] font-medium leading-[20px] tracking-[-0.005em] text-gray-700 mb-1">
              Website URL (optional)
            </label>
            <input
              name="website"
              value={form.website}
              onChange={onChange}
              placeholder="www."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={
              !form.fullName ||
              !form.title ||
              !form.email ||
              !form.phone ||
              !form.address
            }
            className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg transition 
      outline-none focus:outline-none focus:ring-0 
      ${form.fullName &&
                form.title &&
                form.email &&
                form.phone &&
                form.address
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
              }`}
          >
            Next
            <img src={nextIcon} alt="" className="w-4 h-4" />
          </button>
        </div>
      </form>

    </div>
  );
}
