"use client";
import React, { useEffect } from "react";
import { Provider } from 'react-redux'
import store from "./store";
import AuthProviders from "../app/layout/AuthencationProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>
		<AuthProviders>
			{children}
		</AuthProviders>
	</Provider>
}
