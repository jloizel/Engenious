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
}

export function EmailTemplate({ name, emailAddress, message }: ContactMeEmailProps) {
  const previewText = `${name} has a message`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
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
            This message was sent by {name}. You can contact him through his
            email {emailAddress}
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}