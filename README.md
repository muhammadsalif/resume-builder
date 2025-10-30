src/
 ┣ assets/               # images, icons
 ┣ components/           # reusable components
 ┃ ┣ layout/
 ┃ ┣ ui/
 ┣ features/             # each section
 ┃ ┣ personal-info/
 ┃ ┣ about/
 ┃ ┣ education/
 ┃ ┣ work-experience/
 ┃ ┣ expertise/
 ┃ ┣ language/
 ┃ ┗ references/
 ┣ pages/
 ┃ ┣ ResumeBuilder.jsx
 ┃ ┣ PreviewPage.jsx
 ┣ store/
 ┃ ┗ resumeStore.js
 ┣ hooks/
 ┣ utils/
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css


mkdir -p src/{assets,components/{layout,ui},features/{personal-info,about,education,work-experience,expertise,language,references},pages,store,hooks,utils} && touch src/{App.jsx,main.jsx,index.css,pages/{ResumeBuilder.jsx,PreviewPage.jsx},store/resumeStore.js}
