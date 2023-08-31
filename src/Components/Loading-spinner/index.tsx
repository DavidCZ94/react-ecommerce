import React, { useContext } from 'react'
import './index.css'
import { LoadingSpinnerContext } from '../../Contexts/loadingSpinnerContext';

type Props = {}

const LoadingSpinner: React.FC<Props> = () => {
    const loadingSpinnerContext = useContext(LoadingSpinnerContext);

    return (
        <>
            {loadingSpinnerContext.isLoading && 
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            }
        </>
    )
}

export default LoadingSpinner