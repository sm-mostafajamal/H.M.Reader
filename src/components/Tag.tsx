import { ReactNode } from "react"

const Tag = ({children} : {children: ReactNode} ) => {
  return (
    <span className='flex items-center bg-indigo-500/90 p-2 rounded text-xs font-bold font-mono mr-2'>{children}</span>
  )
}

export default Tag