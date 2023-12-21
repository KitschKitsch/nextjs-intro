/*  /movies/[id]  */

import {useRouter} from "next/router";

export default function Detail(params) {
    const router = useRouter();
    console.log("router: ",router)
    console.log("router.query: ",router.query)
    console.log("params.id: ",params.id)
    return <>
    {router.query.id ? <span>URL로 주입한 아이디 {router.query.id} </span>: ""}
        {params.id ? <span>파라미터로 주입한 아이디 {params.id} </span> : ""}
    </>
}