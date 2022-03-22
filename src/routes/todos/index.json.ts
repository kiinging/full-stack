import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = () => {
    return{
    status: 200,
    body: "Hello"
        
    }
}

export const post: RequestHandler<{}, FormData> = (Request) => {
    console.log(Request.body.get("text"));
    return {
        status: 200,
        body: request.body.get("text")
    }
}