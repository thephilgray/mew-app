import React from "react";
import {
    Home, Person, Groups, ManageAccounts, Extension, GroupAdd, EditAttributes, Workspaces,
    Forum, Assignment, ModeEdit, PlaylistPlay, AssignmentTurnedIn, SendTimeExtension,
    PlaylistAdd, List, PlaylistAddCircle, Terminal, AppSettingsAlt, PostAdd, Grass, AssignmentReturn, Feedback, Map, LibraryMusic
} from "@mui/icons-material";
import { pathToRegexp } from "path-to-regexp";
import MySubmissions from "./components/Submissions/MySubmissions";

export const KEYS = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B']

export const SCALES = [
    'Ionian (Major)',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Aeolian (Natural minor)',
    'Locrian',
    'Chromatic',
    'Harmonic minor',
    'Diminished/octatonic',
    'Whole tone',
    'Major Pentatonic',
    'Minor Pentatonic',
    'maj6 diminished',
    'min6 diminished',
    '7dim',
    '7b5dim',
    'Ascending melodic minor',
    'Dorian ♭2 (Phrygian ♯6)',
    'Lydian augmented',
    'Lydian dominant',
    'Mixolydian ♭6',
    'Half-diminished',
    'Altered (Super Locrian)'
]

export const INSTRUMENTS = [
    'Acoustic',
    'Electric Guitar',
    'Bass',
    'Piano',
    'Organ',
    'Keyboard',
    'Synth (lead)',
    'Synth (pad)',
    'Synth (bass)',
    'Drum kit',
    'Drum machine',
    'Drums (sampled)',
    'Percussion',
    'Brass',
    'Strings (bowed)',
    'Strings (plucked)',
    'Vocals (spoken)',
    'Vocals (lead)',
    'Vocals (backing)',
    'Vocals (choir)',
    'Sampled'
]


export const EXTENSIONS_BY_FILETYPE = {
    'audio/wav': '.wav',
    'audio/s-wav': '.wav',
    'audio/x-wav': '.wav',
    'audio/aiff': '.aiff',
    'audio/x-aiff': '.aiff',
    'audio/mpeg': '.mp3',
    'audio/mp3': '.mp3',
    'audio/mpeg3': '.mp3',
    'audio/mpg': '.mp3',
    'audio/x-mp3': '.mp3',
    'audio/x-mpeg': '.mp3',
    'audio/x-mpeg3': '.mp3',
    'audio/x-mpg': '.mp3',
    'audio/mp4': '.mp4',
    'audio/m4a': '.m4a',
    'audio/x-m4a': '.m4a',
    'audio/ogg': '.ogg',
    'audio/midi': '.mid',
    'audio/x-midi': '.midi'
}

export const ACCEPTED_FILETYPES = [
    'audio/wav',
    'audio/s-wav',
    'audio/x-wav',
    // 'audio/aiff',
    // 'audio/x-aiff',
    'audio/mpeg',
    'audio/mp3',
    'audio/mpeg3',
    'audio/mpg',
    'audio/x-mp3',
    'audio/x-mpeg',
    'audio/x-mpeg3',
    'audio/x-mpg',
    'audio/mp4',
    'audio/m4a',
    'audio/x-m4a',
    'audio/ogg',
]

export enum Group {
    admin = 'admin',
    editor = 'editor',
    member = 'member',
    community = 'community',
    cognito_admin = 'cognito_admin'
}

export enum ROUTE_NAMES {
    HOME = 'home',
    PROFILE = 'profile',
    VIEW_PROFILE = 'viewProfile',
    EDIT_PROFILE = 'editProfile',
    WORKSHOPS = 'workshops',
    WORKSHOP = 'workshop',
    NEW_WORKSHOP = 'newWorkshop',
    EDIT_WORKSHOP = 'editWorkshop',
    WORKSHOP_MEMBERS = 'workshopMembers',
    WORKSHOP_MEMBERS_MAP = 'workshopMembersMap',
    WORKSHOP_FEEDBACK = 'workshopFeedback',
    WORKSHOP_STEMS = 'workshopStems',
    ASSIGNMENT_PLAYLIST = 'assignmentPlaylist',
    ASSIGNMENTS = 'assignments',
    ASSIGNMENT = 'assignment',
    NEW_ASSIGNMENT = 'newAssignment',
    EDIT_ASSIGNMENT = 'editAssignment',
    ASSIGNMENT_GIVE_FEEDBACK = 'assignmentGiveFeedback',
    NEW_SUBMISSION = 'newPublicSubmission',
    EDIT_SUBMISSION = 'editPublicSubmission',
    NEW_SUBMISSION_EXTENSION = 'newPublicSubmissionExtension',
    MY_SUBMISSIONS = 'mySubmissions',
    PLAYLISTS = 'playlists',
    PLAYLIST = 'playlist',
    NEW_PLAYLIST = 'newPlaylist',
    EDIT_PLAYLIST = 'editPlaylist',
    FEEDBACK = 'feedback',
    // NEW_FEEDBACK = 'newFeedback', //maybe
    STEMS = 'stems',
    NEW_STEM = 'newStem',
    PROMPTS = 'prompts',
    NEW_PROMPT = 'newPrompt',
    SITE_SETTINGS = 'siteSettings',
    PROFILE_CONNECTED_APPS = 'profileConnectedApps', // openAI oauth for all, mailchimp and youtube for admins
}

const defaultNav = [ROUTE_NAMES.WORKSHOPS, ROUTE_NAMES.ASSIGNMENTS, ROUTE_NAMES.PLAYLISTS, ROUTE_NAMES.FEEDBACK, ROUTE_NAMES.MY_SUBMISSIONS];
const workshopNav = [...defaultNav, ROUTE_NAMES.WORKSHOP_MEMBERS_MAP]

export const ROUTES: { [key in ROUTE_NAMES]?: any } = {
    [ROUTE_NAMES.HOME]: {
        path: '/app',
        name: 'Home',
        navPaths: defaultNav,
        icon: props => <Home {...props} />,
    },
    [ROUTE_NAMES.PROFILE]: {
        path: '/app/profile',
        name: 'Profile',
        navPaths: defaultNav,
        icon: props => <Person {...props} />,

    },
    [ROUTE_NAMES.VIEW_PROFILE]: {
        path: '/app/profile/:profileId',
        getPath: ({ profileId = '' }): string => `/app/profile/${profileId}`,
        navPaths: defaultNav,
        name: 'Profile',
        icon: props => <Person {...props} />,
    },
    [ROUTE_NAMES.EDIT_PROFILE]: {
        path: '/app/profile/edit',
        name: 'Edit Profile',
        navPaths: defaultNav,
        icon: props => <ManageAccounts {...props} />,
    },
    [ROUTE_NAMES.PROFILE_CONNECTED_APPS]: {
        path: '/app/profile/connectedApps',
        name: 'My Connected Apps',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Extension {...props} />,
    },
    [ROUTE_NAMES.WORKSHOPS]: {
        path: '/app/workshops',
        name: 'Workshops',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Workspaces {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP]: {
        path: '/app/workshops/:workshopId',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}`,
        getName: ({ name = '' }): string => name,
        name: 'Workshop',
        navPaths: workshopNav,
        groups: [Group.admin, Group.member],
        icon: props => <Groups {...props} />,
    },
    [ROUTE_NAMES.NEW_WORKSHOP]: {
        path: '/app/workshops/new',
        name: 'New Workshop',
        navPaths: defaultNav,
        groups: [Group.admin],
        icon: props => <GroupAdd {...props} />,
    },
    [ROUTE_NAMES.EDIT_WORKSHOP]: {
        path: '/app/workshops/:workshopId/settings',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/settings`,
        name: 'Settings',
        navPaths: workshopNav,
        groups: [Group.admin],
        icon: props => <EditAttributes {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_MEMBERS]: {
        path: '/app/workshops/:workshopId/members',
        name: 'Members',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/members`,
        navPaths: workshopNav,
        groups: [Group.admin],
        icon: props => <Groups {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_MEMBERS_MAP]: {
        path: '/app/workshops/:workshopId/members/map',
        name: 'Members Map',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/members/map`,
        navPaths: workshopNav,
        groups: [Group.admin, Group.member],
        icon: props => <Map {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_FEEDBACK]: {
        path: '/app/workshops/:workshopId/feedback',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/feedback`,
        name: 'Feedback',
        navPaths: workshopNav,
        groups: [Group.admin, Group.member],
        icon: props => <Forum {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_STEMS]: {
        path: '/app/workshops/:workshopId/stems',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/stems`,
        name: 'Stems',
        navPaths: workshopNav,
        groups: [Group.admin, Group.member],
        icon: props => <Grass {...props} />,
    },
    [ROUTE_NAMES.ASSIGNMENTS]: {
        path: '/app/assignments',
        getName: ({ title = '' }): string => title,
        name: 'Assignments',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Assignment {...props} />,
    },
    [ROUTE_NAMES.ASSIGNMENT]: {
        path: '/app/assignments/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}`,
        getName: ({ title = '' }): string => title,
        name: 'Assignment',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Assignment {...props} />,
    },
    [ROUTE_NAMES.NEW_ASSIGNMENT]: {
        path: '/app/workshops/:workshopId/new-assignment',
        name: 'New Assignment',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/new-assignment`,
        navPaths: workshopNav,
        groups: [Group.admin],
        icon: props => <Assignment {...props} />,
    },
    [ROUTE_NAMES.EDIT_ASSIGNMENT]: {
        path: '/app/assignments/:assignmentId/edit',
        name: 'Edit',
        groups: [Group.admin],
        navPaths: defaultNav,
        breadcrumbPaths: [ROUTE_NAMES.HOME, ROUTE_NAMES.WORKSHOP, ROUTE_NAMES.EDIT_ASSIGNMENT],
        icon: props => <ModeEdit {...props} />,
    },
    [ROUTE_NAMES.ASSIGNMENT_PLAYLIST]: {
        path: '/app/assignments/:assignmentId/playlist',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}/playlist`,
        navPaths: defaultNav,
        name: 'Playlist',
        icon: props => <PlaylistPlay {...props} />,
        public: true
    },
    [ROUTE_NAMES.ASSIGNMENT_GIVE_FEEDBACK]: {
        path: '/app/assignments/:assignmentId/give-feedback',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}/give-feedback`,
        navPaths: defaultNav,
        name: 'Give Feedback',
        groups: [Group.admin, Group.member],
        icon: props => <Feedback {...props} />,
    },
    [ROUTE_NAMES.NEW_SUBMISSION]: {
        path: '/app/submissions/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/submissions/${assignmentId}`,
        navPaths: defaultNav,
        name: 'New Submission',
        icon: props => <AssignmentTurnedIn {...props} />,
        public: true
    },
    [ROUTE_NAMES.EDIT_SUBMISSION]: {
        path: '/app/submissions/:submissionId/edit',
        getPath: ({ submissionId = '' }): string => `/app/submissions/${submissionId}/edit`,
        navPaths: defaultNav,
        name: 'Edit Submission',
        groups: [Group.admin, Group.member],
        icon: props => <AssignmentReturn {...props} />,
    },
    [ROUTE_NAMES.NEW_SUBMISSION_EXTENSION]: {
        path: '/app/submissions/:assignmentId/:extensionCode',
        getPath: ({ assignmentId = '', extensionCode = '' }): string =>
            `/app/submissions/${assignmentId}/${extensionCode}`,
        name: 'New Submission (Extension)',
        navPaths: defaultNav,
        icon: props => <SendTimeExtension {...props} />,
        public: true
    },
    [ROUTE_NAMES.MY_SUBMISSIONS]: {
        path: '/app/my-submissions',
        navPaths: defaultNav,
        name: 'My Submissions',
        groups: [Group.admin, Group.member],
        icon: props => <LibraryMusic {...props} />,
    },
    [ROUTE_NAMES.PLAYLISTS]: {
        path: '/app/playlists',
        name: 'Playlists',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <PlaylistPlay {...props} />,
    },
    [ROUTE_NAMES.PLAYLIST]: {
        path: '/app/playlists/:playlistId',
        getPath: ({ playlistId = '' }): string => `/app/playlists/${playlistId}`,
        name: 'Playlist',
        navPaths: defaultNav,
        icon: props => <PlaylistPlay {...props} />,
        public: true
    },
    [ROUTE_NAMES.NEW_PLAYLIST]: {
        path: '/app/playlists/new',
        name: 'New Playlist',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <PlaylistAdd {...props} />,
    },
    [ROUTE_NAMES.EDIT_PLAYLIST]: {
        path: '/app/playlists/:playlistId/edit',
        getPath: ({ playlistId = '' }): string => `/app/playlists/${playlistId}/edit`,
        name: 'Edit Playlist',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <List {...props} />,
    },
    [ROUTE_NAMES.FEEDBACK]: {
        path: '/app/feedback',
        name: 'Feedback',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Forum {...props} />,
    },
    [ROUTE_NAMES.STEMS]: {
        path: '/app/stems',
        name: 'Stems',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Grass {...props} />,
    },
    [ROUTE_NAMES.NEW_STEM]: {
        path: '/app/stems/new',
        name: 'New Stem',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <PlaylistAddCircle {...props} />,
    },
    [ROUTE_NAMES.PROMPTS]: {
        path: '/app/prompts',
        name: 'Prompts',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Terminal {...props} />,
    },
    [ROUTE_NAMES.NEW_PROMPT]: {
        path: '/app/prompts/new',
        name: 'New Prompt',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <PostAdd {...props} />,
    },
    [ROUTE_NAMES.SITE_SETTINGS]: {
        path: '/app/settings',
        name: 'Site Settings',
        navPaths: defaultNav,
        groups: [Group.admin],
        icon: props => <AppSettingsAlt {...props} />,
    }
}

export const MAPPED_ROUTE_CONFIGS = Object.entries(ROUTES).map(([routeName, config = {}]) => ({ ...config, routeName, pathRegex: pathToRegexp(config.path) }))

// TODO: ADD Storage Paths with dynamic getters similar to ROUTES above

export const DEFAULT_WORKSHOP_TIMEZONE = 'America/Los_Angeles';

export const FEEDBACK_CATEGORIES = [
    {
        label: 'Instrumental/Vocal Technique',
        group: 'Performance',
        description: 'Assess the musicianship and proficiency of the performers, including their technical skills, tone quality, intonation, timing, and expressiveness.',
    },
    {
        label: 'Emotional Delivery',
        group: 'Performance',
        description: "Evaluate the performers' ability to convey emotion and connect with the audience through their interpretation of the music.",
    },
    {
        label: 'Audio Quality',
        group: 'Production Quality',
        description: 'Evaluate the clarity, balance, and fidelity of the audio recording, including factors such as recording techniques, microphone placement, and room acoustics.',
    },
    {
        label: 'Mixing and Mastering',
        group: 'Production Quality',
        description: 'Assess the balance and coherence of individual tracks within the mix, as well as the overall sonic cohesion achieved through mixing and mastering processes.',
    },
    {
        label: 'Songwriting',
        group: 'Composition and Arrangement',
        description: 'Evaluate the strength of the composition, including melody, harmony, rhythm, structure, and lyrics (if applicable).',
    },
    {
        label: 'Arrangement',
        group: 'Composition and Arrangement',
        description: 'Assess how well the various musical elements (e.g., instrumentation, vocal harmonies, dynamics) are arranged and integrated within the composition.',
    },
    {
        label: 'Innovation',
        group: 'Creativity and Originality',
        description: 'Evaluate the creativity and originality of the music, including unique stylistic elements, innovative techniques, or unconventional approaches to composition and production.',
    },
    {
        label: 'Individuality',
        group: 'Creativity and Originality',
        description: "Consider whether the recording showcases the artist's distinct voice, personality, or artistic vision, and whether it offers something new or different within its genre or style.",
    },
    {
        label: 'Impact',
        group: 'Audience Engagement',
        description: "Assess the overall impact and effectiveness of the recording in capturing the listener's attention, evoking emotion, and creating a memorable experience.",
    },
    {
        label: 'Accessibility',
        group: 'Audience Engagement',
        description: 'Consider the accessibility of the music to a broader audience, including factors such as appeal, relevance, and potential for commercial success.',
    },
    {
        label: 'Editing',
        group: 'Technical Considerations',
        description: 'Evaluate the precision and cleanliness of any edits made to the recording, such as splicing, comping, or pitch correction.',
    },
    {
        label: 'Technical Issues',
        group: 'Technical Considerations',
        description: 'Identify any technical issues or flaws in the recording, such as background noise, distortion, clipping, or timing discrepancies.',
    },
    {
        label: 'Alignment with Intent',
        group: 'Artistic Intent and Vision',
        description: "Assess how well the recording aligns with the artist's intended vision, artistic goals, and thematic concepts.",
    },
    {
        label: 'Coherence and Consistency',
        group: 'Artistic Intent and Vision',
        description: 'Consider whether the recording maintains a cohesive and consistent artistic identity throughout its duration.',
    },
];