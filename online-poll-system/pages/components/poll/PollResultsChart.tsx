// components/poll/PollResultsChart.tsx
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface PollResultsChartProps {
  pollId: string;
}

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface PollResultsChartProps {
  options: PollOption[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PollResultsChart({ pollId }: PollResultsChartProps) {
    // Select poll by ID from Redux store
    const poll = useSelector((state:RootState) =>
    state.polls.polls.find((p) => p.id === pollId)
    );

    if (!poll) return <p>No poll found</p>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Bar Chart */}
      <div className="w-full h-64 lg:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={poll.options}>
            <XAxis dataKey="text" />
            <YAxis />
            <Bar dataKey="votes" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-64 lg:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={poll.options}
              dataKey="votes"
              nameKey="text"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {poll.options.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
