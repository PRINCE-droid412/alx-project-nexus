// pages/index.tsx
import Link from "next/link";
import Header from "./components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Get real-time feedback.
          </h1>
          <p className="mt-4 text-xl text-white">
            Create engaging polls online and share them instantly with your audience!
          </p>

          {/* ✅ Wrap button with Link */}
          <Link href="/create">
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
              Create New Poll
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
