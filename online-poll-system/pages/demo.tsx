// pages/demo.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addPoll, vote } from "../features/pollSlice";
import PollResultsChart from "./components/poll/PollResultsChart";

export default function Demo() {
  const polls = useSelector((state: RootState) => state.polls.polls);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Poll Result Outcome</h1>

      {/* Button to add a poll */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() =>
          dispatch(
            addPoll({
              id: "1",
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
        Add Poll
      </button>

      {polls.map((poll) => (
        <div key={poll.id} className="mt-6 p-4 border rounded">
          <h2 className="font-semibold mb-2">{poll.question}</h2>
          {poll.options.map((opt) => (
            <button
              key={opt.id}
              className="mr-2 mt-2 px-3 py-1 bg-green-500 text-white rounded"
              onClick={() => dispatch(vote({ pollId: poll.id, optionId: opt.id }))}
            >
              {opt.text} ({opt.votes})
            </button>
          ))}

          {/* Chart updates in real-time */}
          <PollResultsChart pollId={poll.id} options={poll.options} />
        </div>
      ))}
    </div>
  );
}