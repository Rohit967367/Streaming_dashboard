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
import { OpenDailog } from "../../Store/Add";
import FormDialog from "./Dailog";

const Body = () => {
  const dispatch = useDispatch();
  const [dataDB, setDataDB] = useState([]);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    const connectDB = collection(db, "stream");
    const queryForm = query(
      connectDB,
      orderBy("timestamp", "desc"),
      where("email", "==", userData.email)
    );

    const finalData = onSnapshot(queryForm, (snapshot) => {
      setDataDB(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
  }, []);

  console.log(dataDB);

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
      <Button variant="contained" onClick={openDial}>
        Go Live
      </Button>
      <FormDialog />
    </div>
  );
};

export default Body;
