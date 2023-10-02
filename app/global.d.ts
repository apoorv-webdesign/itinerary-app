import { Database as DB } from '@/lib/database.types';

type Itinerary = DB['public']['Tables']['itineraries']['Row']
type Profile = DB['public']['Tables']['profiles']['Row']

declare global {
    type Database = DB;
    type ItineraryWithAuthor = Itinerary & {
        author: Profile;
        likes: number;
        user_has_liked_itinerary: boolean;
    }
}