// scripts/getCustomFields.ts
import 'dotenv/config';

const API_KEY = process.env.GETRESPONSE_API_KEY;

if (!API_KEY) {
  console.error('❌ Missing GETRESPONSE_API_KEY in .env.local');
  process.exit(1);
}

const getCustomFields = async () => {
  const res = await fetch('https://api.getresponse.com/v3/custom-fields', {
    headers: {
      'X-Auth-Token': `api-key ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(`❌ Failed to fetch custom fields: ${res.statusText}`);
    process.exit(1);
  }

  const fields = await res.json();

  console.log('\n📋 Custom Fields:');
  fields.forEach((field: any) => {
    console.log(`- ${field.name} ➜ ${field.customFieldId}`);
  });
};

getCustomFields();
