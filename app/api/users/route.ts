import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET(request: Request) {
    try {
        const users = await prisma.user.findMany();
        console.log(users);
        return NextResponse.json({ users });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Database error occurred, " + error }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;
       await prisma.user.deleteMany();
        const newUser = await prisma.user.create({
            data: {
                username: "muhammad",
                age: 20,
                role: "admin",
                email:email,
                password,
                posts: {
                    create: {
                        title: "test post",
                        content: "test post",
                    }
                },
                comments: {
                    create: {
                        content: "test comment",
                    }
                },
            }
        });
        const all_users=await prisma.user.findMany();
        const all_posts=await prisma.post.findMany({
            where:{
                authorId:newUser.id
            }
        });
        const all_comments=await prisma.comment.findMany({
            where:{
                authorId:newUser.id
            }
        });

        return NextResponse.json({ all_users: all_users, all_posts: all_posts }, { status: 201 });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Database error occurred, " + error }, { status: 500 });
    }
} 