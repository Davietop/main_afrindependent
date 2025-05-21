import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const res = await fetch(
      'https://api.resend.com/audiences/ce26564b-8fce-46ce-9bbf-9f107351b6f0/contacts',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer re_j5g1WtaS_2MrLQHVQqYURHoQJyUATMczZ`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    // Handle duplicate email (already exists)
    if (res.status === 409) {
      return NextResponse.json({ error: 'Email already exists in the contact list' }, { status: 409 });
    }

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json({ message: 'Contact added successfully', data });
  } catch (error) {
    console.error('Resend contact error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
