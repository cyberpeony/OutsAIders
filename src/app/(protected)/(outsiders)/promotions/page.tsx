import { currentUser } from '@/lib/auth';
import SearchBar from '../../_components/searchbar';

export default async function Promotions() {
  const user = await currentUser();
  return (
    <div>
        <SearchBar/>
    </div>
    
  );
}
