import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { currentUser } from "@/lib/auth";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function Promos() {
    const user = await currentUser();
  return (
    <div>
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