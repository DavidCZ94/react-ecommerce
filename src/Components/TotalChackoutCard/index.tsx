type Props = {
    title: string,
    totalItems: number | string,
    totalAmount: number | string
}

const HorizontalCard: React.FC<Props> = ({title, totalItems, totalAmount}) => {
    
    return (
        <div className="flex items-center shadow-md hover:shadow-xl my-4 rounded-lg">
            <div className='w-5/12 h-20 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>{title}</p>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>{totalItems}</p>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>${totalAmount}</p>
            </div>
        </div>
    )
}

export default HorizontalCard