import * as React from 'react';
import { Button } from '@react-email/button';
import styles from './page.module.css'

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactMeEmailProps {
  company: string;
  job: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
}

export function EmailTemplate({ company, job, name, emailAddress, phoneNumber, message }: ContactMeEmailProps) {
  const previewText = `${name} from ${company} has submitted a vacancy`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Text className={styles.emailHeader}>
            Here is the message:
          </Text>
          <Text className={styles.emailText}>
            <strong>{message}</strong>
          </Text>
          <Text className={styles.emailText}>
            <strong>Job title: {message}</strong>
          </Text>
          <Hr style={{backgroundColor: "#002D49"}} />
          <Text className={styles.emailInfo}>
            This message was sent by {name} from ${company}. You can contact them through their
            email {emailAddress} or phone number {phoneNumber}
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}