// features/pollSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poll as PollInterface } from "../interfaces/";




interface PollOption {
  id: string;
  text: string;
  votes: number;
} 

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  active?: boolean; // optional if you want polls to be active/inactive
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
    // Add Poll
    addPoll: (state, action: PayloadAction<Poll>) => {
      state.polls.push(action.payload);
    },

    // Vote Reducer
    vote: (
      state,
      action: PayloadAction<{ pollId: string; optionId: string }>
    ) => {
      const poll = state.polls.find((p) => p.id === action.payload.pollId);
      if (poll) {
        const option = poll.options.find(
          (o) => o.id === action.payload.optionId
        );
        if (option) option.votes += 1; // Increment vote count
      }
    },

    // Delete Poll Reducer
    deletePoll: (state, action: PayloadAction<string>) => {
      state.polls = state.polls.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPoll, vote, deletePoll } = pollSlice.actions;
export default pollSlice.reducer;