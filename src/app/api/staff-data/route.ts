import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = {
      senior: [
        {
          id: 1,
          name: "Mr Aman Lavda",
        },
        {
          id: 3,
          name: "Mrs. Eva Adam",
        },
      ],
      entry: [
        {
          id: 2,
          name: "Mr Harsh Bhadva",
        },
      ],
    };
    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: err,
      success: false,
    });
  }
}
