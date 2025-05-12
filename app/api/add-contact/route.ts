import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, lastName } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    console.log("Checking if contact already exists...");

    // Step 1: Check if the contact already exists
    const checkRes = await fetch(`https://api.getresponse.com/v3/contacts?query[email]=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `api-key v06oijzm40synq5c18dxsr4vi5bxnyza`,
      },
    });

    const existingContacts = await checkRes.json();

    if (Array.isArray(existingContacts) && existingContacts.length > 0) {
      console.log("Contact already exists:", existingContacts[0]);
      return NextResponse.json({ message: 'Contact already exists.' }, { status: 200 });
    }

    // Step 2: Define payload
    const payload = {
      email,
      campaign: {
        campaignId: "G2hpJ",
      },
      customFieldValues: [
        {
          customFieldId: "nfUax5", // First name
          value: [firstName || ''],
        },
        {
          customFieldId: "nfUaSb", // Last name
          value: [lastName || ''],
        },
      ],
    };

    // Step 3: Submit contact creation request
    console.log("Creating new contact...");
    let response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `api-key v06oijzm40synq5c18dxsr4vi5bxnyza`,
      },
      body: JSON.stringify(payload),
    });

    // Retry once if server error
    if (response.status >= 500) {
      console.warn("First attempt failed, retrying...");
      await new Promise((res) => setTimeout(res, 1000)); // wait 1s

      response = await fetch('https://api.getresponse.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': `api-key v06oijzm40synq5c18dxsr4vi5bxnyza`,
        },
        body: JSON.stringify(payload),
      });
    }

    const data = await response.json();
    console.log("GetResponse API result:", data);

    if (!response.ok) {
      return NextResponse.json({ message: data.message || 'Failed to add contact' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Contact added successfully!' });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
