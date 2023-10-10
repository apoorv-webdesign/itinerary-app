import { User, createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default function NewItinerary({ user }: {user:User}){

    const addTweet = async(formData: FormData) => {
        'use server'
        const title = String(formData.get("title"));
        const supabase = createServerActionClient<Database>({ cookies});
        // const {data : {user}} = await supabase.auth.getUser();
            console.log(user.id)
            await supabase.from('itineraries').insert({title, user_id:user.id, content:"first test"})
    }

    return (
        <form className="border border-gray-800 border-t-0" action={addTweet}>
            <div className="flex py-8 px-4">
                <div className="h-12 w-12">
                    <Image src={user.user_metadata.avatar_url} 
                    alt="user avatar"
                    width={48} 
                    height={48} 
                    className="rounded-full"/>
                </div>
                <input name = "title" className="bg-inherit flex-1 ml-2 text-2xl 
                leading-loose placeholder-gray-500 px-2"
                placeholder="Whats going on?"></input>
            </div>
        </form>
    )

}