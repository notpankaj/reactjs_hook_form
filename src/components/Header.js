import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { fontFamily, textAlign } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));
function Header() {
  const styles = useStyles();
  return (
    <Typography component="h1" className={styles.root}>
      The Ultimate Form Challange
    </Typography>
  );
}

export default Header;
