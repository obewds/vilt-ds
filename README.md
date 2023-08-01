# The VILT Design System
The official repository for the VILT Design System for the Vue.js, Inertia.js, Laravel, and Tailwind CSS web app stack that is turbocharged with Typescript and VueVentus.


## Installation

Create a new project repo (IE GitHub), and/or use a tool like GitHub Desktop to clone your repo locally to give your new project a root directory and corresponding versioning repository.

```bash
curl -s https://laravel.build/new-app-name-here | bash
```

Move ALL the installed files into repo root directory and out of the installed directory (IE the `new-app-name-here` directory in this example).

```bash
composer require laravel/jetstream
```

> It's highly advised to use Laravel Sail and Docker Desktop to make installation easier for both beginners and experts alike. This guid assumes your local dev machine has Docker Desktop installed as well as a Laravel Sail shortcut to remove the need to precede sail CLI commands from needing a `php` prefix!

Launch Laravel Sail:

```bash
sail up
```

> It's also highly advised to use Inertia's SSR feature as it makes for more resilient Vue component code and functionality as a project evolves into a bigger project!

Then in a second console, the following command will install Laravel Jetstream files into the project:

```bash
sail artisan jetstream:install inertia --dark --ssr
#or 
sail artisan jetstream:install inertia --dark --ssr --teams
```

And lastly in the second or a new console, the following command will create the app's initial local database tables:

```bash
sail artisan migrate
```

Bonus: You can add a handy npm script to launch Laravel's handy outgoing app mail interceptor for developer's called MailPit by opening up the project's ./package.json file and adding the following npm script:

```json
{
    "scripts": {
        "mailpit": "open http://127.0.0.1:8025/"
    },
}
```

Which allows you to open MailPit in a browser with:

```bash
npm run mailpit
```

Next up, go ahead and install your default npm dependencies that come with Laravel and Jetstream installs:

```bash
npm install
```

And now you can finally install VILT DS with the following command:

```bash
npm install -D @obewds/vilt-ds
```

Once the VILT DS package is installed, and Laravel/Jetstream are installed, you can access and run the VILT DS installation CLI with:

```bash
npx vilt-ds
```


