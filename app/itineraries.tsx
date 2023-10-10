'use client'


import { useEffect, experimental_useOptimistic as useOptimistic } from "react";
import Likes from "./likes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Itineraries({itineraries} : {itineraries : ItineraryWithAuthor[]}) {
    const [optimisticItineraries, addOptimisticItinerary] = 
    useOptimistic<ItineraryWithAuthor[], ItineraryWithAuthor>(
        itineraries,
        (currentOptimisticItineraries, newItinerary) => {
            const newOptimisticItineraries = [...currentOptimisticItineraries]
            const index = newOptimisticItineraries.findIndex((itinerary) => 
                itinerary.id === newItinerary.id);
                newOptimisticItineraries[index] =  newItinerary;
                return newOptimisticItineraries
        }
    );

    const supabase = createClientComponentClient()
    const router = useRouter()

    useEffect(() => {
        const channel = supabase.channel('realtime tweets').on
        ('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'itineraries'
        }, 
        (payload) => {
            router.refresh();
        }).subscribe();

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, router])

    return optimisticItineraries.map((itinerary) =>(
        <div key={itinerary.id} className="border border-gray-800 border-t-0 px-4 py-8 flex">
            <div className="h-12 w-12">
                <Image 
                    src={itinerary.author.avatar_url} 
                    className="rounded-full" 
                    alt="itinerary user avatar"
                    width={48} 
                    height={48}/>
            </div>
            <div className="ml-4">
                <p>
                    <span className="font-bold">{itinerary.author.name}</span>
                    <span className="text-sm ml-2 text-gray-400">{itinerary.author.username}</span>
                </p>
                <p>
                    {itinerary.title}
                </p>
                <Likes itinerary={itinerary} addOptimisticItinerary={addOptimisticItinerary}/>
            </div>
        </div>
    ))
} 