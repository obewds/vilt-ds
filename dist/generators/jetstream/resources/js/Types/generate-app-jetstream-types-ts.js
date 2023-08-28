// ./src/generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.ts
export default function () {
    return `// ./resources/js/Types/app-jetstream-types.ts

import type { Errors, ErrorBag, PageProps } from '@inertiajs/core'


export interface JetstreamSessionAgentData {
    browser: string
    is_desktop: boolean
    platform: string
}

export interface JetstreamSessionData {
    agent: JetstreamSessionAgentData
    ip_address: string
    is_current_device: boolean
    last_active: string
}

export type JetstreamApiPermission = 'create'|'read'|'update'|'delete'|string

export interface JetstreamApiTokenData {
    abilities: Array<JetstreamApiPermission>
    created_at: string // timestamp
    expires_at: null|string // timestamp
    id: number
    last_used_ago: null|string // timestamp
    last_used_at: null|string // timestamp
    name: string
    tokenable_id: number
    tokenable_type: string
}

export interface JetstreamTeamOwnerData {
    created_at: string // timestamp
    current_team_id: null|number
    email: string
    email_verified_at: null|string // timestamp
    id: number
    name: string
    profile_photo_path: null|string
    profile_photo_url: string
    two_factor_confirmed_at: null|string
    updated_at: string // timestamp
}

export interface JetstreamTeamInvitation {
    created_at: string // timestamp
    email: string
    id: number
    role: string
    team_id: number
    updated_at: string // timestamp
}

export interface JetstreamTeamMembership {
    created_at: string // timestamp
    role: string
    team_id: number
    updated_at: string // timestamp
    user_id: number
}

export interface JetstreamTeamMember {
    created_at: string // timestamp
    current_team_id: number
    email: string
    email_verified_at: null|string
    id: number
    membership: JetstreamTeamMembership
    name: string
    profile_photo_path: null|string
    profile_photo_url: string
    two_factor_confirmed_at: null|string
    updated_at: string // timestamp
}

export interface JetstreamTeamData {
    created_at: string // timestamp
    id: number
    name: string
    owner: JetstreamTeamOwnerData
    personal_team: boolean
    team_invitations: Array<JetstreamTeamInvitation>
    updated_at: string // timestamp
    user_id: number
    users: Array<JetstreamTeamMember>
}

export interface JetstreamTeamRoleData {
    description: string
    key: string
    name: string
    permissions: Array<'create'|'read'|'update'|'delete'|string>
}

export interface JetstreamTeamPermissionsData {
    canAddTeamMembers: boolean
    canDeleteTeam: boolean
    canRemoveTeamMembers: boolean
    canUpdateTeam: boolean
    canUpdateTeamMembers: boolean
}

export interface JetstreamUserTeamData {
    created_at: string // timestamp
    id: number
    name: string
    personal_team: boolean
    updated_at: string // timestamp
    user_id: number
}

export interface JetstreamSharedFlashData {
    banner?: string
    bannerStyle?: string
    token?: string
}

export interface JetstreamSharedData {
    canCreateTeams: boolean
    canManageTwoFactorAuthentication: boolean
    canUpdatePassword: boolean
    canUpdateProfileInformation: boolean
    flash: JetstreamSharedFlashData
    hasAccountDeletionFeatures: boolean
    hasApiFeatures: boolean
    hasEmailVerification: boolean
    hasTeamFeatures: boolean
    hasTermsAndPrivacyPolicyFeature: boolean
    managesProfilePhotos: boolean
}

export interface JetstreamAuthUser {
    all_teams: Array<JetstreamUserTeamData>
    created_at: string // timestamp
    current_team_id: null|number
    current_team: JetstreamUserTeamData
    email: string
    email_verified_at: null|string // timestamp
    id: number
    name: string
    profile_photo_path: null|string
    profile_photo_url: string
    tokens: Array<JetstreamApiTokenData>
    two_factor_confirmed_at: string
    two_factor_enabled: boolean
    updated_at: string // timestamp
}

export interface JetstreamAuthData {
    user: JetstreamAuthUser
}

export type JetstreamZiggyRouteMethods = 'DELETE'|'GET'|'HEAD'|'POST'|'PUT'|string

export interface JetstreamZiggyRouteData {
    methods: Array<JetstreamZiggyRouteMethods>
    uri: string
}

export interface JetstreamZiggyRoutes {
    [key:string]: JetstreamZiggyRouteData
}

export interface JetstreamZiggyData {
    // TODO: figure out TS type for defaults property
    defaults: Array<any>
    location: string
    // TODO: figure out TS type for port property is null|number or null|string or null|number|string
    port: null|number|string
    routes: JetstreamZiggyRoutes
    url: string
}

export interface UsePageSharedDataProps extends PageProps {
    auth: JetstreamAuthData
    availablePermissions: Array<JetstreamApiPermission>
    confirmsTwoFactorAuthentication: boolean
    defaultPermissions: Array<JetstreamApiPermission>
    // TODO: figure out TS type for errorBags property
    errorBags: any[]
    errors: null|Errors & ErrorBag
    jetstream: JetstreamSharedData
    sessions: Array<JetstreamSessionData>
    ziggy: JetstreamZiggyData
}
`;
}
//# sourceMappingURL=generate-app-jetstream-types-ts.js.map