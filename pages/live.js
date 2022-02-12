import { getSession } from "next-auth/react";
import React from "react";
import GoLive from "../Component/Pages/GoLive/GoLive";

export default function live() {
  return (
    <div>
      <GoLive />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
