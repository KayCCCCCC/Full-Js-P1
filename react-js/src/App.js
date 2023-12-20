// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import img from './assets/img/img1.png'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
import { connect } from "react-redux";

import { useDispatch, useSelector } from 'react-redux';

import {
  increaseCounter,
  decreaseCounter,
  handle
} from "./redux/actions/action"
function App(props) {
  //use react hook
  const newCount = useSelector((state) => { return state.counter.count });
  const newCount1 = useSelector((state) => { return state.handle.ca });
  const dispatch = useDispatch();
  const handleH = () => {
    dispatch(handle());
  }
  const handleIncrease = () => {
    dispatch(increaseCounter());
  }
  const handleDecrease = () => {
    dispatch(decreaseCounter());
  }
  return (
    // < div className="App bg-gray-400 h-[100%]">
    //   <h1 className="text-red-600 text-3xl font-bold underline">
    //     Hello world!
    //   </h1>
    //   <img className='w-[100px] h-[100px]' src={img}></img>
    //   <MyComponent></MyComponent>
    //   <ToastContainer
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    //   {/* Same as */}
    //   <ToastContainer />
    // </div>


    //use react class component
    // <div className='App'>
    //   <div>Count: {props.count}</div>
    //   <div>Handle: {props.ca}</div>


    //   {console.log(props)}
    //   <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => props.handle()}>Handle</button>

    //   <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => props.increaseCounter()}>Increase Count</button>

    //   <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => props.decreaseCounter()}>Decrease Count</button>
    // </div>


    //use react hook
    <div className='App'>
      <div>Count: {newCount}</div>
      <div>Handle: {newCount1}</div>


      {console.log(props)}
      <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => handleH()}>Handle</button>

      <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => handleIncrease()}>Increase Count</button>

      <button className='bg-blue-400 p-2 rounded ml-2' onClick={() => handleDecrease()}>Decrease Count a</button>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     ca: state.handle.ca,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     handle: () => dispatch(handle()),
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
