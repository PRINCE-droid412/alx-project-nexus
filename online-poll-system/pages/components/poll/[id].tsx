// pages/poll/[id].tsx
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { useState } from "react";

export default function PollDetail() {
  const router = useRouter();
  const { id } = router.query;

  const poll = useSelector((state: RootState) =>
    state.polls.find((p) => p.id === id)
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

      <ul className="mb-6 list-disc pl-5">
        {poll.options.map((opt) => (
          <li key={opt.id}>{opt.text}</li>
        ))}
      </ul>

      {/* Sharing options */}
      <div className="space-y-3">
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
