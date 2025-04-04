import { RouterProvider } from "react-router";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/lizexpress" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
