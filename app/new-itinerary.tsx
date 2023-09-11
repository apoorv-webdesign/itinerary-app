import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default function NewItinerary(){

    const addTweet = async(formData: FormData) => {
        'use server'
        const title = String(formData.get("title"));
        const supabase = createServerActionClient<Database>({ cookies});
        const {data : {user}} = await supabase.auth.getUser();
        if(user){
            console.log(user.id)
            await supabase.from('itineraries').insert({title, user_id:user.id, content:"first test"})
        }
    }

    return (
        <form action={addTweet}>
            <input name = "title" className="bg-inherit"></input>
        </form>
    )

}