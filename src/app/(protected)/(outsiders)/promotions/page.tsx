"use client";
import { currentUser } from '@/lib/auth';
import SearchBar from '../../_components/searchbar';

export default async function Promotions() {
  const user = await currentUser();
  console.log('User:', user);
  return (
    <div>
      <h1>Searchbro</h1>
      
    </div>
    
  );
}
