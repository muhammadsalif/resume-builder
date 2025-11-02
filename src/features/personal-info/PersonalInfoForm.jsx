import { useState } from "react";
import { User as UserCircleIcon } from "lucide-react";
import Splitter from "../../components/Splitter";
import nextIconGray from "../../assets/next.svg";
import nextIconWhite from "../../assets/nextwhite.svg";

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
    if (file) setPhoto(URL.createObjectURL(file));
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

  const isFormValid =
    form.fullName &&
    form.title &&
    form.email &&
    form.phone &&
    form.address;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
            Personal info
          </h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      {/* Upload Section */}
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

        {/* Upload + Reset */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="bg-[#00318B] text-white text-sm font-medium px-4 py-2 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-blue-900 transition">
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
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="e.g John Doe"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Placeholder"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="e.g john@email.com"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
              placeholder="e.g +1 234 567 890"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder="e.g 1234 Elm Street, Apt 2B"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-[#00318B] focus:outline-none"
            required
          />
        </div>

        <Splitter className="my-4" />

        {/* LinkedIn & Indeed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["linkedin", "indeed"].map((field) => (
            <div key={field} className="flex flex-col">
              <label
                htmlFor={field}
                className="text-sm font-medium text-gray-700 mb-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)} URL (optional)
              </label>
              <input
                id={field}
                name={field}
                value={form[field]}
                onChange={onChange}
                placeholder="www."
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              />
            </div>
          ))}
        </div>

        {/* Behance & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["behance", "website"].map((field) => (
            <div key={field} className="flex flex-col">
              <label
                htmlFor={field}
                className="text-sm font-medium text-gray-700 mb-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)} URL (optional)
              </label>
              <input
                id={field}
                name={field}
                value={form[field]}
                onChange={onChange}
                placeholder="www."
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none ${isFormValid
              ? "bg-[#00318B] text-white hover:bg-blue-900 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Next
            <img
              src={isFormValid ? nextIconWhite : nextIconGray}
              alt="Next"
              className="w-4 h-4"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
