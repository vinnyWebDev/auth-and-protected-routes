import './App.css';
import Home from "./Routes/Home"
import Signin from "./Routes/Signin"
import Signup from "./Routes/Signup"
import Blog from "./Routes/Blog"
import Navigation from './Components/Navigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import { Protected } from './Routes/Protected';


function App() {

  //our routes are defined in here
  const router = createBrowserRouter([{
    path: "/",
    element: <Protected><Home></Home></Protected>
  }, {
    path: "/signin",
    element: <Signin></Signin>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/blog",
    element: <Protected><Blog></Blog></Protected>
  }])

  return (
    //we wrap the whole app in the auth context
    //Authcontext lets the systen know what user is signed in if any
    <AuthContext>
      <div className="App">
        <Navigation></Navigation>
        <h1>Otto tutorial</h1>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthContext>
  );
}

export default App;
