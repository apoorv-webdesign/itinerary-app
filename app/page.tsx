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

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {data: { session }} = await supabase.auth.getSession();

  if(!session){
    redirect('/login')
  }

  const { data } = await supabase
  .from("itineraries")
  .select("*, author:profiles(*), likes(user_id)")

  const itineraries = data?.map((itinerary) =>({
    ...itinerary,
    author: Array.isArray(itinerary.author) ? itinerary.author[0] : itinerary.author,
    user_has_liked_itinerary: !!itinerary.likes.find((like) => like.user_id === session.user.id),
    likes: itinerary.likes.length
  })) ?? [];
  return (
    <>
      <AuthButtonServer />
      <NewItinerary />
      <Itineraries itineraries={ itineraries} />
    </>
  )
}
