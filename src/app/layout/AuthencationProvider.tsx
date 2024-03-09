"use client";
import React, { useEffect } from "react";
import { Provider } from 'react-redux'
import { useAppDispatch } from "../../contexts/hooks";
import { auth } from "../../configs/firebase";
import { IUser, userFetchMe } from "../../contexts/user";


export default function AuthProviders({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch()

	useEffect(() => {
		auth.onAuthStateChanged(user=>{
			if(user){
				const mapUser:IUser = {
					displayName:user.displayName,
					email:user.email,
					photoURL:user.photoURL,
					providerId:user.providerId,
					uid:user.uid
				}
                console.log("Hi user",user);
                
				dispatch(userFetchMe(mapUser))
			}else{
				console.log("can login");
                
			}
		})
	}, [])
	return <div>{children}</div>
}
