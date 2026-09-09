import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  let filePath = '';
  if (name === 'slangera') {
    filePath = 'C:\\Users\\dipti_h6gt93b\\.gemini\\antigravity-ide\\brain\\347983c0-03cf-4389-800a-33f75e3fd6f4\\.user_uploaded\\media_1788971667164.png';
  } else if (name === 'goverdhan') {
    filePath = 'C:\\Users\\dipti_h6gt93b\\.gemini\\antigravity-ide\\brain\\347983c0-03cf-4389-800a-33f75e3fd6f4\\.user_uploaded\\media_1788971667252.png';
  } else {
    return new NextResponse('Image not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    return new NextResponse('Error reading image', { status: 500 });
  }
}
