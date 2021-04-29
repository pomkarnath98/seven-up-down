import { DICEVALUE, FAILURE, REQUEST, UPDATEDAMOUNT, WIN } from "./actions";

const initState = {
  isLoading: false,
  error: false,
  amount: null,
  diceone: 1,
  dicetwo: 1,
  dicevalue: 2,
  win: null,
};

export default function reducer(state = initState, { type, payload }) {
  // console.log(payload)
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isLoading: false,
        error: false,
        win: null,
      };
    case UPDATEDAMOUNT:
      return {
        ...state,
        isLoading: false,
        error: false,
        amount: payload.amount,
        win: null,
      };
    case DICEVALUE:
      return {
        ...state,
        isLoading: false,
        error: false,
        diceone: payload.diceOne,
        dicetwo: payload.diceTwo,
        dicevalue: payload.total,
      };
    case WIN:
      return {
        ...state,
        win: payload.win,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        win: null,
      };
    default:
      return state;
  }
}
