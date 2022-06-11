import React, { createContext, ReactComponentElement, useEffect, useRef } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface AxiosContextProviderProps {
  config: AxiosRequestConfig<any>
  requestInterceptors?: any[]
  responseInterceptors?: any[]
  children: ReactComponentElement<any>
}

export const AxiosContext = createContext({} as AxiosInstance)
export const AxiosInstanceProvider = ({
	config = {},
	requestInterceptors = [],
	responseInterceptors = [],
	children
}: AxiosContextProviderProps) => {
	const instanceRef = useRef(axios.create(config))

	useEffect(() => {
		requestInterceptors.forEach((interceptor: any) => {
			instanceRef.current.interceptors.request.use(
				interceptor
			)
		})
		responseInterceptors.forEach((interceptor: any) => {
			instanceRef.current.interceptors.response.use(
				interceptor
			)
		})
	}, [])

	return (
		<AxiosContext.Provider value={instanceRef.current}>
			{children}
		</AxiosContext.Provider>
	)
}
