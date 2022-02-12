import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../DB/DataBase";
import { useDispatch, useSelector } from "react-redux";
import { getStream } from "../../Store/Link";
import {
  UpdateButton,
  UpdateButtonFalse,
  UpdateButtonTrue,
} from "../../Store/Add";

export const NoteFor = () => {
  return (
    <>
      <h3>Copy and paste these setting into your streaming software</h3>
      <h5>
        This may referred to as 'URL' or "Address" in your streaming software.
      </h5>
    </>
  );
};

export const URLForm = () => {
  const link = useSelector((state) => state.link);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Copy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="url"
            name="url"
            label="Stream URL"
            fullWidth
            variant="standard"
            value={link.streamLink}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();

              navigator.clipboard.writeText(link.streamLink);
              alert("Stream URL Copied Successfully!");
            }}
          >
            Copy
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="key"
            name="key"
            label="Stream Key"
            fullWidth
            variant="standard"
            value={link.streamKey}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={() => {
              navigator.clipboard.writeText(link.streamKey);
              alert("Stream Key Copied Successfully!");
            }}
          >
            copy
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export const SendURL = () => {
  const data = useSelector((state) => state.user);
  const link = useSelector((state) => state.link);
  const update = useSelector((state) => state.add);
  const dispatch = useDispatch();
  // dispatch(
  //   getStream({
  //     streamURL: "https://live.videosdk.live/live/12345-1234-123456-12345/",
  //   })
  // );

  console.log(link);

  let disable = link.userSend;

  const sendData = async (e) => {
    e.preventDefault();

    const connectDB = collection(db, "stream");

    await addDoc(connectDB, {
      email: data.email,
      name: data.name,
      link: link.streamURL,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Send URL
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="url"
            name="url"
            label="Stream URL"
            fullWidth
            variant="standard"
            value={link.streamURL}
          />
        </Grid>
        <Grid item xs={6}>
          {!disable ? (
            <Button variant="contained" onClick={sendData}>
              Send
            </Button>
          ) : (
            <Button disabled>Sended</Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
