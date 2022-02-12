import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../DB/DataBase";
import ReactPlayer from "react-player";

const Play = (props) => {
  const { name, email, id, timestamp, link } = props;
  const [urlValue, setUrlValue] = useState("");
  const [player, setPlayer] = useState(false);

  const deleteURL = async (e, id) => {
    setPlayer(false);
    e.stopPropagation();
    const getID = doc(db, "stream", id);

    await deleteDoc(getID);
  };
  const OnPlay = () => {
    setPlayer(true);
    setUrlValue(link);
  };
  console.log(urlValue);
  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <h1>{name}</h1>
      {player ? (
        <ReactPlayer controls url={urlValue} />
      ) : (
        <Button variant="contained" onClick={() => OnPlay()}>
          Play
        </Button>
      )}
      <Button onClick={(e) => deleteURL(e, id)}>Close Stream</Button>
    </div>
  );
};

export default Play;
