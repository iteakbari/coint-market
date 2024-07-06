import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    "accessToken=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Strict"
  );

  res.writeHead(302, { Location: "/login" });
  res.end();
}
