import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { currentUser } from "@/lib/auth";
import { Promos } from "@/components/promos";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function Promotions() {
    const user = await currentUser();
  return (
    <div>
      <Promos />
      {user ? (
        <div>
            
        </div>
      ) : (
        <div>

        </div>
      )}
    </div>
  );
}