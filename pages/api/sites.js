// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUserSites } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const sites = await getUserSites(uid);

    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error });
  }
};
