"use client";
import React from "react";
import { useIsLogin } from "hooks/useIsLogin";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "assets/images/icons/google.svg";
import RouterPath from "routes/routesContants";

const ActionButton = () => {
  const isLogin = useIsLogin();

  return (
    <Link
      href={isLogin ? RouterPath.RESUME_BUILDER : RouterPath.BASE_URL}
      className="btn-primary mt-6 w-max flex items-center gap-2 justify-center lg:mt-14"
    >
      {isLogin ? (
        <div className="flex items-center gap-2 w-max">
          <Image className="w-5 h-5 block" alt="Image logo" src={googleIcon} />{" "}
          <span>Login Now</span>
        </div>
      ) : (
        <span>Create Resume</span>
      )}
      <span aria-hidden="true">→</span>
    </Link>
  );
};

export default ActionButton;
