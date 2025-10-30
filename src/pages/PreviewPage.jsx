import { Link } from "react-router-dom";

export default function PreviewPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Final Preview (placeholder)</h1>
      <p className="mb-4">This is the final resume preview page placeholder.</p>
      <Link to="/builder/personal-info" className="text-blue-600">Back to builder</Link>
    </div>
  );
}
