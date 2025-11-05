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