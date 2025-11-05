import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./templatePreview.css";

export default function TemplatePreview() {
  return (
    <div className="flex justify-center p-3">
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 shadow-lg bg-white overflow-hidden"
        style={{ borderRadius: "8px" }}
      >
        {/* ===== LEFT PANEL ===== */}
        <LeftPanel />

        {/* ===== RIGHT PANEL ===== */}
        <RightPanel />

      </div>
    </div>
  );
}
