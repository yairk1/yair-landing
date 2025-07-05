import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { sheetId } = await request.json()

    if (!sheetId || !sheetId.trim()) {
      return NextResponse.json({ error: "Sheet ID is required" }, { status: 400 })
    }

    // In a real app, you might want to validate the sheet ID
    // by trying to access it with the Google Sheets API

    // For now, we'll just return success
    // The actual sheet ID will be stored in localStorage on the client
    // and used for subsequent requests

    return NextResponse.json({
      success: true,
      message: "Settings saved successfully",
      sheetId: sheetId.trim(),
    })
  } catch (error) {
    console.error("Error saving settings:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
