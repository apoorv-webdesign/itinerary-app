import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonServer from './auth-button-server';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {data: { session }} = await supabase.auth.getSession();

  if(!session){
    redirect('/login')
  }

  const { data: itineraries } = await supabase
  .from("itineraries")
  .select("*, profiles(*)")
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthButtonServer />
      <pre>{JSON.stringify(itineraries, null, 2)}</pre>
    </>
  )
}
