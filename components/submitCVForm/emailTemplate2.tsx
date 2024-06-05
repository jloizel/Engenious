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
  name: string;
  emailAddress: string;
  message: string;
  jobPosition: string;
  salary: string;
  location: string;
  contractType: string
}

export function EmailTemplate({ name, emailAddress, message, jobPosition, salary, location, contractType }: ContactMeEmailProps) {
  const previewText = `${name} has applied for a job`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Text className={styles.emailHeader}>
            They have applied for:
            <ul>{jobPosition}</ul>
            <ul>{salary}</ul>
            <ul>{location}</ul>
            <ul>{contractType}</ul>
          </Text>
          <Text className={styles.emailHeader}>
            Here is their message:
          </Text>
          <Text className={styles.emailText}>
            <strong>{message}</strong>
          </Text>
          <Text className={styles.emailHeader}>
            See attached for the CV.
          </Text>
          <Hr style={{backgroundColor: "#002D49"}} />
          <Text className={styles.emailInfo}>
            This message was sent by {name}. You can contact them through their
            email {emailAddress}
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}