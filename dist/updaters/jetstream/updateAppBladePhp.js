// ./src/updaters/jetstream/updateAppBladePhp.ts
import updateWhenFileExists from '../../helpers/updateWhenFileExists.js';
export default function () {
    updateWhenFileExists('/resources/views/', 'app.blade.php', `<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'VILT DS Laravel/Jetstream') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Color Mode Functionality -->
        <script>
            // On page load or when changing colorMode, best to add inline in head to avoid FOUC
            if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                localStorage.setItem('colorMode', 'dark');
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#242426';
                document.documentElement.style.color = '#f8f8f8';
            } else {
                localStorage.setItem('colorMode', 'light');
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = '#f8f8f8';
                document.documentElement.style.color = '#242426';
            }
        </script>

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

    </head>

    <body class="font-sans antialiased scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800">
        @inertia
    </body>

</html>
`);
}
//# sourceMappingURL=updateAppBladePhp.js.map