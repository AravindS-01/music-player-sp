import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Favourite from "./Component/favourite/Favourite";
import Trending from "./Component/trending/Trending";
import Library from "./Component/library/library";
import NotFound from "./Component/notFound/NotFound";
import Feed from "./Component/feed/Feed";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement :<NotFound/>,
        children:[{
            path: "/favourite",
            element : <Favourite />,
            errorElement :<NotFound/>
        },{
            path:"/trending",
            element: <Trending />,
            errorElement :<NotFound/>
        },{
            path: "/library",
            element: <Library />,
            errorElement :<NotFound/>
        }
        ,{
            path: "/feed",
            element: <Feed />,
            errorElement :<NotFound/>
        }
    ],
    },
])




