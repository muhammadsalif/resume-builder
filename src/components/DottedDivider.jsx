export default function DottedDivider() {
  return (
    <div
      className="w-[86px] sm:w-[80%] border-t border-gray-400 border-dashed opacity-80 mx-auto my-3"
      style={{
        borderWidth: "0.43px",
        borderStyle: "dashed",
        borderColor: "rgba(255, 255, 255, 0.8)", // light white line for dark bg
        borderImage: "none",
        borderSpacing: 0,
        borderTopStyle: "dashed",
        // Custom dash pattern to match Figma
        borderTop: "0.43px dashed rgba(255,255,255,0.8)",
      }}
    ></div>
  );
}
