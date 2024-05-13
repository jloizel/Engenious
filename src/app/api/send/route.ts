import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import ContactMeEmail from "../../../../components/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(req: NextRequest) {
  const { name, emailAddress, phoneNumber, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["jmloizel@gmail.com"],
    subject: `${name} has a message!`,
    react: ContactMeEmail({ name, emailAddress, phoneNumber, content }),
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}