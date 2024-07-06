// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: true,
  callbacks: {
    async session({ session, token }) {
      if (token && typeof token.id === "string") {
        session.user.id = token.id;
      } else {
        session.user.id = "";
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId as string;
      }
      return token;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
