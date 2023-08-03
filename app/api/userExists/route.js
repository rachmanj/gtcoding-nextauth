import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    await connectToDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("USER: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
