// ./cli/helpers/cliWarningMessage.ts
import gradient from 'gradient-string';
export default function (string, prefixLineBreak = false, suffixLineBreak = false) {
    if (prefixLineBreak) {
        console.log(' ');
    }
    console.log(gradient.morning(string));
    if (suffixLineBreak) {
        console.log(' ');
    }
}
//# sourceMappingURL=cliWarningMessage.js.map