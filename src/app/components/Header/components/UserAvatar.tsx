"use client";
import React from "react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import Link from "next/link";
import { Avatar } from "@mui/joy";
import { useAppSelector } from "../../../../contexts/hooks";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import baseAvatarSrc from 'assets/images/backgrouds/Error TV 1.svg';  
import Image from "next/image";
const UserAvatar = () => {
  const isLogin = useIsLogin();
  const userDetail = useAppSelector((s) => s.user.data);
  const userLoading = useAppSelector((s) => s.user.loading);

  return (
    <Link href={isLogin ? "/profile" : "/signin"}>
      {isLogin ? (
         <Avatar  variant="soft"  alt={`${userDetail?.email?.toUpperCase()}`} src={baseAvatarSrc}>
         </Avatar>
      ) : (
        <Person2RoundedIcon
          sx={{
            color: "rgb(75 85 99 / var(--tw-text-opacity))",
          }}
        />
      )}
    </Link>
  );
};

export default UserAvatar;
