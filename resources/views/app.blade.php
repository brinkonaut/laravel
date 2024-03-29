<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	<title>Prototype</title>

    @include('partials.styles')
</head>
<body>
    @include('partials.navigation')

    @yield('content')

    @include('partials.scripts')
</body>
</html>
