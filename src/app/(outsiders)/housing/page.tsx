import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { currentUser } from "@/lib/auth";
import { Housing } from "@/components/housing";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function House() {
    const user = await currentUser();
  return (
    <div>
        <Housing />
      {user ? (
        <div>
            user {user.name}
        </div>
      ) : (
        <div>
            no user
        </div>
      )}
    </div>
  );
}