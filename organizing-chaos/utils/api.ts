import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

interface Login {
  email: string;
  password: string;
}

interface Register {
  name: string;
  email: string;
  password: string;
}

async function fetcher(url: string, method: string, body: any) {
  const response = await fetch(`${url}`, {
    method: method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("API error");
    return;
  }

  const data = await response.json();
  return data;
}

async function loginCall(body: Login) {
  return fetcher("/login", "GET", body);
}

async function registerCall(body: Register) {
  return fetcher("/register", "POST", body);
}
export { fetcher, loginCall, registerCall };
