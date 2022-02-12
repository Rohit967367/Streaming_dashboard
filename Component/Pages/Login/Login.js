import React, { Fragment } from "react";
import Classes from "./Login.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

const Login = () => {
  const Signin = (e) => {
    e.preventDefault();

    signIn("google");
  };
  return (
    <Fragment>
      {/* <Head>
        
      </Head> */}
      <div className={Classes.login}>
        <div className={Classes.conatin}>
          <div className={Classes.container}>
            <div className={Classes.head}>
              <div className={Classes.heading}>
                <h1 className={Classes.title}>Sign in</h1>
              </div>
              <div className={Classes.info}>
                <div>
                  <p className={Classes.welcome}>Welcome!</p>
                </div>
                <div className={Classes.short}>
                  <p className={Classes.shortInfo}>
                    Please Log in to access Streaming Dashboard
                  </p>
                </div>
              </div>
              <div className={Classes.google}>
                <div className={Classes.googleButton}>
                  <Button
                    variant="contained"
                    onClick={Signin}
                    style={{ cursor: "pointer" }}
                    startIcon={<GoogleIcon />}
                  >
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </div>
            <div className={Classes.image}>
              <div className={Classes.imageContainer}>
                <Image
                  src="/task.svg"
                  alt="task"
                  className={Classes.task}
                  width={"300px"}
                  height={"300px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
