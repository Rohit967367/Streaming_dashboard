import React, { useEffect } from "react";
import Head from "./Head";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { getUser } from "../../Store/user";
import Body from "./Body";

const Home = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      dispatch(
        getUser({
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
        })
      );
    }
  }, [session]);
  return (
    <>
      <Head />
      <Body />
    </>
  );
};

export default Home;
