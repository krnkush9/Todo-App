import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../Redux/Slices/slice";

function TaskList() {

    // for access the slice state (array)
    const list = useSelector((state) => state.list);

    // for access the slice mathods
    const dispatch = useDispatch();

    // for tracking the view button
    const [flag, setFlag] = useState(false);

    // method for the delete task:- when the user will click on the 
    // delete button then this function will execute then that particular
    // task will delete
    function deleteItem(curr) {
        dispatch(removeTask(curr))
    }

    return (
        <div className="h-1/3">

            {/* view task button:-
            when the user will click on the view button task then flag value 
            will true then the all task will show and when the user again
            will click on the view task button then all 
            task will hide.
            */}
            <button onClick={() => {
                // if there are not any task then if user click on the 
                // view task button, there will not be show any taks
                if (list.length === 0) {
                    return
                }

                // if flag value true then it will change into false
                // otherwise true using logical not operator
                setFlag((prev) => !prev)
            }}
                className="px-4 py-1 bg-blue-500 text-white
            text-lg rounded-md md:ml-32 md:px-3 ml-20">
                View Task
            </button>

            {/* using the ternary operator for view task or not.*/}
            {
                // when flag value is true then it will print the task 
                // otherwise not.
                flag ?
                    <div>
                        {
                            //  printing tasks using the map function
                            list.map((curr, index) => <p key={index}
                                className="flex justify-between items-center px-3
                                    rounded-md text-white text-lg bg-blue-400 my-2"
                            >{curr.task}

                                {/* Delete task button:- 
                                when the user will click on the delete button 
                                then that particular task will delete */}
                                <button onClick={() => deleteItem(curr.id)}
                                    className="px-3  bg-blue-500 text-white
                                        border border-white m-2
                                        text-lg rounded-md">Delete</button>
                            </p>)
                        }
                    </div>
                    : (<></>)
            }
        </div>

    )
}
export default TaskList;


{/*
const [printItem, setPrintItem] = useState(list);
    const [flag, setFlag] = useState(false);
 console.log("print item")
    console.log(printItem)
    function deleteItem(item) {
        dispatch(removeData(item))
        // console.log(list.length);
        setPrintItem(list.map(val => val))
        setFlag(true)
    }

    <div>
            <button onClick={() => {
                setFlag(true)
                // setPrintItem(list.map(val => val))
            }}>View</button>



            {
                flag ? <div>
                    {
                        printItem.map((item, index) => <p key={index}
                            className="bg-red-300 my-2 flex justify-between">{item}
                            <button onClick={() => deleteItem(item)}>del</button>
                        </p>)
                    }
                    {setFlag(false)}
                </div>

                    : (<p>not true</p>)

            }
        </div>
*/}