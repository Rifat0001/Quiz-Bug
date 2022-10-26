import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import Blog from "../Blog";
import ErrorPage from "../ErrorPage";
import QuizData from "../QuizData";
import Root from '../Root'
import Statics from "../Statics";
import Topics from "../Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            {
                path: '/', element: <Topics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

            },
            {
                path: '/topics', element: <Topics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/quiz/:id', element: <QuizData />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: '/statics', element: <Statics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/blog', element: <Blog />
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '*', element: <ErrorPage />
            }
        ]
    }
])
export default router;