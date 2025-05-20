import { NextResponse } from 'next/server';
import axios from 'axios';

const GETRESPONSE_API_KEY = "v06oijzm40synq5c18dxsr4vi5bxnyza";
const GETRESPONSE_API_URL = 'https://api.getresponse.com/v3/contacts';

interface CustomField {
  customFieldId: string;
  value: string[];
}

interface RequestBody {
  email: string;
  campaignId: string;
  customFields: CustomField[];
}

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();
    const { email, campaignId, customFields } = body;

    if (!email || !campaignId || !customFields?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const payload = {
      email,
      campaign:  {
        campaignId: "G2hpJ",
      },
      customFieldValues: customFields,
    };

    const response = await axios.post(GETRESPONSE_API_URL, payload, {
      headers: {
        'X-Auth-Token': `api-key ${GETRESPONSE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ message: 'Contact created', data: response.data }, { status: 200 });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Failed to create contact';
    const context = error.response?.data?.context || null;
    return NextResponse.json({ error: message, context }, { status });
  }
}
