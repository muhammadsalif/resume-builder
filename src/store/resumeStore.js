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
  areasOfExpertiseDescription: "Expert in crafting user-centered digital experiences that combine aesthetics with functionality. Skilled in UX/UI design, prototyping, and design strategy to deliver impactful and seamless products.",
  workExperience: [
    // {
    //   jobTitle: "UI/UX Designer",
    //   designation: "Manager",
    //   company: "Acme Tech",
    //   from: "2023-01-01",
    //   to: "2024-01-01",
    //   onwards: false
    // }
  ],
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
  languages: []
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

      setReferences: (refs) => set({ references: refs }),

      setWorkExperience: (data) => set({ workExperience: data }),

      setPhoto: (photoUrl) =>
        set((state) => ({
          personalInfo: {
            ...state.personalInfo,
            photo: photoUrl
          }
        })),

      setAbout: (text) => set({ about: text }),

      setAreasOfExpertise: (text) =>
        set((state) => ({
          ...state,
          areasOfExpertiseDescription: text,
        })),

      reset: () => set(initialState)
    }),
    {
      name: 'resume-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);