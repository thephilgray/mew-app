import React from "react";
import {
    Home, Person, Groups, ManageAccounts, Extension, GroupAdd, EditAttributes, Workspaces,
    Forum, Assignment, ModeEdit, PlaylistPlay, AssignmentTurnedIn, SendTimeExtension,
    PlaylistAdd, List, PlaylistAddCircle, Terminal, AppSettingsAlt, PostAdd, Grass
} from "@mui/icons-material";
import { pathToRegexp } from "path-to-regexp";

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

export enum Group {
    admin = 'admin',
    editor = 'editor',
    member = 'member',
    community = 'community',
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
    WORKSHOP_FEEDBACK = 'workshopFeedback',
    WORKSHOP_STEMS = 'workshopStems',
    ASSIGNMENT_PLAYLIST = 'assignmentPlaylist',
    ASSIGNMENTS = 'assignments',
    ASSIGNMENT = 'assignment',
    NEW_ASSIGNMENT = 'newAssignment',
    EDIT_ASSIGNMENT = 'editAssignment',
    NEW_SUBMISSION = 'newPublicSubmission',
    NEW_SUBMISSION_EXTENSION = 'newPublicSubmissionExtension',
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
    PROFILE_CONNECTED_APPS = 'profileConnectedApps' // openAI oauth for all, mailchimp and youtube for admins
}

const defaultNav = [ROUTE_NAMES.WORKSHOPS, ROUTE_NAMES.ASSIGNMENTS, ROUTE_NAMES.PLAYLISTS, ROUTE_NAMES.FEEDBACK, ROUTE_NAMES.STEMS, ROUTE_NAMES.PROMPTS];

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
        navPaths: defaultNav,
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
        navPaths: defaultNav,
        groups: [Group.admin],
        icon: props => <EditAttributes {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_MEMBERS]: {
        path: '/app/workshops/:workshopId/members',
        name: 'Members',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/members`,
        navPaths: defaultNav,
        groups: [Group.admin],
        icon: props => <Groups {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_FEEDBACK]: {
        path: '/app/workshops/:workshopId/feedback',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/feedback`,
        name: 'Feedback',
        navPaths: defaultNav,
        groups: [Group.admin, Group.member],
        icon: props => <Forum {...props} />,
    },
    [ROUTE_NAMES.WORKSHOP_STEMS]: {
        path: '/app/workshops/:workshopId/stems',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/stems`,
        name: 'Stems',
        navPaths: defaultNav,
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
        navPaths: defaultNav,
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
    [ROUTE_NAMES.NEW_SUBMISSION]: {
        path: '/app/submissions/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/submissions/${assignmentId}`,
        navPaths: defaultNav,
        name: 'New Submission',
        icon: props => <AssignmentTurnedIn {...props} />,
        public: true
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
        groups: [Group.admin],
        icon: props => <Terminal {...props} />,
    },
    [ROUTE_NAMES.NEW_PROMPT]: {
        path: '/app/prompts/new',
        name: 'New Prompt',
        navPaths: defaultNav,
        groups: [Group.admin],
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
