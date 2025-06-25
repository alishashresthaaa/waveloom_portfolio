import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

function getProjectModel() {
  return mongoose.models.Project || mongoose.model("Project", ProjectSchema);
}

export async function GET() {
  try {
    await connectToDatabase();
    const Project = getProjectModel();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error " + error },
      { status: 500 }
    );
  }
}
