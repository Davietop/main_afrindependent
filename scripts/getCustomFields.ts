import 'dotenv/config';
import axios from 'axios';

async function getCustomFields() {
  const apiKey = process.env.GETRESPONSE_API_KEY;
  try {
    const res = await axios.get('https://api.getresponse.com/v3/custom-fields', {
      headers: {
        'X-Auth-Token': `api-key v06oijzm40synq5c18dxsr4vi5bxnyza`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Custom Fields:', res.data);
  } catch (error:any) {
    console.error('Failed to fetch custom fields:', error.response?.data || error.message);
  }
}

getCustomFields();
