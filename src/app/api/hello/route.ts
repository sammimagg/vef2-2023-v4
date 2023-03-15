import { API_URL } from '../../../../.config';

export async function GET(request: Request) {
  console.log(`${API_URL}/departments`)
  return new Response('Hello, Next.js!')
}
