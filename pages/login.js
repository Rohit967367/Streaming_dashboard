import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Login from "../Component/Pages/Login/Login";
import { useSession } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.replace("/");
      setLoading(false);
    }
  }, [session, loading]);

  return <Login />;
};

export default login;
