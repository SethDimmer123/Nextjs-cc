import { useRouter } from "next/router"

export default function User(){

    const router = useRouter()
    console.log(router.query)
    const {username} = router.query
    return(
        <h1>This is user:{username}</h1>
    )
}