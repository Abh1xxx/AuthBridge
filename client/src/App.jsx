import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes/router";


function App() {
 
  return (
   <>
   {/* <h1> THis is APP.JSX FILE</h1> */}
   <RouterProvider router={router}/>
   
   </>
  
  )
}

export default App
