// ./cli/helpers/cli-start-message.ts

import gradientText from './gradient-text.js'

export default function (): void {

// show cli start message
console.log(`


    ${gradientText('Welcome to the VILT DS CLI!')}
    ${gradientText('---------------------------')}
    Install VILT/Jetstream stack starter files with VILT DS powered by VueVentus.


`)

}
