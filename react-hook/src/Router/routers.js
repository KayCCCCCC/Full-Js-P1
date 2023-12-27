import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Table from "../Components/tableComponent";
import CountDown from '../Components/coundownComponent';
import Todo from '../Components/todoComponent';
import Navbar from "../Components/headerComponent";
import Blog from "../Components/blogComponent";
import BlogDetail from "../Components/blogDetailComponent";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "table",
                element: <Table />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "count",
                element: <CountDown />
            },
            {
                path: "blog/:id",
                element: <BlogDetail />
            },
        ]
    },
    {
        path: "/table",
        element: <Table />
    },
]);
export default router;