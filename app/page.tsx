import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonServer from './auth-button-server';
import { redirect } from 'next/navigation';
import NewItinerary from './new-itinerary';
import Likes from './likes';
import Itineraries from './itineraries';

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {data: { session }} = await supabase.auth.getSession();

  if(!session){
    redirect('/landingPage')
  }

  const { data } = await supabase
  .from("itineraries")
  .select("*, author:profiles(*), likes(user_id)").order("created_at", {
    ascending: false
  })

  const itineraries = data?.map((itinerary) =>({
    ...itinerary,
    author: Array.isArray(itinerary.author) ? itinerary.author[0] : itinerary.author,
    user_has_liked_itinerary: !!itinerary.likes.find((like) => like.user_id === session.user.id),
    likes: itinerary.likes.length
  })) ?? [];
  return (
    <div className="w-full w-full max-w-xl mx-auto">
      <div className="flex justify-between px-4 py-6 border-gray-800 border-t-0">
        <h1 className="text-xl font-bold">Home</h1>
        <AuthButtonServer />
      </div>
      <NewItinerary user={session.user}/>
      <Itineraries itineraries={ itineraries} />
    </div>
  )
}
