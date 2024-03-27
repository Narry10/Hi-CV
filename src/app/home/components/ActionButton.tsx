"use client";
import React, { useCallback, useState } from "react";
import { useIsLogin } from "hooks/useIsLogin";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "assets/images/icons/google.svg";
import RouterPath from "routes/routesContants";
import { useAppDispatch } from "../../../contexts/hooks";
import { authGoogleSignIn } from "../../../contexts/auth";

const ActionButton = () => {
  const isLogin = useIsLogin();
  const dispatch = useAppDispatch();
  const handleLoginWithGoogle = useCallback(()=>{    
    dispatch(authGoogleSignIn());
  },[])
  return (
    <Link
      href={isLogin ? RouterPath.RESUME_BUILDER : RouterPath.BASE_URL}
      className="btn-primary mt-6 w-max flex items-center gap-2 justify-center lg:mt-14"
    >
      {!isLogin ? (
        <button className="flex items-center gap-2 w-max" onClick={handleLoginWithGoogle}>
          <Image className="w-5 h-5 block" alt="Image logo" src={googleIcon} />{" "}
          <span>Login Now</span>
        </button>
      ) : (
        <Link href={RouterPath.MY_CV}>Create Resume</Link>
      )}
      <span aria-hidden="true">→</span>
    </Link>
  );
};

export default ActionButton;
