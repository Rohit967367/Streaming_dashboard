import { getSession } from "next-auth/react";
import Home from "../Component/Pages/Home/Home";

export default function HomePage() {
  return <Home />;
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
