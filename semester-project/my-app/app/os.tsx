/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
export function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent;

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return "iOS";
    }

    return "unknown";
}
export function checkIfIOS(mobileOS: string, path: string): string{
    if (mobileOS === "iOS") {
        path += ".png";
    } else {
        path += ".svg";
    }

    return path; // Return the modified path
}