'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Likes({ itinerary } : {itinerary: ItineraryWithAuthor}) {
    const router = useRouter();
    const handleLikes = async() => {
        const supabase = createClientComponentClient<Database>();
        const {data : {user}} = await supabase.auth.getUser(); 
        if(user) {
            if(itinerary.user_has_liked_itinerary){
                await supabase.from('likes').delete().match({user_id: user.id, itinerary_id:itinerary.id})
            } else {
                await supabase.from('likes').insert({user_id:user.id, itinerary_id:itinerary.id})
            }
            router.refresh();
        }
    }
    return <button onClick ={handleLikes}>{itinerary.likes} Likes</button>;
}