import { Poppins } from "next/font/google";
import { currentUser } from '@/lib/auth';
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function Home() {
  const user = await currentUser();
  return (
    <div>
    {user ? (
      <div>{user.name}</div>
    ) : (
      <div>
        <LoginButton mode="modal">
          logeate
        </LoginButton>
      </div>
    )}
    </div>
    
  );
}
