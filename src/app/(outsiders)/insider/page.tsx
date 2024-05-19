import { Poppins } from "next/font/google";
import { currentUser } from "@/lib/auth";
import { Insider } from "@/components/insider";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function Main() {
    const user = await currentUser();
  return (
    <div>
        <Insider />
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