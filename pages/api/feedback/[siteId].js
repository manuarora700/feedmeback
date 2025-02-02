// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllFeedback } from '@/lib/db-admin';
import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ feedback });
};
