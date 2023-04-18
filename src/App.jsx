import './App.css'
import { Container, MantineProvider } from "@mantine/core";
import HeaderUI from './components/Header/HeaderUI'
import MainSection from './components/Main/MainSection';
import RootLayout from "./pages/Root";
import RestaurantDetails from "./pages/RestaurantDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainSection/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);
const links = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "restaurants",
    label: "Restaurants",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "contact",
    label: "Contact",
  },
];

function App() {


  return (
    <MantineProvider>
    <Container size="xl" px="xs">
    <HeaderUI  links={links}/>
    <RouterProvider router={router}></RouterProvider>
    </Container>
    </MantineProvider>
  )
}

export default App;
