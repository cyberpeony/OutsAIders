import NextAuth, { DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER"
};

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}

//import { JWT } from "@auth/core/jwt"

//declare module "next-auth/jwt" {
//  interface JWT {
//    role?: "ADMIN" | "USER";
//  }
//}