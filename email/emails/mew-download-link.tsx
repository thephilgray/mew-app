import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Text,
} from '@react-email/components';
import * as React from 'react';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env.production') })

interface MewDownloadLinkProps {
  downloadLink?: string;
  expiration?: string;
}

const baseUrl = process.env.GATSBY_CLOUDFRONT_DISTRIBUTION

export const MewLoginCode = ({
  downloadLink = '',
  expiration = new Date().toDateString()
}: MewDownloadLinkProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/public/media/mewlogo.png`}
          width="212"
          height="212"
          alt="MEW"
          style={logo}
        />
        <Text style={tertiary}>Secret Download Link</Text>
        <Heading style={secondary}>
          Click the button below to download .zip file.
        </Heading>
        <Button
          href={downloadLink}
          style={button}
        >
          Download
        </Button>
        <Text style={small}>*This link will expire on {expiration}. Please do not share the link.</Text>
        <br />
        <Text style={paragraph}>Not expecting this email?</Text>
        <Text style={paragraph}>
          Contact{' '}
          <Link href="mailto:support@musiceveryweek.org" style={link}>
            support@musiceveryweek.org
          </Link>{' '}
          if you did not request this download link.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default MewLoginCode;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  width: '360px',
  margin: '0 auto',
  padding: '68px 0 130px',
  textAlign: "center"
};

const logo = {
  margin: '0 auto',
};

const tertiary = {
  color: '#E092A2',
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '16px 8px 8px 8px',
  textTransform: 'uppercase' as const,
  textAlign: 'center' as const,
};

const secondary = {
  color: '#63625E',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '0',
  textAlign: 'center' as const,
};

const codeContainer = {
  background: 'rgba(0,0,0,.05)',
  borderRadius: '4px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '280px',
};

const code = {
  color: '#E092A2',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Bold',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: "#E092A2",
  color: "#fff",
  borderRadius: "0.5em",
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Bold',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '16px auto',
  width: '100%',
  textAlign: 'center' as const,
};


const paragraph = {
  color: '#63625E',
  fontSize: '15px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center' as const,
};

const small = {
  color: '#63625E',
  fontSize: '12px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '18px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center' as const,
};

const link = {
  color: '#241c15',
  textDecoration: 'underline',
};

const footer = {
  color: '#63625E',
  fontSize: '12px',
  fontWeight: 800,
  letterSpacing: '0',
  lineHeight: '23px',
  margin: '0',
  marginTop: '20px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
};
