import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// Get all helper_availability
export async function GET() {
  try {
    const leaveRequests = await prisma.helperAvailability.findMany({
      include: {
        helper: {
          select: {  
            user: {
              select: {
                fullName: true
              }
            }
          }
        },
      }
    });
    return NextResponse.json(leaveRequests);
  }
  catch (error){
    console.error("Error fetching leave requests", error);
    return NextResponse.json(
      { status: "error", error: "Failed to fetch leave requests"},
      { status: 500}
    );
  }
}

// Create a new helper_availability
export async function POST(req: Request) {
  const data = await req.json();
  const newHelperAvailability = await prisma.helperAvailability.create({
    data,
  });
  return NextResponse.json(newHelperAvailability);
}