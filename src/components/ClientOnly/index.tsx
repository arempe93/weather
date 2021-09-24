import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const ClientOnly = ({ children }: PropsWithChildren<{}>) => <>{children}</>

export default dynamic(() => Promise.resolve(ClientOnly), { ssr: false })
