import axios from "axios";

export const REQUEST = "REQUEST";
export const UPDATEDAMOUNT = "UPDATEDAMOUNT";
export const DICEVALUE = "DICEVALUE";
export const WIN = "WIN";
export const FAILURE = "FAILURE";

const request = (payload) => ({
  type: REQUEST,
  payload,
});

const updatedAmount = (payload) => ({
  type: UPDATEDAMOUNT,
  payload,
});

const diceValue = (payload) => ({
  type: DICEVALUE,
  payload,
});

const win = (payload) => ({
  type: WIN,
  payload,
});

const failure = (payload) => ({
  type: FAILURE,
  payload,
});

export const fetchamount = (payload) => async (dispatch) => {
  dispatch(request());
  try {
    const { data } = await axios.get("http://localhost:9000/api/amount");
    dispatch(updatedAmount(data));
  } catch (err) {
    dispatch(failure(err));
  }
};

export const fetchDiceValue = (payload) => async (dispatch) => {
  dispatch(request());
  try {
    const { data } = await axios.post("http://localhost:9000/api/dicevalue", {
      diceoption: payload.diceoption,
      amountoption: payload.amountoption,
    });
    dispatch(diceValue(data));
  } catch (err) {
    dispatch(failure(err));
  }
};

export const fetchWinResult = (payload) => async (dispatch) => {
  dispatch(request());
  try {
    const { data } = await axios.get("http://localhost:9000/api/winner");
    dispatch(win(data));
  } catch (err) {
    dispatch(failure(err));
  }
};
