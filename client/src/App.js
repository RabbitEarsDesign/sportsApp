import { useEffect } from "react";
import axios from "axios";

import "./App.css";

// CSS
import classes from "./app.module.css";

// Get player stats
const getPlayerStats = async () => {
  try {
    const res = await axios.get("/api/stats");
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

function App() {
  useEffect(() => {
    getPlayerStats();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <h1>App</h1>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search NFL player by last name"
          />
        </form>

        <div className={classes.card}></div>
      </div>
    </>
  );
}

export default App;
