import { useState } from "react"

export function useThrottle(func: any, delay: any) {
  const [flag, setFlag] = useState(true)

  return function (this: any) {
    let args = arguments,
      context = this
    if (flag) {
      func.apply(context, args)
      setTimeout(() => setFlag(true), delay)
      setFlag(false)
    }
  }
}
