import { useEffect,useState } from "react"


// all rendered on the server side

// not on the client side



export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts : data
        }
    }
}







export default function Posts({posts}) {
    return (
        <>
        <h1>This is the posts page</h1>
        {posts?.map(post => {
            return <li key={post.id}>{post.title}</li>
        })}
        </>
    )
}
