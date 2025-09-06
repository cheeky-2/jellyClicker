import { configureStore, createSlice } from "@reduxjs/toolkit";


const gameSlice = createSlice({
  name: "game",
  initialState: {
    score: 0,         // 현재 점수
    clickPower: 1,      // 클릭할 때 오르는 점수
    autoPower: 0,       // 1초에 자동으로 오르는 점수
    purchasedMenus: [], // 이미 산 메뉴 이름들
  },
  reducers: {
    addScore: (state) => {
      state.score += state.clickPower;
    },

    buyMenu: (state, action) => {
      const { name, cost, effect } = action.payload; // ← 이게 payload 구조분해
      const canBuy = state.score >= cost;
      const notPurchased = !state.purchasedMenus.includes(name);

      if (canBuy && notPurchased) {
        state.score -= cost;
        state.purchasedMenus.push(name);

        if (effect?.clickPower) {
          state.clickPower *= effect.clickPower;
        }
        if (typeof effect?.autoPower === "number") {
          state.autoPower += effect.autoPower;
        }
      }
    },

    tick: (state) => {
      state.score += state.autoPower;
    },
  },
});

export const { addScore, buyMenu, tick } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});
