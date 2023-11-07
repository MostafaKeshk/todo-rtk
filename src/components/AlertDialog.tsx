import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type IProps = {
  open: any;
  handleClose: any;
  onAgree: any;
  title: any;
};

const AlertDialog: React.FC<IProps> = ({
  open,
  handleClose,
  onAgree,
  title,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={onAgree}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
