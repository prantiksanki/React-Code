import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from "react-router-dom"; // Fix import here
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx"; // Ensure you import Home and About components
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact" ;
import User from "./components/User/User"
import Github , { githubInfoLoader }from "./components/Github/Github"
// const router = createBrowserRouter([
//   {
//     path: "/", // Correct capitalization from `Path` to `path`
//     element: <Layout />,
//     children: [
//       {
//         path: "", // Same fix for `path` 
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);



// ################### OR ###############

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route  loader={githubInfoLoader} path="github" element={<Github />} />

    </Route>
  )
);




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
