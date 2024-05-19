import { currentUser } from '@/lib/auth';
import SearchBar from '../components/SearchBar';

export default async function Promotions() {
  const user = await currentUser();
  return (
    <div>
        <SearchBar />
    </div>
    
  );
}
