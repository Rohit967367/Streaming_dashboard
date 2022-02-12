import { Button } from "@mui/material";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../DB/DataBase";
import {
  OpenDailog,
  UpdateButtonFalse,
  UpdateButtonTrue,
} from "../../Store/Add";
import { collectData } from "../../Store/Link";
import FormDialog from "./Dailog";
import Link from "next/link";
import { getData } from "../../Store/get";

const Body = () => {
  const [firebaseData, setFirebaseData] = useState([]);
  const [goLive, setGoLive] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  ////option
  useEffect(() => {
    const connectDB = collection(db, "stream");
    const queryForm = query(
      connectDB,
      orderBy("timestamp", "desc"),
      where("email", "==", userData.email)
    );

    const finalData = onSnapshot(queryForm, (snapshot) => {
      setFirebaseData(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
          name: userData.name,
        }))
      );
    });
    return finalData;
  }, [userData]);

  useEffect(() => {
    if (firebaseData[0]) {
      setGoLive(true);
      dispatch(getData(firebaseData[0]));
    } else {
      setGoLive(false);
    }
  }, [firebaseData]);

  const openDial = () => {
    dispatch(OpenDailog());
  };
  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        justifyItems: "center",
        height: "calc(100vh - 50px)",
      }}
    >
      {goLive ? (
        <Link href={"/live"}>
          <Button variant="contained" color="success">
            Go Live
          </Button>
        </Link>
      ) : (
        <Button variant="contained" onClick={openDial}>
          Start Stream
        </Button>
      )}
      <FormDialog />
    </div>
  );
};

export default Body;
