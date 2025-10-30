// import React from "react";
// import { useResumeStore } from "../../store/resumeStore";

// export default function AboutForm() {
//   const { about, setAbout } = useResumeStore((state) => ({
//     about: state.about,
//     setAbout: state.setAbout,
//   }));

//   return (
//     <div className="form-section">
//       <h2>About</h2>
//       <textarea
//         placeholder="Write a short summary about yourself..."
//         value={about}
//         onChange={(e) => setAbout(e.target.value)}
//         rows={6}
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: "6px",
//           border: "1px solid #ccc",
//         }}
//       />
//     </div>
//   );
// }
