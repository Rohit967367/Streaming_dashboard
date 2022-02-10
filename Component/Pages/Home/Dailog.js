import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { OpenDailog } from "../../Store/Add";

export default function FormDialog() {
  const open = useSelector((state) => state.add);
  console.log(open);
  const dispatch = useDispatch();
  const [hide, setHide] = React.useState(true);

  const handleClose = () => {
    dispatch(OpenDailog());
  };

  return (
    <div>
      <Dialog open={open.openDial || false}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Note setHide={setHide} />
        </DialogContent>
        {hide && (
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
