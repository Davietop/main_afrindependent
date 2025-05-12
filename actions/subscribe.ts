"use server";

import { z } from "zod";
import axios from "axios";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_SERVER;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

export async function subscribe(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().nonempty(),
    name: z.string().nonempty(),
  });

  const data = schema.parse({
    email: formData.get("email"),
    name: formData.get("name"),
  });

  if (!data.email) {
    return { message: "Subscribed" };
  }

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  const payload = {
    email_address: data.email,
    status: "subscribed",
    merge_fields: {
      NAME: data.name,
    },
  };

  try {
    const response = await axios.post(url, payload, options);
    if (response.status === 200) {
      return { message: "Success" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.title == "Member Exists") {
        return { message: "Subscribed" };
      }
    }
    return {
      message: "Error",
      error,
    };
  }
}
