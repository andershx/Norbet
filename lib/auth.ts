import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET = process.env.JWT_SECRET || 'dev-secret-not-secure';

export type Session = { uid: string; name: string };

/**
 * Read session from cookie. If missing/invalid, return a temporary guest
 * WITHOUT setting cookies. Safe for Server Components during render.
 */
export function getSessionReadOnly(): Session {
  const token = cookies().get('norbet_session')?.value;
  if (!token) return { uid: 'guest', name: 'Guest' };
  try {
    return jwt.verify(token, SECRET) as Session;
  } catch {
    return { uid: 'guest', name: 'Guest' };
  }
}

/**
 * Full session helper for Route Handlers/Server Actions.
 * Creates a guest and SETS the cookie when missing/invalid.
 * Do NOT call this from Server Components during render.
 */
export function getSession(): Session {
  const token = cookies().get('norbet_session')?.value;
  if (!token) return createGuest();
  try {
    return jwt.verify(token, SECRET) as Session;
  } catch {
    return createGuest();
  }
}

export function createGuest(): Session {
  const uid = 'u_' + Math.random().toString(36).slice(2, 10);
  const session: Session = { uid, name: 'Guest' };
  const jwtToken = jwt.sign(session, SECRET, { expiresIn: '30d' });
  // This is only safe in route handlers/server actions.
  cookies().set('norbet_session', jwtToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });
  return session;
}
