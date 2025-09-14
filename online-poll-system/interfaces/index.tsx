export interface ButtonProps {
  title: string
  action?: () => void
}

// interface/index.tsx
export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

export interface PollResultsChartProps {
  pollId: string;
  options: PollOption[]; // ✅ required
}