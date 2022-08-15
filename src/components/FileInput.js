import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";

import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

// Controller is used when the thrid party Component Lib Does'nt  provide ref api ,

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icon: {
    marginTop: "16px",
    color: "#888888",
    fontSize: "42px",
  },
}));
function FileInput({ control, name }) {
  const styles = useStyles();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field }) => {
        const { name, onBlur, onChange, ref, value } = field;
        console.log(value);
        return (
          <>
            <Dropzone onDrop={onChange}>
              {({ getInputProps, getRootProps }) => (
                <Paper
                  className={styles.root}
                  variant="outlined"
                  {...getRootProps()}
                >
                  <CloudUpload className={styles.icon} />
                  <input {...getInputProps()} name={name} onBlur={onBlur} />
                  <p>Drag 'n' drop files here, or click to select files</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value?.map((f, index) => (
                <ListItem key={String(index)}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        );
      }}
    ></Controller>
  );
}

export default FileInput;
