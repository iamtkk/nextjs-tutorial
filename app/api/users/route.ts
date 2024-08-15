import { saveUser, fetchUsers } from "@/utils/actions";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id");
  console.log("req.url : ", req.url);
  console.log("req.nextUrl : ", req.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  // return Response.json({ users });
  return Response.redirect(new URL("/", req.nextUrl));
};
