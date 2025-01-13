import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {

  // --> Option one
  const router = createBrowserRouter([
    {path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home />},
        { path: "/products", element: <Products /> },
        { path: "/products/:productId", element: <ProductDetails /> },
      ]
    },
  ]);

  // --> Option Two
  // const routeDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element= {<Home />}/>
  //     <Route path="/products" element= {<Products />}/>
  //   </Route>
  // );
  // const router = createBrowserRouter(routeDefinitions);

  return (
    <>
      <h1>Multipage spa with react router </h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
