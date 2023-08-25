// ./src/helpers/cli-warning-message.ts
import gradient from 'gradient-string';
export default function (string, prefixLineBreak, suffixLineBreak) {
    if (prefixLineBreak) {
        console.log(' ');
    }
    console.log(gradient.morning(string));
    if (suffixLineBreak) {
        console.log(' ');
    }
}
//# sourceMappingURL=cli-warning-message.js.map