import React from 'react';
import { Body, Container, Head, Heading, Html, Img, Link, Text, Row, Column } from '@react-email/components';

const baseUrl = process.env.GATSBY_CLOUDFRONT_DISTRIBUTION;
const appUrl = `${process.env.GATSBY_APP_URL}/app`;

type Assignment = {
  id?: string;
  playlistExternalUrl?: string;
  title?: string;
  playlist?: {
    id?: string;
    artwork?: {
      path?: string;
    };
    title?: string;
  };
  artwork?: {
    path?: string;
  };
  workshop?: {
    artwork?: {
      path?: string;
    };
  };
};

type Comment = {
  profile: {
    id: string;
    displayName?: string;
    name?: string;
    avatar?: string;
  };
  createdAt: string;
  content: string;
  assignment?: {
    id: string;
    playlistExternalUrl?: string;
    fileRequestPlaylistId?: string;
  };
  assignmentId?: string;
  submission?: {
    id: string;
    name: string;
  };
};

interface Member {
  id: string;
  email: string;
  profile: {
      id: string;
      avatar: string;
      displayName: string;
      name: string;
  };
  breakoutGroupId: string;
  breakoutGroup: {
      name: string;
  };
}

type MewDigestProps = {
  assignment: Assignment;
  comments: Comment[]; // comments for the user
  groupComments: Comment[]; // comments for the user's group
  breakoutGroupMembers: Member[]; // members of the user's breakout group
  breakoutGroupName: string; // name of the user's breakout group
};

const MewDigest = ({ assignment = {}, comments = [], groupComments = [], breakoutGroupMembers = [], breakoutGroupName }: MewDigestProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <Container>
          <header style={{ backgroundColor: '#f8f8f8', padding: '10px 20px', textAlign: 'center' }}>
          <Img
          src={`${baseUrl}/public/media/mewlogo.png`}
          width="212"
          height="212"
          alt="MEW"
          style={logo}
        />
          </header>
          <main style={{ padding: '20px' }}>
            <section style={{ marginBottom: '20px', textAlign: 'center' }}>
              <Heading as="h2" style={{ textAlign: 'center', color: '#333' }}>Check out the latest activity on the MEW app!</Heading>
              <Link href={assignment?.playlistExternalUrl || assignment?.playlist?.id ? `${appUrl}/playlists/${assignment?.playlist?.id}` : `${appUrl}/assignments/${assignment?.id}/playlist`} style={{ textDecoration: 'none', color: '#333' }}>
              <Img src={`${baseUrl}/public/${assignment?.playlist?.artwork?.path || assignment?.artwork?.path || assignment?.workshop?.artwork?.path}`} alt="Playlist Cover" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', display: 'block', margin: '0 auto' }} />
              <Text>{assignment?.playlist?.title || assignment?.title}</Text>
              </Link>
            </section>
            { comments.length > 0 && (<section>
              <Heading as="h3" style={{ color: '#333' }}>Recent Feedback for You</Heading>
              <Text>(Below is a selection of {comments.length > 5 ? 5 : comments.length} of the most recent comments. <Link href={`${appUrl}/feedback`} style={{ textDecoration: 'none', color: '#E092A2' }}>See more in the app.</Link>)</Text>
                <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
                {comments.map((comment, index) => (
                  <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' }}>
                  <Container style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Row style={{ gap: '10px', alignItems: 'center', width: '100%' }}>
                    <Column style={{ flex: '0 0 auto' }}>
                      <Link href={`${appUrl}/profile/${comment.profile.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                      <Img src={`${baseUrl}/public/${comment?.profile?.avatar || 'media/mewlogo.png'}`} alt={comment?.profile?.displayName || comment?.profile?.name} style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} />
                      </Link>
                    </Column>
                    <Column style={{ flex: '1', padding: '0 10px' }}>
                      <strong>{comment?.profile?.displayName || comment?.profile?.name || 'Anonymous'}</strong>
                      <Text style={{ margin: 0, color: '#999' }}>{new Date(comment?.createdAt).toLocaleDateString()}</Text>
                      <Link style={link} href={comment?.assignment?.playlistExternalUrl || (comment.assignment?.fileRequestPlaylistId ? `${appUrl}/playlists/${comment.assignment?.fileRequestPlaylistId}?track=${comment?.submission?.id}` : `${appUrl}/assignments/${comment.assignment?.id}/playlist?track=${comment?.submission?.id}`)}>
                      <Text>{comment?.submission?.name}</Text>
                      </Link>
                    </Column>                    
                    <Column style={{ flex: '2', padding: '0 10px' }}>
                      <Text style={{ marginTop: '10px' }}>{comment?.content}</Text>
                    </Column>

                    </Row>
                  </Container>
                  </li>
                ))}
                </ul>
            </section>)}
            {groupComments.length > 0 && (<section>
              <Heading as="h3" style={{ color: '#333' }}>Recent Activity From Your Group</Heading>
              <Text>(Below is just a selection of {groupComments.length > 5 ? 5 : groupComments.length} of the most recent comments. <Link href={`${appUrl}/feedback`} style={{ textDecoration: 'none', color: '#E092A2' }}>See more in the app.</Link>)</Text>
                <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
                {groupComments.map((comment, index) => (
                  <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' }}>
                  <Container style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Row style={{ gap: '10px', alignItems: 'center', width: '100%' }}>
                    <Column style={{ flex: '0 0 auto' }}>
                      <Link href={`${appUrl}/profile/${comment.profile.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                      <Img src={`${baseUrl}/public/${comment?.profile?.avatar || 'media/mewlogo.png'}`} alt={comment?.profile?.displayName || comment?.profile?.name} style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} />
                      </Link>
                    </Column>
                    <Column style={{ flex: '1', padding: '0 10px' }}>
                      <strong>{comment?.profile?.displayName || comment?.profile?.name || 'Anonymous'}</strong>
                      <Text style={{ margin: 0, color: '#999' }}>{new Date(comment?.createdAt).toLocaleDateString()}</Text>
                      <Link style={link} href={comment?.assignment?.playlistExternalUrl || (comment.assignment?.fileRequestPlaylistId ? `${appUrl}/playlists/${comment.assignment?.fileRequestPlaylistId}?track=${comment?.submission?.id}` : `${appUrl}/assignments/${comment.assignment?.id}/playlist?track=${comment?.submission?.id}`)}>
                      <Text>{comment?.submission?.name}</Text>
                      </Link>
                    </Column>
                    <Column style={{ flex: '2', padding: '0 10px' }}>
                      <Text style={{ marginTop: '10px' }}>{comment?.content}</Text>
                    </Column>
                    </Row>
                  </Container>
                  </li>
                ))}
                </ul>
            </section>)}
            {breakoutGroupName && breakoutGroupMembers.length > 0 && (
              <section>
                <Heading as="h3" style={{ color: '#333' }}>Keep up with members in the <em>{breakoutGroupName}</em> group:</Heading>
                <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
                  {breakoutGroupMembers.map((member, index) => (
                    <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' }}>
                      <Container style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <Row style={{ gap: '10px', alignItems: 'center', width: '100%' }}>
                        <Column style={{ flex: '0 0 auto' }}>
                        <Link href={`${appUrl}/profile/${member.profile.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                          <Img src={`${baseUrl}/public/${member.profile.avatar || 'media/mewlogo.png'}`} alt={member.profile.displayName || member.profile.name} style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} />
                        </Link>
                        </Column>
                        <Column style={{ flex: '1', padding: '0 10px' }}>
                        <strong>{member.profile.displayName || member.profile.name || 'Anonymous'}</strong>
                        </Column>
                        <Column style={{ flex: '0 0 auto' }}>
                        <Link href={`mailto:${member.email}`} style={{ textDecoration: 'none', color: '#333' }}>
                          <Text>Send Email</Text>
                        </Link>
                        </Column>
                      </Row>
                      </Container>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>
          <footer style={{ backgroundColor: '#f8f8f8', padding: '10px 20px', textAlign: 'center' }}>
            <Text style={{ margin: 0 }}>You are receiving this email because you have email digest notifications enabled in the MEW app. Manage your notifications in your <Link href="https://www.musiceveryweek.org/app/profile/edit" style={link}>profile</Link>.</Text>
          </footer>
        </Container>
      </Body>
    </Html>
  );
};

export default MewDigest;


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
  color: '#E092A2',
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
