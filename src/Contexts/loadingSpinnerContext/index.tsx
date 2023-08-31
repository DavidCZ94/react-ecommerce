import { ReactNode, createContext, useState } from 'react'

type Props = {
    children: ReactNode,
}

type LoadingSpinnerContextType = {
    isLoading: boolean,
    setIsLoading: Function
}

export const LoadingSpinnerContext = createContext<LoadingSpinnerContextType>({} as LoadingSpinnerContextType)

const LoadingSpinnerProvider: React.FC<Props> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingSpinnerContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            {children}
        </LoadingSpinnerContext.Provider>
    )
}

export default LoadingSpinnerProvider;