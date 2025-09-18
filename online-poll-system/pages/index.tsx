// pages/index.tsx
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addPoll, vote } from "@/features/pollSlice";
import Header from "./components/layout/Header";

const Home: React.FC = () => {
  const polls = useSelector((state: RootState) => state.polls.polls);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen">
  <Header />

  <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
    {/* Hero Section */}
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Get real-time feedback.</h1>
      <p className="mt-4 text-xl">
        Create engaging polls online and share them instantly with your audience!
      </p>

      {/*  Button Group (side by side) */}
      <div className="flex gap-4 justify-center mt-6">
        <Link href="/create">
          <button className="px-6 py-3 bg-[#f8ee2f] text-blue-500 rounded-full font-semibold hover:bg-[#E2D609] transition">
            Create New Poll
          </button>
        </Link>

        <button
          className="px-6 py-3 bg-[#f8ee2f] text-blue-500 rounded-full font-semibold hover:bg-[#E2D609] transition"
          onClick={() =>
            dispatch(
              addPoll({
                id: Date.now().toString(),
                question: "Who will win AFCON 2025?",
                options: [
                  { id: "a", text: "Ghana", votes: 0 },
                  { id: "b", text: "Nigeria", votes: 0 },
                  { id: "c", text: "Senegal", votes: 0 },
                ],
              })
            )
          }
        >
          Add Demo Poll
        </button>
      </div>
    </div>

    {/* Render Polls */}
    <div className="mt-8 w-full max-w-2xl space-y-6">
      {polls.map((poll) => (
        <div
          key={poll.id}
          className="p-6 bg-white text-black rounded-lg shadow-lg"
        >
          <h2 className="font-semibold text-lg">{poll.question}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {poll.options.map((opt) => (
              <button
                key={opt.id}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() =>
                  dispatch(vote({ pollId: poll.id, optionId: opt.id }))
                }
              >
                {opt.text} ({opt.votes})
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  </main>
</div>
  );
};

export default Home;
