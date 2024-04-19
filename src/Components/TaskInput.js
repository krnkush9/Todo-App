import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Slices/slice";


function TaskInput() {
// state variable for user input value track
    const [inputItem, setInputItem] = useState("");
    
    // for access addTask method
    const dispatch = useDispatch();

    // track the user input value
    function changeHandler(event) {
        setInputItem(event.target.value);
    }

    // when the user click on the addTask button then 
    // user input value will store in the global store
    function dataSubmit(event) {
        event.preventDefault();
        // if the length of the user value is zero then there will not
        // be store.
        if(inputItem.length == 0) {
            return;
        }

        // it will store the value on the array
        dispatch(addTask(inputItem));

        // after the storing the input value it will show empty
        // value in the input tag
        setInputItem("");
    }

    return (
        <div className="mx-auto mb-3">

            {/* user input form */}
            <form onSubmit={dataSubmit} className="h-fit w-fit flex flex-col
             gap-y-2 items-center lg:flex lg:flex-row lg:gap-x-3 lg:text-lg">
                
                {/* input tag value */}
                <input className="border-2 h-7 lg:h-9
                 border-blue-500 rounded px-2"
                    type='text'
                    placeholder='Add items'
                    name='item'
                    value={inputItem}
                    onChange={changeHandler}
                />

                {/* add task button */}
                <button className="py-1 bg-blue-500 text-white
                 rounded-md px-5"
                >Add Task</button>
            </form>            
        </div>
    )
}

export default TaskInput;