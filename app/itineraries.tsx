'use client'


import { experimental_useOptimistic as useOptimistic } from "react";
import Likes from "./likes";

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
    
    return optimisticItineraries.map((itinerary) =>(
        <div key={itinerary.id}>
          <p>
            {itinerary.author.name}{itinerary.author.username}
          </p>
          <p>{itinerary.title}</p>
          <Likes itinerary={itinerary} addOptimisticItinerary={addOptimisticItinerary}/>
        </div>
    ))
} 