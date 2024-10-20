import axios from 'axios';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { render } from '@react-email/render';
import MewDigest from './mew-digest';
import React from 'react';

/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    API_MEWAPP_GRAPHQLAPIIDOUTPUT
    API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
    API_MEWAPP_GRAPHQLAPIKEYOUTPUT
    MAILER_SEND_API_KEY
Amplify Params - DO NOT EDIT */

interface Assignment {
    id: string;
    title: string;
    expiration: string;
    workshop: {
        artwork: {
            path: string;
        };
    };
    artwork: {
        path: string;
    };
    playlist: {
        id: string;
        artwork: {
            path: string;
        };
    };
    workshopId: string;
    playlistExternalUrl: string;
    submissions: {
        items: Submission[];
    };
}

interface Submission {
    breakoutGroupId: string;
    breakoutGroup: {
        id: string;
        name: string;
    };
    profile: {
        id: string;
        email: string;
        displayName: string;
        name: string;
        memberships: {
            items: {
                id: string;
                workshopId: string;
            }[];
        };
        notificationSettings: {
            emailDigest: {
                enabled: boolean;
            };
        };
    };
}

interface Comment {
    email: string;
    content: string;
    submission: {
        breakoutGroupId: string;
        id: string;
        name: string;
    };
    submissionId: string;
    createdAt: string;
    profile: {
        id: string;
        email: string;
        displayName: string;
        name: string;
    };
}

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

export const handler: APIGatewayProxyHandler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    // @ts-ignore
    const { workshopId } = event.arguments;
    const GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT!;
    const GRAPHQL_API_KEY = process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT!;
    const MAILER_SEND_API_KEY = process.env.MAILER_SEND_API_KEY!;

    const generateEmailContent = async (assignment: Assignment, comments: Comment[], groupComments: Comment[], breakoutGroupMembers: Member[], breakoutGroupName?: string) => {
        const html = await render(<MewDigest assignment={assignment} comments={comments} groupComments={groupComments} breakoutGroupMembers={breakoutGroupMembers} breakoutGroupName={breakoutGroupName} />);
        return html;
    };

    const queryGraphQL = async (query: string, variables: any) => {
        const response = await axios.post(
            GRAPHQL_ENDPOINT,
            { query, variables },
            {
                headers: {
                    'x-api-key': GRAPHQL_API_KEY,
                },
            }
        );
        return response.data.data;
    };

    const sendEmail = async (to: string, subject: string, htmlContent: string) => {
        const mailerSend = new MailerSend({
            apiKey: MAILER_SEND_API_KEY,
        });

        const emailParams = new EmailParams()
            .setFrom(new Sender('support@musiceveryweek.org', 'MEW (Music Every Week)'))
            .setTo([new Recipient(to)])
            .setSubject(subject)
            .setHtml(htmlContent);

        await mailerSend.email.send(emailParams);
    };

    const getPastDueAssignments = async (days: number): Promise<Assignment[]> => {
        const query = `
            query listAssignments($filter: ModelFileRequestFilterInput) {
                listFileRequests(filter: $filter) {
                    items {
                        id
                        title
                        expiration
                        workshop {
                            artwork {
                                path
                            }
                        }
                        artwork {
                            path
                        }
                        playlist {
                            id
                            artwork {
                                path
                            }
                        }
                        workshopId
                        playlistExternalUrl
                        submissions {
                            items {
                                breakoutGroupId
                                breakoutGroup {
                                    id
                                    name
                                }
                                profile {
                                    id
                                    email
                                    displayName
                                    avatar
                                    name
                                    memberships {
                                        items {
                                            id
                                            workshopId
                                        }
                                    }
                                    notificationSettings {
                                        emailDigest {
                                            enabled
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;
        const variables = {
            filter: {
                expiration: {
                    between: [new Date(new Date().setDate(new Date().getDate() - days)).toISOString(), new Date().toISOString()]
                },
                workshopId: { eq: workshopId }
            }
        };
        const response = await queryGraphQL(query, variables);
        return response.listFileRequests.items;
    };

    const getCommentsOnSubmissions = async (email: string, onlyUserOrExclude: boolean): Promise<Comment[]> => {
        const query = `
            query GetCommentsOnSubmissions($filter: ModelCommentFilterInput) {
                listComments(filter: $filter) {
                    items {
                        content
                        submission {
                            id
                            name
                            breakoutGroup {
                                id
                                name
                            }
                            breakoutGroupId
                        }
                        submissionId
                        createdAt
                        profile {
                            id
                            email
                            displayName
                            name
                            avatar
                        }
                    }
                }
            }
        `;
        const variables = {
            filter: {
                email: { ne: email },
                recipientEmail: onlyUserOrExclude ? { eq: email } : { ne: email },
                workshopId: { eq: workshopId }
            }
        };
        const response = await queryGraphQL(query, variables);
        return response.listComments.items;
    };

    const getActiveMembers = async (): Promise<Member[]> => {
        const query = `
            query ListMembers($filter: ModelMembershipFilterInput) {
                listMemberships(filter: $filter) {
                    items {
                        id
                        email
                        profile {
                            id
                            avatar
                            displayName
                            name
                        }
                        breakoutGroupId
                        breakoutGroup {
                            id
                            name
                        }
                    }
                }
            }
        `;
        
        const variables = {
            filter: {
                status: {
                    eq: "ACTIVE"
                },
                workshopId: { eq: workshopId }
            }
        };
        const response = await queryGraphQL(query, variables);
        return response.listMemberships.items;
    };

    const days = 7; // Number of days to look back for past due assignments
    const pastDueAssignments = await getPastDueAssignments(days);
    const activeMembers = await getActiveMembers();

    const emailCommentsMap: { [email: string]: { comments: Comment[], groupComments: Comment[], breakoutGroupMembers: Member[], breakoutGroupName?: string, mostRecentAssignment: Assignment | null } } = {};

    for (const assignment of pastDueAssignments) {
        for (const submission of assignment.submissions.items) {
            const email = submission.profile.email;
            const emailDigestEnabled = submission.profile.notificationSettings && submission.profile.notificationSettings.emailDigest && submission.profile.notificationSettings.emailDigest.enabled;
            const member = activeMembers.find(m => m.email === email);
            if (member && emailDigestEnabled) {
                if (!emailCommentsMap[email]) {
                    emailCommentsMap[email] = { comments: [], groupComments: [], breakoutGroupMembers: [], mostRecentAssignment: null };
                }
                const comments = await getCommentsOnSubmissions(email, true);
                const groupComments = await getCommentsOnSubmissions(email, false);
                const userBreakoutGroupId = member.breakoutGroupId;
                // don't include user's own comments in group comments
                let filteredSortedGroupComments = groupComments.filter(c => c.email !== email);
                // if the user is in a breakout group, sort the group comments so that the user's group comments are shown first
                if (userBreakoutGroupId) {
                    filteredSortedGroupComments = groupComments.sort((a, b) => (a.submission?.breakoutGroupId === userBreakoutGroupId ? -1 : 1) - (b.submission?.breakoutGroupId === userBreakoutGroupId ? -1 : 1));
                    emailCommentsMap[email].breakoutGroupMembers = activeMembers.filter(m => m.breakoutGroupId === userBreakoutGroupId).filter(m => m.email !== email);
                    emailCommentsMap[email].breakoutGroupName = member.breakoutGroup.name;
                }
                emailCommentsMap[email].comments.push(...comments);
                emailCommentsMap[email].groupComments.push(...filteredSortedGroupComments);
                emailCommentsMap[email].mostRecentAssignment = assignment;
            }
        }
    }

    for (const [email, { comments, groupComments, breakoutGroupMembers, breakoutGroupName, mostRecentAssignment }] of Object.entries(emailCommentsMap)) {
        const emailContent = await generateEmailContent(mostRecentAssignment!, comments.slice(0, 5), groupComments.slice(0, 5), breakoutGroupMembers, breakoutGroupName);
        await sendEmail(email, `Your Weekly Digest`, emailContent);
    }

    return {
        statusCode: 200,
        // Uncomment below to enable CORS requests
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers": "*"
        // },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
