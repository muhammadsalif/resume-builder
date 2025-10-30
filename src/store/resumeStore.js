import { create } from "zustand";

export const useResumeStore = create((set) => ({
  personalInfo: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    photo: ""
  },
  about: "",
  education: [],
  workExperience: [],
  expertise: [],
  languages: [],
  references: [],
  setPersonalInfo: (payload) => set({ personalInfo: { ...payload } }),
  setAbout: (text) => set({ about: text }),
  setEducation: (arr) => set({ education: arr }),
  setWorkExperience: (arr) => set({ workExperience: arr }),
  // add more setters as needed
}));
