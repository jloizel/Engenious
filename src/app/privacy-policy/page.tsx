"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../components/navbar/main/navbarMain2'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../components/contactMap/contactMap'
import ContactForm2 from '../../../components/contactForm/contactForm'

const PrivacyPolicy = () => {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={styles.contactContainer}>
      <Helmet>
        <title>Privacy Policy</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarMain2/>
      <div className={styles.pageHeader}>
        <div className={styles.header}>Privacy Policy</div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>
      <div className={styles.textMainContainer}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <span>This privacy notice explains how Engenious Recruitment will collect and process your personal data if you are a candidate, client, supplier, use our website, are a referee/emergency contact of a candidate or apply for a job to work at Engenious Recruitment.</span>
            <span>We comply with the latest data protection legislation, including the General Data Protection Regulation (GDPR). Please note that we may amend this Privacy Notice from time to time and will post any changes here.</span>
          </div>
          <div className={styles.textHeader}>About us</div>
          <div className={styles.text}>
            Engenious Recruitment is a specialist technology recruitment business providing work-finding services to its clients and candidates. In providing these services we process personal data (including some sensitive personal data at times) and in doing so, we act as a data controller.
          </div>
          <div className={styles.textHeader}>Who to contact regarding your personal data</div>
          <div className={styles.text}>
            <span>Your privacy is important to us, and we are committed to protecting and safeguarding your data privacy rights. We would be happy to answer any of your questions about this privacy notice and how Engenious Recruitment uses your data.</span>
            <span>Contact us via our <a href="/contact" style={{color: "#09B089", textDecoration: "none"}}>contact page</a>.</span>
          </div>
          <div className={styles.textHeader}>How we collect and process personal data</div>
          <div className={styles.text}>
            <span>You may provide personal details toEngenious Recruitment , such as on an application or registration form or via our website, or we may collect them from another source such as a job board. Engenious Recruitment will only use your personal data when legally permitted to do so. For the purposes of providing you with work-finding services and/or information relating to roles relevant to you.</span>
            <span>We collect the minimal personal data necessary for the provision of our recruitment services. We endeavour to keep this information accurate and up to date, only use it for the purpose for which it was provided and not keep it longer than is necessary.</span>
          </div>
          <div className={styles.textHeader}>If you are a candidate</div>
          <div className={styles.text}>
            <span>Engenious Recruitment processes candidate and prospective candidate data so that it can connect the right candidates with the right jobs. We only ask for and collect the information we genuinely need, which is necessary for our legitimate interests to be able to provide our work-finding services.</span>
            <span>We keep this data whilst we have meaningful contact with you, this includes written and verbal communication, and where you click through from our marketing communications. If there has been no meaningful contact for two years we will securely delete your information.</span>
            <span>Where we have a contract with you e.g. you are a contractor, by law, for tax purposes, we have to keep basic information about our contractors for six years after they cease being contractors. This includes contact, identity, financial and transaction data.</span>
            <span>The main ways we may process your personal data:</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>So that you can apply for a vacancy.</span>
            <span> This may be directly through our website, email or phone, via a job board, LinkedIn or by visiting our offices in person.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If you are referred to us by a 3rd party e.g. a colleague at work.</span>
            <span> We will always inform prospective candidates that we have received their data and will provide them with an option to object to their data being added to our database.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If we have identified you as a prospective candidate.</span>
            <span> This may be from a job board listing, LinkedIn, other social media and website research. We will always inform candidates that we have collected their data and will provide them with an option to object to their data being added to our database.</span>
          </div>
          <div className={styles.textHeader}>The personal data we collect and process</div>
          <div className={styles.text}>
            <span>If you have not applied to us directly but you have been referred to us or we have identified you as a prospective candidate (items 2 and 3 above) we will process information such as name, age, gender, contact details, education details, employment history and social media profile. We do process other personal data about you, but only if you have chosen to share that information with us.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>Sharing your personal data with prospective employers.</span>
            <span> We will only do this with explicit consent and we do not normally share contact information until a job offer is made and accepted. Engenious Recruitment takes the protection of personal data very seriously.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If you are a contractor and we provide a managed service.</span>
            <span> Contractors provide us with further information under the obligation to fulfil a contract so that we can manage their payment as a service to our clients. As part of this arrangement we will share this data with the client and the HMRC under a legal obligation.</span>
          </div>
          <div className={styles.textHeader}>If you are a client</div>
          <div className={styles.text}>
            <span>Engenious Recruitment processes client and prospective client data so that it can introduce and match the best candidates to the best clients. We only ask for and collect the information we genuinely need, which is necessary for our legitimate interests to be able to provide our work-finding services.</span>
            <span>Where we have a contract with you, by law, for tax purposes, we have to keep basic information about our clients for six years after they cease being clients. This includes contact, identity, financial and transaction data.</span>
            <span>Where there is no contract in place, we keep your data whilst we have meaningful contact with you, this includes written and verbal communication, and where you click through from our marketing communications. If there has been no meaningful contact for two years we will securely delete your information.</span>
            <span>The main ways we may process your personal data:</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>So that you can engage our services.</span>
            <span> This may be direct through our website, email or phone, LinkedIn or by visiting our offices in person.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If you are referred to us by a 3rd party e.g. a connection or colleague at work. </span>
            <span> We will always inform prospective clients that we have received their data and will provide them with an option to object to their data being added to our database.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If we have identified you as a prospective client. </span>
            <span> This may be from an event we have held, LinkedIn, other social media or website research. We will always inform prospective clients that we have collected their data and will provide them with an option to object to their data being added to our database.</span>
          </div>
          <div className={styles.textHeader}>The personal data we collect and process</div>
          <div className={styles.text}>
            <span>If you have not engaged us directly but have been referred to us or we have identified you as a prospective client (items 2 and 3 above) we will process information such as name, history, position, contact details and LinkedIn profile. We do process other personal data about you, but only when you have chosen to share that information with us.</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>Sharing your personal data with candidates. </span>
            <span> We will only do this when a client has engaged our services. Engenious Recruitment takes the protection of personal data very seriously.</span>
          </div>
          <div className={styles.textHeader}>If you are a referee or emergency contact</div>
          <div className={styles.text}>
            <span>We will only process your personal data to provide our core service in connecting the best candidates with the best clients and to support our candidates in an emergency. We only ask for and collect the information we genuinely need, which is necessary for our legitimate interests to be able to provide our work-finding services and provide care and safety for our candidates.</span>
            <span> The ways we will process your personal data (note that we may be processing your data as a candidate or client that is not connected to this processing):</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If you are a referee. </span>
            <span> The candidate will have put the referee’s personal information forward as part of the interview process. We will make contact to see if they are prepared to provide a reference and will provide them with an option to object to their data being processed. We keep this data whilst the candidate remains on our database.</span>
          </div>
          <div className={styles.text}>
            <span>The personal data processed would normally be name, contact details and .</span>
          </div>
          <div className={styles.text2}>
            <span style={{fontWeight: 600}}>If you are an emergency contact. </span>
            <span> The candidate will have put the emergency contact’s personal information forward as part of the interview process. We will hold this information whilst the candidate remains on our database. The emergency contact concerned can object to their data being processed.</span>
          </div>
          <div className={styles.text}>
            <span>The personal data processed would normally be name, relationship to candidate and contact details.</span>
          </div>
          <div className={styles.textHeader}>If you are a supplier</div>
          <div className={styles.text}>
            <span>We process your personal data to ensure that contract arrangements between us are properly managed. This ensures that the relationship runs smoothly, and we comply with legal requirements.</span>
            <span>By law, for tax purposes, we have to keep basic information about our suppliers for six years after they cease being suppliers. This includes contact, identity, financial and transaction data.</span>
          </div>
          <div className={styles.textHeader}>If you apply to work at Engenious Recruitment </div>
          <div className={styles.text}>
            <span>Engenious Recruitment will process your personal data if you make an application to work with us. We only ask for and collect the information we genuinely need, which is necessary for our legitimate interests to be able to recruit the best people to join our team.</span>
            <span>We keep all application data for 1 year and then it is destroyed unless you give consent to be added to our database for future roles or you are successful and hired to work with us.</span>
          </div>
          <div className={styles.textHeader}>If you use our website</div>
          <div className={styles.text}>
            <span>This applies to all users of our websites – the general public, candidates, clients, suppliers, referees and emergency contacts and applicants wanting to work at Engenious Recruitment . We only ask for and collect the information we genuinely need, which is necessary for our legitimate interests to be able to provide a great website experience and our work-finding services.</span>
          </div>
          <div className={styles.textHeader}>Cookies and IP addresses</div>
          <div className={styles.text}>
            <span>We use cookies, which are small text files that are placed on your computer when you visit. We do this to make our website work more efficiently and to promote our news, products and services on social media, display and email messsages. You will be asked for your cookie consent when you first visit our website. You can manage your consent and visit our Cookie Notice for more information.</span>
            <span>Engenious Recruitment uses a third party service to help maintain the security and performance of our website. To deliver this service it processes the IP addresses (a number assigned to each of your devices connected to the internet by your broadband provider) of visitors to our websites.</span>
          </div>
          <div className={styles.textHeader}>Sensitive Data</div>
          <div className={styles.text}>
            <span>We may collect some sensitive data from you if you are a candidate or apply for a job at Engenious Recruitment , this can include details of medical conditions and disabilities, if disclosed voluntarily.</span>
            <span>For some vacancies, we may also do a financial background check or seek details of any commission or alleged commission of any offence. We will always ask for your explicit consent to do this.</span>
          </div>
          <div className={styles.textHeader}>Disclosure of personal data to 3rd parties</div>
          <div className={styles.text}>
            <span>Other than to our own service providers, Engenious Recruitment will not pass on your personal data to any other third parties without your consent unless the law requires us to do so or where there is immediate danger to your health.</span>
            <span>We may pass on your personal data to service providers contracted to Engenious Recruitment in the course of dealing with you. They act as a data processor on our behalf and are obliged under contract to keep your details securely, and only use them to fulfil the services they provide on our behalf. When they no longer need your data to fulfil this service, they dispose of the information in line with Engenious Recruitment procedures.</span>
            <span>In the future, if we were to sell Engenious Recruitment , we may disclose your Information to the buyer as part of the completed sale and the new owner would become the data controller and be bound by the latest data protection legislation.</span>
          </div>
          <div className={styles.textHeader}>Data Security</div>
          <div className={styles.text}>
            <span>We have put in place appropriate security measures to prevent your personal data being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</span>
            <span>There are also procedures in place to deal with any suspected personal data breach and we will notify you and the Information Commissioners Office (ICO) of a breach where we are legally required to do so.</span>
          </div>
          <div className={styles.textHeader}>Your rights as a data subject</div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right of access</span> – you have the right to request a copy of the information that we hold about you. You can do that by contacting us through the <a href="/contact" style={{color: "#09B089", textDecoration: "none"}}>Contact Form</a>.</span>
          </div>
          <div className={styles.text}>
            <span>If we do hold information about you we will:</span>
          </div>
          <li className={styles.list}>give you a description of it</li>
          <li className={styles.list}>tell you why we are holding it</li>
          <li className={styles.list}>tell you who it could be disclosed to</li>
          <li className={styles.list}>let you have a copy of the information in an intelligible form</li>
          <div className={styles.text2}>
            <span>Please note that you will need to provide proof of identity – passport, driving licence or birth certificate.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right of rectification </span> – you have a right to correct data that we hold about you that is inaccurate or incomplete.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right to be forgotten</span> – in certain circumstances you can ask for the data we hold about you to be erased from our records by getting in touch via the <a href="/contact" style={{color: "#09B089", textDecoration: "none"}}>contact page</a>.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right to restriction of processing </span> – where certain conditions apply to have a right to restrict the processing.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right of portability </span> – you may have the right to have the data we hold about you transferred to another organisation.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right to object </span> – you have the right to object to certain types of processing such as direct marketing.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right to object to automated processing, including profiling </span> – you also have the right to be subject to the legal effects of automated processing or profiling.</span>
          </div>
          <div className={styles.text3}>
            <span><span style={{fontStyle: "italic"}}>Right to judicial review </span> in the event that Engenious Recruitment refuses your request under rights of access, we will provide you with a reason as to why. You have the right to complain as outlined below.</span>
          </div>
          <div className={styles.textHeader}>Complaints</div>
          <div className={styles.text}>
            <span>We take the processing of your personal data very seriously and are here to help with any concerns you may have. Please do contact us using the <a href="/contact" style={{color: "#09B089", textDecoration: "none"}}>Contact Form</a>.</span>
          </div>
          <div className={styles.text}>
            <span>If you are still not happy with how your personal data is being processed by Engenious Recruitment or how your complaint has been handled, you also have the right to lodge a complaint directly with the Information Commissioners Office at <a href="https://ico.org.uk/concerns/" target="_blank" style={{color: "#09B089", textDecoration: "none"}}> https://ico.org.uk/concerns/</a>or by calling 0303 123 1113.</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PrivacyPolicy