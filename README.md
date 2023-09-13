# The VILT Design System
The official repository for the VILT Design System for the Vue.js, Inertia.js, Laravel, and Tailwind CSS web app stack that is turbocharged with Typescript, Vitest and VueVentus.

![GitHub package.json version](https://img.shields.io/github/package-json/v/obewds/vilt-ds?label=Github&logo=github&style=for-the-badge) &nbsp; ![npm](https://img.shields.io/npm/v/@obewds/vilt-ds?color=%23cc3534&logo=npm&style=for-the-badge)



![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![Inertia.js](https://img.shields.io/badge/inertia.js-%239553E9.svg?style=for-the-badge&logo=inertia&logoColor=%23ffffff) &nbsp; ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=%23ffffff) &nbsp; ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp; ![VueVentus](https://img.shields.io/badge/vueventus-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![Vitest](https://img.shields.io/badge/vitest-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)



## Installation Prep

Create a new project repo, and use git and/or a tool like GitHub Desktop to clone your repo locally and give your new project a root directory and corresponding versioning repository.

Use a console to move into your new project root directory and run the Laravel/Sail command:

```bash
curl -s https://laravel.build/new-app-name-here | bash
```

Either move into the directory the Laravel installation process provides, or move ALL the Laravel installed files into your repo root directory manually, and out of the installed directory (IE the `new-app-name-here` directory in this example), which can then be deleted.

Next up, install Laravel Jetstream from the project root directory with the command:

```bash
composer require laravel/jetstream
```

> It's highly advised to use Laravel Sail and Docker + Docker Desktop to make installation easier for both beginners and experts alike. This guide assumes your local dev machine has Docker and Docker Desktop installed as well as a Laravel Sail shortcut to remove the need to precede sail CLI commands with a `php` prefix!

> It's also highly advised to use Inertia's SSR feature for most projects, as it makes for more resilient and reusable Vue component code/functionality as a project evolves!

Next up, launch Laravel Sail, and run an artisan command via Sail to install the Inertia Jetstream package files:

```bash
# to start and use Laravel Sail run:
sail up
# then open a separate console and run:
sail artisan jetstream:install inertia --dark --ssr
# or this to add Jetstream teams:
sail artisan jetstream:install inertia --dark --ssr --teams
```

And lastly in a new console if necessary, the following command will create the app's initial local database tables:

```bash
sail artisan migrate
```

Next up, you can check out the install so far using (vite will give you a link from the console to your localhost'ed Laravel/Jetstream app so far!):

```bash
npm run dev
```

> NOTE: You may need to delete Jetstream's node_modules directory and reinstall node.js dependencies with a `npm install` command to get vite to play nicely with Jetstream defaults!



## Installing VILT DS

With Laravel/Jetstream/Inertia installed, you can install VILT DS with the following command:

```bash
npm install -D @obewds/vilt-ds
```

Once the VILT DS package is installed, you can access and run the VILT DS installation CLI with:

```bash
npx vilt-ds
```

<!--
After your base VILT DS files are installed, you'll need to run the following command:

```bash
sail artisan ziggy:generate
```
-->



## A Note About ziggy.{jt}s Files

After a typical VILT/Jetstream install, the `sail artisan ziggy:generate` command will generate a Javascript file with current routes in it. Typescript needs this information downstream, so we need to update this file when new routes are established.

For now, we can simply switch the ziggy generated `./resources/js/ziggy.js` file from a Javascript `.js` extension to a Typescript `.ts` extension, and move on with our project.

But moving forward, solutions are being explored to try to automate this for us all so we don't have to think about it much!



## Updating Installed VILT DS Components

VILT DS provides a handful of `npx` accessible commands to pull in updated versions of VILT DS components after initial installations.

> PLEASE NOTE: Using any of these updater scripts will overwrite existing files. So it is exuberantly recommended to ensure you are using a versioning solution (like Git) whenever using these scripts IRL and on real projects.

> It's also recommended to generally NOT edit VILT DS files directly, and instead opt to make components that import/use VILT DS components directly as child/dependency components. Isolation of VILT DS components ultimately allows these updater scripts to be used to keep VILT DS components current, while not breaking downstream components (depending on their architecture of course!).



### Update VILT DS VueVentus Components

```bash
npx vilt-ds-vueventus
```

The `npx vilt-ds-vueventus` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Components/vv/`**

* anchors/VvAnchor.vue
* anchors/VvInertiaLink.vue
* buttons/VvButton.vue
* buttons/VvColorModeButton.vue
* buttons/VvScrollUp.vue
* elements/VvEl.vue
* forms/VvFormGroup.vue
* forms/VvQuadFormGroup.vue
* inputs/VvCheckbox.vue
* inputs/VvInput.vue
* inputs/VvRadio.vue
* lists/VvListItem.vue
* lists/VvList.vue
* selects/VvListbox.vue
* selects/VvSelect.vue
* textareas/VvTextarea.vue



### Update VILT DS Laravel Jetstream API Components

```bash
npx vilt-ds-jetstream-api
```

The `npx vilt-jetstream-api` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Pages/`**

* API/Partials/ApiTokenManager.vue
* API/Index.vue



### Update VILT DS Laravel Jetstream Auth Components

```bash
npx vilt-ds-jetstream-auth
```

The `npx vilt-jetstream-auth` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Pages/Auth/`**

* ConfirmPassword.vue
* ForgotPassword.vue
* Login.vue
* Register.vue
* ResetPassword.vue
* TwoFactorChallenge.vue
* VerifyEmail.vue



### Update VILT DS Laravel Jetstream Base Components

```bash
npx vilt-ds-jetstream-base-components
```

The `npx vilt-base-components` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Components/`**

* ActionMessage.vue
* ActionSection.vue
* ApplicationLogo.vue
* ApplicationMark.vue
* AuthenticationCardLogo.vue
* AuthenticationCard.vue
* Banner.vue
* Checkbox.vue
* ConfirmationModal.vue
* ConfirmsPassword.vue
* DangerButton.vue
* DialogModal.vue
* DropdownLink.vue
* Dropdown.vue
* FormSection.vue
* InputError.vue
* InputLabel.vue
* Modal.vue
* NavLink.vue
* PrimaryButton.vue
* ResponsiveNavLink.vue
* ScrollUpColorModeSection.vue
* SecondaryButton.vue
* SectionBorder.vue
* SectionTitle.vue
* TextInput.vue
* Welcome.vue



### Update VILT DS Laravel Jetstream Base Page Components

```bash
npx vilt-ds-jetstream-base-pages
```

The `npx vilt-ds-jetstream-base-pages` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Pages/`**

* Dashboard.vue
* PrivacyPolicy.vue
* TermsOfService.vue
* VueVentus.vue
* Welcome.vue



### Update VILT DS Laravel Jetstream Profile Components

```bash
npx vilt-ds-jetstream-profile
```

The `npx vilt-ds-jetstream-profile` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Pages/Profile/`**

* Partials/DeleteUserForm.vue
* Partials/LogoutOtherBrowserSessionsForm.vue
* Partials/TwoFactorAuthenticationForm.vue
* Partials/UpdatePasswordForm.vue
* Partials/UpdateProfileInformationForm.vue
* Show.vue



### Update VILT DS Laravel Jetstream Teams Components

```bash
npx vilt-ds-jetstream-teams
```

The `npx vilt-ds-jetstream-teams` command will overwrite the following files in a Laravel Jetstream VILT app with VILT DS installed:

**Root Path: `./resources/js/Pages/Teams/`**

* Partials/CreateTeamForm.vue
* Partials/DeleteTeamForm.vue
* Partials/TeamMemberManager.vue
* Partials/UpdateTeamNameForm.vue
* Create.vue
* Show.vue
