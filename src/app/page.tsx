import { Poppins } from "next/font/google";
import { currentUser } from '@/lib/auth';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function Home() {
  const user = await currentUser();
  return (
    <p>hola</p>
  );
}
