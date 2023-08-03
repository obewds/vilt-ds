// ./cli/helpers/cli-success-message.ts

import gradientText from './gradient-text.js'

export default function (string:string, prefixLineBreak:boolean, suffixLineBreak:boolean): void {

    if (prefixLineBreak) { console.log(' ') }

    console.log(gradientText(string))

    if (suffixLineBreak) { console.log(' ') }

}
