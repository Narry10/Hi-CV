import React from "react";
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, type RouteProps } from 'react-router-dom'
import RouterPath from './routesContants'
import useIsMobile from '../hooks/useIsMobile'
import Home from '../views/pages/home'
import { UserCredential, onAuthStateChanged } from "firebase/auth";
import { auth } from "configs/firebase";
import { useAppDispatch } from "contexts/hooks";
import { IUser, userFetchMe } from "contexts/user";


export const LayoutLoading = () => (
	<div
		style={{
			width: '100vw',
			height: '100vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		loading
	</div>
)


const getDynamicRouter = (
	deskTop: ReactNode,
	mobile: ReactNode,
	isMobile: boolean
) => <div>{isMobile ? mobile : deskTop}</div>

type CustomRouteProps = RouteProps

export const ManageView = () => {
	const isMobile = useIsMobile()
	const isLogin = true
	const routes: CustomRouteProps[] = useMemo(
		() => [
			{
				path: RouterPath.BASE_URL,
				element: <Home/>,
				loader: undefined,
			},
		
		],
		[isMobile]
	)

	const privateRoutes: CustomRouteProps[] = useMemo(
		() => [
			
		],
		[]
	)

	const getRoutes = (isLogin: boolean) => {
		const r = new Array<CustomRouteProps>()
		r.push(...routes)
		if (isLogin) r.push(...privateRoutes)
		return r.map((p, i) => <Route key={i} {...p} />)
	}
	return (
		<Routes>
			{getRoutes(isLogin)}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}
export default function Router() {
	const [loading, setLoading] = useState(false)
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
				dispatch(userFetchMe(mapUser))
			}else{
				
			}
		})
	}, [])

	if (loading) return <LayoutLoading />
	return <ManageView />
}
