import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  showChoice: false,
  playerSelection:0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playersChoice: (state,action) => {
     
      state.showChoice = true;
      state.playerSelection=action.payload;
      // console.log(action.payload);
    },
    restartGame: (state) => {
      state.showChoice = false;
    },
    scoreUpdate: (state,action) => {
      if(action.payload == "win"){
        state.value+=1;
      }else if(action.payload =='lose'){
        if(state.value != 0)
        state.value -=1;
      }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { playersChoice, restartGame,scoreUpdate } = gameSlice.actions

export default gameSlice.reducer