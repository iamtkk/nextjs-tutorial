import { saveUser, fetchUsers } from "@/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id");
  console.log("req.url : ", req.url);
  console.log("req.nextUrl : ", req.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  return Response.json({ users });
  // return NextResponse.redirect(new URL("/", req.nextUrl));
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: "user created" });
};
