import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import ContactMeEmail from "../../../../components/Email";


const resend = new Resend(process.env.RESEND_API_KEY);

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { content, filename } = req.body;

  switch (method) {
    case 'POST': {
      try {
        const { data } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['jmloizel@gmail.com'],
          subject: 'Email with attachment',
          html: '<p>See attachment</p>',
          attachments: [
            {
              content,
              filename,
            },
          ],
        });

        if (!data) {
          return res.status(500).send({ error: 'Failed to send email, data is null' });
        }

        return res.status(200).send({ data: data.id });
      } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
      }
    }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
