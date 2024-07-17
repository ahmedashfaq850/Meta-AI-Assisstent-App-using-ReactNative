import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ChatState {
  chats: string[];
  currentChatId: string;
}

const initialState: ChatState = {
  chats: [],
  currentChatId: '',
};

export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearAllChats: state => {
      state.chats = [];
    },
  },
});

export const selectChats = (state: {chat: ChatState}) => state.chat.chats;
export const selectCurrentChatId = (state: {chat: ChatState}) =>
  state.chat.currentChatId;

export const {clearAllChats} = ChatSlice.actions;
export default ChatSlice.reducer;
