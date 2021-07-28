import * as permissionInfo from "./permissionsInfo.json";

function hasPermission(siteRole: string, permission: string): boolean {
    return permissionInfo["permissions"][siteRole] >= permissionInfo["actions"][permission];
}

export {hasPermission};