import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import ContactMeEmail from "../../../../components/Email";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  // phoneNumber: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(request: NextRequest) {
  const { email, name, message, file } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}