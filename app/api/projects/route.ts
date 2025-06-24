import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import Project from "../../models/project";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { image, title, description } = await req.json();
  await connectToDatabase();
  const project = await Project.create({ image, title, description });
  return NextResponse.json(project, { status: 201 });
}
