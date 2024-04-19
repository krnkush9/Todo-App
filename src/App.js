import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

function App() {


  return (
    // container div
    <div className="flex justify-center h-full my-3">

      {/* main div */}
      <div className="h-fit w-11/12 mt-12 border-2 sm:w-4/5 lg:w-1/3
      md:w-1/2 md:mx-auto md:overflow-hidden
       bg-white 
       border-blue-500 shadow-md rounded-md">

        {/* heading */}
        <h1 className='bg-blue-500 h-9 flex justify-center items-center
        text-white text-lg font-semibold mb-4'>Todo App</h1>

        <div className='flex flex-col p-3'>
          {/* TaskInput componenet */}
          <TaskInput />

          {/* TaskList componenet */}
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
