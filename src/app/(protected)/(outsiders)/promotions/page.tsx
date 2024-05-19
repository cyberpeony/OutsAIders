import { currentUser } from '@/lib/auth';

export default async function Promotions() {
  const user = await currentUser();
  return (
    <div>
        <SearchBar />
    </div>
    
  );
}
