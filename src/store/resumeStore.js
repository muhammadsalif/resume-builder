import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
  personalInfo: {
    fullName: "Your Full Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    phone: "+1 234 567 890",
    address: "Your Address",
    linkedin: "linkedin.com/in/yourprofile",
    indeed: "indeed.com/yourprofile",
    behance: "behance.net/yourprofile",
    website: "yourwebsite.com",
    photo: null
  },
  contact: {
    email: "your.email@example.com",
    phone: "+1 234 567 890",
    location: "Your City, Country",
    website: "yourwebsite.com"
  },
  social: {
    linkedin: "linkedin.com/in/yourprofile",
    indeed: "indeed.com/in/yourprofile",
    github: "github.com/yourprofile",
  },
  references: [
    {
      name: "Reference Name",
      title: "Professional Title",
      company: "Company Name",
      email: "reference@example.com",
      phone: "+1 234 567 890"
    }
  ],
  about: "Add your professional summary here",
  workExperience: [
    {
      title: "Position Title",
      company: "Company Name",
      location: "Location",
      startDate: "",
      endDate: "",
      current: false,
      responsibilities: "Your responsibilities"
    }
  ],
  education: [
    {
      institution: "Institution Name",
      degree: "Degree Name",
      field: "Field of Study",
      year: "Graduation Year"
    }
  ],
  languages: [
    {
      name: "Language Name",
      level: "Proficiency Level"
    }
  ],
  expertise: [
    {
      skill: "Your Skill",
      description: "Skill Description"
    }
  ]
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
      
      // Work Experience Methods
      addWorkExperience: (experience) =>
        set((state) => ({
          workExperience: [...state.workExperience, experience]
        })),
        
      updateWorkExperience: (index, experience) =>
        set((state) => ({
          workExperience: state.workExperience.map((exp, i) =>
            i === index ? experience : exp
          )
        })),
        
      deleteWorkExperience: (index) =>
        set((state) => ({
          workExperience: state.workExperience.filter((_, i) => i !== index)
        })),
      
      // Education Methods
      addEducation: (education) =>
        set((state) => ({
          education: [...state.education, education]
        })),
        
      updateEducation: (index, education) =>
        set((state) => ({
          education: state.education.map((edu, i) =>
            i === index ? education : edu
          )
        })),
        
      deleteEducation: (index) =>
        set((state) => ({
          education: state.education.filter((_, i) => i !== index)
        })),
      
      // Language Methods
      addLanguage: (language) =>
        set((state) => ({
          languages: [...state.languages, language]
        })),
        
      updateLanguage: (index, language) =>
        set((state) => ({
          languages: state.languages.map((lang, i) =>
            i === index ? language : lang
          )
        })),
        
      deleteLanguage: (index) =>
        set((state) => ({
          languages: state.languages.filter((_, i) => i !== index)
        })),
      
      // Expertise Methods
      addExpertise: (expertise) =>
        set((state) => ({
          expertise: [...state.expertise, expertise]
        })),
        
      updateExpertise: (index, expertise) =>
        set((state) => ({
          expertise: state.expertise.map((exp, i) =>
            i === index ? expertise : exp
          )
        })),
        
      deleteExpertise: (index) =>
        set((state) => ({
          expertise: state.expertise.filter((_, i) => i !== index)
        })),
      
      reset: () => set(initialState)
    }),
    {
      name: 'resume-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);