import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
  personalInfo: {
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
  },
  about: "",
  workExperience: [],
  references: [
    // {
    //   name: "Darwin B. Magana",
    //   designation: "Manager",
    //   phone: "+1 234 567 8901",
    //   email: "darwin.magana@example.com"
    // },
    // {
    //   name: "Robert J. Belvin",
    //   designation: "Manager",
    //   phone: "+1 987 654 3210",
    //   email: "robert.belvin@example.com"
    // }
  ],
  education: [],
  languages: [],
  expertise: []
};

export const useResumeStore = create()(
  persist(
    (set) => ({
      ...initialState,

      setPersonalInfo: (data) =>
        set((state) => ({
          personalInfo: {
            ...state.personalInfo,
            ...data
          }
        })),

      setPhoto: (photoUrl) =>
        set((state) => ({
          personalInfo: {
            ...state.personalInfo,
            photo: photoUrl
          }
        })),

      setAbout: (text) => set({ about: text }),

      reset: () => set(initialState)
    }),
    {
      name: 'resume-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);