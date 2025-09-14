// features/pollSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poll } from "../interfaces/";


interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

interface PollState {
  polls: Poll[];
}

const initialState: PollState = {
  polls: [],
};

const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    addPoll: (state, action: PayloadAction<Poll>) => {
      state.polls.push(action.payload);
    },
    vote: (state, action: PayloadAction<{ pollId: string; optionId: string }>) => {
      const poll = state.polls.find((p) => p.id === action.payload.pollId);
      if (poll) {
        const option = poll.options.find((o) => o.id === action.payload.optionId);
        if (option) option.votes += 1;
      }
    },
  },
});

export const { addPoll, vote } = pollSlice.actions;
export default pollSlice.reducer;
