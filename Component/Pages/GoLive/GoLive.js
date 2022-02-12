import { Box, Button, Container, CssBaseline } from "@mui/material";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../DB/DataBase";
import Play from "./Play";

const GoLive = () => {
  const [firebase, setFirebaseData] = useState([]);
  // const userData = useSelector((state) => state.user);

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      var userData = session.user;
    }

    console.log(userData.email);

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
        }))
      );
    });
    return finalData;
  }, []);
  console.log(firebase);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "white", height: "100vh", mx: "auto" }}>
          <Link href={"/"}>
            <Button>Back</Button>
          </Link>
          {firebase.map((data) => (
            <Play
              key={data.id}
              name={data.name}
              email={data.email}
              id={data.id}
              link={data.link}
              timestamp={data.timestamp}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default GoLive;
