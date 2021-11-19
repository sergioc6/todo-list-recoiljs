import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";
import { v4 as uuidv4 } from 'uuid';

const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: uuidv4(),
                text: inputValue,
                isComplete: false
            }
        ]);
        setInputValue('')
    }

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };


    return (
        <div>
            <input type='text' value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default TodoItemCreator