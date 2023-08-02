# The VILT Design System
The official repository for the VILT Design System for the Vue.js, Inertia.js, Laravel, and Tailwind CSS web app stack that is turbocharged with Typescript and VueVentus.

![GitHub package.json version](https://img.shields.io/github/package-json/v/obewds/vilt-ds?label=Github&logo=github&style=for-the-badge) &nbsp; ![npm](https://img.shields.io/npm/v/@obewds/vilt-ds?color=%23cc3534&logo=npm&style=for-the-badge)



![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![Inertia.js](https://img.shields.io/badge/inertia.js-%239553E9.svg?style=for-the-badge&logo=inertia&logoColor=%23ffffff) &nbsp; ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=%23ffffff) &nbsp; ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp; ![VueVentus](https://img.shields.io/badge/vueventus-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)


## Installation Prep

Create a new project repo (IE GitHub), and/or use a tool like GitHub Desktop to clone your repo locally to give your new project a root directory and corresponding versioning repository.

```bash
curl -s https://laravel.build/new-app-name-here | bash
```

Move ALL the installed files into repo root directory and out of the installed directory (IE the `new-app-name-here` directory in this example).

```bash
composer require laravel/jetstream
```

> It's highly advised to use Laravel Sail and Docker Desktop to make installation easier for both beginners and experts alike. This guide assumes your local dev machine has Docker Desktop installed as well as a Laravel Sail shortcut to remove the need to precede sail CLI commands from needing a `php` prefix!

> It's also highly advised to use Inertia's SSR feature as it makes for more resilient Vue component code and functionality as a project evolves into a bigger project!

```bash
# to start and use Laravel Sail run:
sail up
# then in a separate console run:
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


## Installing VILT DS

And now you can finally install VILT DS with the following command:

```bash
npm install -D @obewds/vilt-ds
```

Once the VILT DS package is installed, and Laravel/Jetstream are installed, you can access and run the VILT DS installation CLI with:

```bash
npx vilt-ds
```


