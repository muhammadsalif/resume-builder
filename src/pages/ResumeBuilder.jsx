import { Leftbar } from "../components/layout/Leftbar";
import { Main } from "../components/layout/Main";
import { Rightbar } from "../components/layout/Rightbar";
import { Header } from "../components/layout/Header";

export default function ResumeBuilder() {
  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <Header />
      </header>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-4 p-4 flex-1">
        {/* Left Sidebar */}
        <aside className="hidden md:flex bg-white border border-gray-200 rounded-xl flex-col p-6 shadow-sm">
          <Leftbar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col p-6 shadow-sm">
          <Main />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:flex bg-white border border-gray-200 rounded-xl flex-col shadow-sm">
          <Rightbar />
        </aside>
      </div>
    </div>
  );
}
