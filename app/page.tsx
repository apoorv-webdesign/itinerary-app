import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButton from './auth-button';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: itineraries } = await supabase.from("itineraries").select();
  return (
    <>
      <AuthButton />
      <pre>{JSON.stringify(itineraries, null, 2)}</pre>
    </>
  )
}