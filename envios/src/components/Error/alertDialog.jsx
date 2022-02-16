import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./error.css";

const AlertDialog = ({ title, content }) => {
  //export default function AlertDialog(title,content) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button
        id="openDialogBtn"
        variant="outlined"
        onClick={handleClickOpen}
        className="d-none"
      >
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
          <DialogTitle style={{backgroundColor:"lightblue",color:"#3a649c"}} id="alert-dialog-title" >{title}</DialogTitle>
          <DialogContent >
            <DialogContentText style={{color:"#d45b5b"}} id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
