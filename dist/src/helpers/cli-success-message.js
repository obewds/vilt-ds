// ./src/helpers/cli-success-message.ts
import gradientText from './gradient-text.js';
export default function (string, prefixLineBreak, suffixLineBreak) {
    if (prefixLineBreak) {
        console.log(' ');
    }
    console.log(gradientText(string));
    if (suffixLineBreak) {
        console.log(' ');
    }
}
//# sourceMappingURL=cli-success-message.js.map