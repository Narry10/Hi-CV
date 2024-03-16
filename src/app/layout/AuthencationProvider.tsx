"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useAppDispatch } from "../../contexts/hooks";
import { auth } from "../../configs/firebase";
import { IUser, userFetchMe, userLogOut } from "../../contexts/user";
import { authOut } from "../../contexts/auth";

export default function AuthProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const mapUser: IUser = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        };
        dispatch(userFetchMe(mapUser));
      } else {
        dispatch(userLogOut());
        dispatch(authOut());
      }
    });
  }, []);
  return <div>{children}</div>;
}
