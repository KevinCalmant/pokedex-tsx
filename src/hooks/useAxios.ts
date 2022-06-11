import { useContext, useEffect, useMemo, useRef, useState } from "react"
import axios, { Method } from "axios"
import { AxiosContext } from "../contexts/AxiosContext";

export const useAxios = <T = any>(url: string, method: Method | string, payload?: any) => {
  const [data, setData] = useState<null | T>(null)
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)

  const contextInstance = useContext(AxiosContext)

  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);

  const controllerRef = useRef(new AbortController())

  const cancel = () => {
    controllerRef.current.abort();
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await instance.request<T>({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url,
        })
        setData(response.data)
      } catch (exception: any) {
        setError(exception.message)
      } finally {
        setLoaded(true)
      }
    })();
  }, [])

  return { cancel, data, error, loaded }
}
