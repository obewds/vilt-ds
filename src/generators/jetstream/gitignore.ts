// ./src/generators/jetstream/gitignore.ts

export default function (jetstreamGitignoreText:string): string {

const prefix = `# ./.gitignore

`

const suffix = `# NPM Remote Credentials File
.npmrc

# Local Project Items
.vscode
.idea
.well-known
.htpasswd
error_log

# MacOS General
.DS_Store
.AppleDouble
.LSOverride

# MacOS Thumbnails
._*

# MacOS Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# MacOS Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

`

/*
const code = `# ./.gitignore

# Laravel 10
/.phpunit.cache
/bootstrap/ssr
/node_modules
/public/build
/public/hot
/public/storage
/storage/*.key
/vendor
.env
.env.backup
.env.production
.phpunit.result.cache
Homestead.json
Homestead.yaml
auth.json
npm-debug.log
yarn-error.log
/.fleet
/.idea
/.vscode

# NPM Remote Credentials File
.npmrc

# Local Project Items
.vscode
.idea
.well-known
.htpasswd
error_log

# MacOS General
.DS_Store
.AppleDouble
.LSOverride

# MacOS Thumbnails
._*

# MacOS Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# MacOS Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

`
*/

const output = prefix + jetstreamGitignoreText + suffix

return output

}
