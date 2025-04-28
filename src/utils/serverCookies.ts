import { cookies } from 'next/headers';
export async function getServerCookies() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value || '';
  const refreshToken = cookieStore.get('refreshToken')?.value || '';
  const cookieHeader = `accessToken=${accessToken}; refreshToken=${refreshToken}`;

  return {
    accessToken,
    refreshToken,
    cookieHeader,
  };
}
