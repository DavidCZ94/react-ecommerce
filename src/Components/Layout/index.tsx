import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({children} : Props) => {
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout