import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-200 dark:text-gray-900">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold my-5 sm:text-4xl">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the purpose of react router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does Context API works?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is useRef in React example?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ||div ref=myRef || , React will set its .current property to the corresponding DOM node whenever that node changes.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;