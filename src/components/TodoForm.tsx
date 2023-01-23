import { useState } from 'react'

interface Props {
    handleSubmit: (value: string) => void
}
const TodoForm:React.FC<Props> = ({handleSubmit}) => {

    const [inputValue, setInputValue] = useState<any>('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(inputValue)
            setInputValue('')
        } }>
            <input type='text' value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className='todo' />
        </form>
    )
}

export default TodoForm