import RollDice from "./RollDice";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchamount } from "../Redux/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 80,
    width: 155,
    textAlign: "center",
    backgroundColor: "rgba(123,234,093,0.1)",
  },
  sevenupdown: {
    color: theme.palette.text.secondary,
    paddingTop: "25px",
    fontSize: "20px",
  },
  root: {
    minWidth: 275,
    backgroundColor: "rgb(255,100,50)",
    height: "100vh",
  },
  dice: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "30px",
    color: "rgba(21,0,210,0.6)",
    "& > :last-child": {
      width: "40px",
      border: "1px solid rgb(0,255,0)",
      color: "rgb(0,255,0)",
      textAlign: "center",
      borderRadius: "50%",
      padding: "5px 10px 5px 5px",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  amountbox: {
    width: "170px",
    margin: "auto",
  },
}));

const SevenUpDown = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storedata = useSelector((state) => state);
  const [amt, setAmt] = useState(5000);
  const [diceoption, setDiceOption] = useState(null);
  const [amountoption, setAmountOption] = useState(null);

  useEffect(() => {
    dispatch(fetchamount());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAmt(storedata.amount);
  }, [storedata]);

  useEffect(() => {
    const ele = document.getElementById("displayresult");
    if (storedata.win !== null) {
      ele.style.display = "inline";
      storedata.win === true
        ? (ele.textContent = "You Won!!!")
        : (ele.textContent = "You Lost!!!");
      setTimeout(() => {
        ele.style.display = "none";
      }, 1000);
    }
  }, [storedata.win]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={0}>
              <Button onClick={() => setDiceOption("7DOWN")}>
                <Grid>
                  <Paper className={classes.paper}>
                    <Typography className={classes.sevenupdown}>
                      7DOWN
                    </Typography>
                  </Paper>
                </Grid>
              </Button>
              <Button onClick={() => setDiceOption("7")}>
                <Grid>
                  <Paper className={classes.paper}>
                    <Typography className={classes.sevenupdown}>7</Typography>
                  </Paper>
                </Grid>
              </Button>
              <Button onClick={() => setDiceOption("7UP")}>
                <Grid>
                  <Paper className={classes.paper}>
                    <Typography className={classes.sevenupdown}>7UP</Typography>
                  </Paper>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <div className={classes.dice}>
        <div>
          <div>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <b>{amt}</b>
        </div>
        <RollDice {...{ diceoption, amountoption }} />
        <div>{storedata.dicevalue}</div>
      </div>
      <div className={classes.amountbox}>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={() => setAmountOption("100")}
        >
          100
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={() => setAmountOption("200")}
        >
          200
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={() => setAmountOption("500")}
        >
          500
        </Fab>
      </div>
      <b id="displayresult" />
    </Card>
  );
};

export default SevenUpDown;
