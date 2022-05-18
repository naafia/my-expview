import React from "react";

import classes from "./Layout.module.css";
import Button from "../UI/Button";

function Layout() {
  return (
    <div className={classes.layout}>
      <section className={classes["logo-cont"]}>
        <div className={classes.text}>ExpView</div>
        <div className={classes.trapezium}></div>
      </section>

      <section className={classes["btn-cont"]}>
        <div className={classes["btn-single"]}>
          <Button>Log In</Button>
        </div>
        <div>
          <Button>Sign Up</Button>
        </div>
      </section>
    </div>
  );
}

export default Layout;
