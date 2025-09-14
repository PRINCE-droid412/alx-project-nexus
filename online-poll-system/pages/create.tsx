// pages/create.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPoll } from "@/features/pollSlice";
import { useRouter } from "next/router";

export default function CreatePoll() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);

  // Add new option input
  const addOptionField = () => {
    setOptions([...options, ""]);
  };

  // Update option text
  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  // Remove an option by index
    const removeOption = (index: number) => {
      // Prevent deleting if only 2 options left
      if (options.length <= 2) return;
      setOptions(options.filter((_, idx) => idx !== index));
    };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pollId = Date.now().toString(); // simple unique id

    
    dispatch(
      addPoll({
        id: pollId,
        question,
        options: options
          .filter((opt) => opt.trim() !== "")
          .map((opt, idx) => ({ id: `opt${idx}`, text: opt, votes: 0 })),
      })
    );

    router.push("/demo"); // redirect to demo page to view results
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Poll</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Poll Question */}
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />

        {/* Poll Options */}
        {options.map((opt, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => updateOption(idx, e.target.value)}
              className="flex-1 border px-3 py-2 rounded"
              required
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(idx)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addOptionField}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          + Add Option
        </button>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Save Poll
        </button>
      </form>
    </div>
  );
}
