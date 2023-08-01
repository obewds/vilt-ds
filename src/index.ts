#!/usr/bin/env node
// ./src/index.ts

import type { ViltDsInstallationChoice } from './helpers/selectInstallation.js'

import cliStartMessage from './helpers/cliStartMessage.js'
import selectInstallation from './helpers/selectInstallation.js'

import installViltDsJetstream from './installers/installViltDsJetstream.js'


let userInstallation: ViltDsInstallationChoice = null

// Show a starting CLI greeting message
cliStartMessage()

// Inquire the type of installation type from the cli user
userInstallation = await selectInstallation()
console.log(' ')

// For a standard installation with an existing
// Laravel + Jetstream install in a current working (root) directory
if (userInstallation === 'Install VILT DS Into A Laravel Jetstream Starter App') {
    installViltDsJetstream()
}
