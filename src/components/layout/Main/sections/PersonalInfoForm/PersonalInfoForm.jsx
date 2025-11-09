import { useRef } from "react";
import { Splitter } from "../../../../common";
import nextIconGray from "../../../../../assets/next.svg";
import nextIconWhite from "../../../../../assets/nextwhite.svg";
import avatar from "../../../../../assets/avatar.svg";
import { useResumeStore } from "../../../../../store/resumeStore";

export default function PersonalInfoForm() {
  const personalInfo = useResumeStore((state) => state.personalInfo);
  const setPersonalInfo = useResumeStore((state) => state.setPersonalInfo);
  const setPhoto = useResumeStore((state) => state.setPhoto);

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name !== "phone") {
      setPersonalInfo({ [name]: value });
      return;
    }
    // Step 1: Remove anything that is not digit, +, or -
    value = value.replace(/[^+\d-]/g, "");

    // Step 2: Allow only ONE leading + (remove any other +)
    value = value.replace(/(?!^\+)\+/g, "");
    // Step 3: Allow only TWO hyphens in the entire string
    const hyphens = value.match(/-/g);
    if (hyphens && hyphens.length > 2) {
      // remove extra hyphens beyond the 2nd one
      value = value.replace(/-/g, (match, offset, str) =>
        str.indexOf(match) === offset || str.indexOf(match, offset + 2) === offset
          ? match
          : ""
      );
    }
    setPersonalInfo({ [name]: value });
  };

  const fileInputRef = useRef(null);

  const onPhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    try {
      if (personalInfo.photo && personalInfo.photo.startsWith && personalInfo.photo.startsWith("blob:")) {
        URL.revokeObjectURL(personalInfo.photo);
      }
    } catch {
      // ignore
    }

    const objectUrl = URL.createObjectURL(file);
    setPhoto(objectUrl);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onReset = () => {
    setPersonalInfo({
      fullName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      indeed: "",
      behance: "",
      website: "",
      photo: null
    });
    // Ensure photo setter is cleared as well and revoke previous blob URL
    try {
      if (personalInfo.photo && personalInfo.photo.startsWith && personalInfo.photo.startsWith("blob:")) {
        URL.revokeObjectURL(personalInfo.photo);
      }
    } catch {
      // ignore
    }
    setPhoto(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  const isFormValid =
    personalInfo.fullName &&
    personalInfo.title &&
    personalInfo.email &&
    personalInfo.phone &&
    personalInfo.address;

  return (
    <div className="flex flex-col w-full max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1 w-full sm:w-auto mb-4 sm:mb-0">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
            Personal info
          </h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-200 pb-6 mb-6">
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
          {personalInfo.photo ? (
            <img
              src={personalInfo.photo}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <img src={avatar} alt="user" className="w-12 h-12 opacity-50" />
            </div>
          )}
        </div>

        {/* Upload + Reset */}
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <label className="inline-flex items-center justify-center px-4 py-2.5 bg-[#00318B] text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-900 transition-colors duration-200 ease-in-out min-w-[160px]">
              Upload your photo
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onPhotoUpload}
              />
            </label>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 ease-in-out min-w-[100px]"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={onNext} className="space-y-8">
        {/* Full Name & Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 flex items-center"
            >
              Full name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              value={personalInfo.fullName}
              onChange={onChange}
              placeholder="e.g John Doe"
              className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 flex items-center"
            >
              Title <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={personalInfo.title}
              onChange={onChange}
              placeholder="e.g Software Engineer"
              className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 flex items-center"
            >
              Email address <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={30}
              value={personalInfo.email}
              onChange={onChange}
              placeholder="e.g john@email.com"
              className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 flex items-center"
            >
              Phone number <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={15}
              value={personalInfo.phone}
              onChange={onChange}
              placeholder="e.g +1 234 567 890"
              className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700 flex items-center"
          >
            Address <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            maxLength={70}
            value={personalInfo.address}
            onChange={onChange}
            placeholder="e.g 1234 Elm Street, Apt 2B"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out min-h-[100px]"
            required
          />
        </div>

        <Splitter className="my-6" />

        {/* Social Links */}
        <div className="space-y-6">
          {/* LinkedIn & Indeed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["linkedin", "indeed"].map((field) => (
              <div key={field} className="flex flex-col space-y-2">
                <label
                  htmlFor={field}
                  className="text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)} URL
                  <span className="text-gray-400 text-xs ml-2">(optional)</span>
                </label>
                <input
                  id={field}
                  name={field}
                  value={personalInfo[field]}
                  onChange={onChange}
                  placeholder="www."
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
                />
              </div>
            ))}
          </div>

          {/* Behance & Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["behance", "website"].map((field) => (
              <div key={field} className="flex flex-col space-y-2">
                <label
                  htmlFor={field}
                  className="text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)} URL
                  <span className="text-gray-400 text-xs ml-2">(optional)</span>
                </label>
                <input
                  id={field}
                  name={field}
                  value={personalInfo[field]}
                  onChange={onChange}
                  placeholder="www."
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-[#00318B] focus:border-transparent transition-shadow duration-200 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center justify-center gap-2 px-6 h-11 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00318B] min-w-[120px] ${isFormValid
              ? "bg-[#00318B] text-white hover:bg-blue-900 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200"
              }`}
          >
            Next
            <img
              src={isFormValid ? nextIconWhite : nextIconGray}
              alt="Next"
              className="w-4 h-4 transition-opacity duration-200"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
