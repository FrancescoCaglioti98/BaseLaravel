<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet">

    <title>{{config("app.name")}}</title>

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/assets/styles.scss'])
    @endif

</head>
<body>

    <script>
        const SERVERL_URL = '{{ config("app.url") }}';
    </script>

    <div id="app"></div></body>
</html>
