// ./src/generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.ts

export default function (): string {

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
    // TODO: figure out TS type for all_teams property
    all_teams: Array<any>
    created_at: string // timestamp
    current_team_id: null|number
    // TODO: figure out TS type for current_team property
    current_team: any
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
    // TODO: figure out TS type for errors property
    errors: null|Errors & ErrorBag
    jetstream: JetstreamSharedData
    sessions: Array<JetstreamSessionData>
    ziggy: JetstreamZiggyData
}
`;

}
