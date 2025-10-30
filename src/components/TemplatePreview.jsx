import React from "react";
import "./templatePreview.css";

/* This is a static visual placeholder matching your Figma preview.
   Later we will read values from store and render real data. */
export default function TemplatePreview() {
  return (
    <div className="template-preview">
      <div className="left-rail">
        <div className="avatar" />
        <div className="rail-list">
          <div className="rail-item">Contact Me</div>
          <div className="rail-item">References</div>
          <div className="rail-item">Social link</div>
        </div>
      </div>

      <div className="right-sheet">
        <div className="sheet-head">
          <div className="name">Bob Brains</div>
          <div className="role">UX/UI Designer</div>
        </div>

        <div className="sheet-section">
          <div className="section-title">About me</div>
          <div className="section-body">Short bio will appear here.</div>
        </div>

        <div className="sheet-section">
          <div className="section-title">Work Experience</div>
          <div className="section-body">Job 1 — Company — dates</div>
        </div>
      </div>
    </div>
  );
}

