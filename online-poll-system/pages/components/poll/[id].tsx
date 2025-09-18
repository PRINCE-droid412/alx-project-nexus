import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { vote } from "@/features/pollSlice"; 
import { useState } from "react";
import PollResultsChart from "../../components/poll/PollResultsChart";  

export default function PollDetail() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  // Find poll in state
  const poll = useSelector((state: RootState) =>
    state.polls.polls.find((p) => p.id === id)
  );

  const [copied, setCopied] = useState(false);

  if (!poll) {
    return <div className="p-6">Poll not found.</div>;
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/poll/${poll.id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{poll.question}</h1>

      {/* Poll options with voting */}
      <div className="mb-6">
        {poll.options.map((opt) => (
          <button
            key={opt.id}
            disabled={!poll.active}
            onClick={() =>
              dispatch(vote({ pollId: poll.id, optionId: opt.id }))
            }
            className={`mr-2 mt-2 px-3 py-1 rounded ${
              poll.active
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            {opt.text} ({opt.votes})
          </button>
        ))}
      </div>

      {/* Real-time chart */}
      <PollResultsChart pollId={poll.id} />

      {/* Sharing options */}
      <div className="space-y-3 mt-6">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>

        <div className="flex gap-3">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              shareUrl
            )}&text=${encodeURIComponent(poll.question)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Share on Twitter
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              poll.question + " " + shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
