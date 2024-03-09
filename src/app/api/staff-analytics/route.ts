import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = [
      {
        name: "Checked On Time",
        type: "bar",
        stack: "Checked",
        emphasis: {
          focus: "series",
        },
        data: [20, 15, 25],
      },
      {
        name: "Checked Late",
        type: "bar",
        stack: "Checked",
        emphasis: {
          focus: "series",
        },
        data: [5, 7, 3],
      },
      {
        name: "Defects Found",
        type: "bar",
        stack: "Defects",
        emphasis: {
          focus: "series",
        },
        data: [3, 2, 5],
      },
      {
        name: "No Defects",
        type: "bar",
        stack: "Defects",
        emphasis: {
          focus: "series",
        },
        data: [17, 20, 23],
      },
    ];
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
