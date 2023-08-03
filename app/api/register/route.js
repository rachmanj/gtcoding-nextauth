import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/user";
import { connectToDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while registering the user" },
      { status: 500 }
    );
  }
}
