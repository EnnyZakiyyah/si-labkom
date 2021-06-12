<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} @yield('title')</title>
    <!-- Favicons -->
    <link rel="icon" href="/favicons/favicon.ico">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <style>
        body {
            font-family: 'Nunito', serif;
        }

        .gradient {
            background: linear-gradient(90deg, #3e33d5 0%, #8651da 100%);
        }

    </style>
</head>

<body class="leading-normal tracking-normal text-white gradient">
    <header>
        <!--Nav-->
        <nav id="header" class="fixed w-full z-30 top-0 text-white">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                <div class="flex items-center">
                    <a class="toggleColour text-white no-underline hover:no-underline font-bold text-lg"
                        href="{{ route('home') }}">
                        <!--Icon from: http://www.potlabicons.com/ -->
                        {{-- <img src="{{ asset('img/LogoWebLabkom.png') }}" alt="LogoWebLabkom"
                            class="h-8 fill-current inline"> --}}
                        <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                            version="1.1"
                            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                            viewBox="0 0 5957 2020">
                            <defs>
                                <font id="FontID0" horiz-adv-x="722" font-variant="normal" style="fill-rule:nonzero"
                                    font-style="normal" font-weight="700">
                                    <font-face font-family="Arial">
                                    </font-face>
                                    <missing-glyph>
                                        <path d="M0 0z" />
                                    </missing-glyph>
                                    <glyph unicode="U" horiz-adv-x="722">
                                        <path
                                            d="M73.0005 716.001l145.001 0 0 -388.002c0,-61.6635 1.83005,-101.498 5.33507,-119.667 6.1648,-29.3351 20.6656,-53.0018 43.6654,-70.6664 23.1626,-17.8353 54.6612,-26.6676 94.6665,-26.6676 40.5016,0 71.1627,8.33605 91.8283,25.171 20.6734,16.8349 33.003,37.33 37.1671,61.8341 4.1719,24.4963 6.3354,64.9979 6.3354,121.668l0 396.331 145.001 0 0 -376.502c0,-85.997 -3.8307,-146.831 -11.6627,-182.331 -7.83976,-35.4999 -22.17,-65.5019 -43.1691,-89.9983 -20.8362,-24.5041 -48.8376,-43.836 -83.8335,-58.3368 -35.1665,-14.5008 -80.8325,-21.8288 -137.332,-21.8288 -68.1695,0 -119.837,7.83201 -155.004,23.6666 -35.1665,15.8269 -62.9973,36.3297 -83.5001,61.6635 -20.495,25.3338 -33.8327,51.668 -40.331,79.4988 -9.49922,40.9978 -14.1674,101.669 -14.1674,181.834l0 382.334z" />
                                    </glyph>
                                    <glyph unicode="A" horiz-adv-x="722">
                                        <path
                                            d="M717.998 0l-156.163 0 -61.835 163.002 -287.167 0 -59.4978 -163.002 -153.335 0 278.001 716.002 153.167 0 286.831 -716.002zm-264.996 283.998l-99.5026 265.001 -96.6652 -265.001 196.168 0z" />
                                    </glyph>
                                    <glyph unicode="O" horiz-adv-x="777">
                                        <path
                                            d="M43.0012 353.668c0,72.9979 10.9993,134.333 32.8341,184 16.1647,36.499 38.4997,69.333 66.6639,98.334 28.1688,28.9964 59.0022,50.4993 92.5001,64.6632 44.6654,18.8338 96.165,28.3371 154.499,28.3371 105.668,0 190.002,-32.8341 253.501,-98.334 63.3355,-65.6681 95.001,-156.836 95.001,-273.667 0,-115.835 -31.5018,-206.499 -94.3326,-271.835 -62.8353,-65.4999 -147.001,-98.1657 -252.169,-98.1657 -106.5,0 -191.334,32.5021 -254.165,97.6656 -62.8353,64.9997 -94.3326,154.667 -94.3326,269.002zm148.997 4.83349c0,-81.1689 18.8338,-142.667 56.3331,-184.668 37.5039,-41.8326 85.1703,-62.8308 142.836,-62.8308 57.8336,0 105.168,20.8299 142.331,62.3306 37.0037,41.6689 55.501,104 55.501,187.169 0,82.1647 -17.9971,143.5 -54.1642,183.832 -36.0033,40.5004 -83.8335,60.6664 -143.668,60.6664 -59.6661,0 -107.833,-20.498 -144.332,-61.3348 -36.5035,-41.0005 -54.8371,-102.667 -54.8371,-185.164z" />
                                    </glyph>
                                    <glyph unicode="L" horiz-adv-x="610">
                                        <path d="M76.9993 0l0 710 145 0 0 -588.999 359.001 0 0 -121.001 -504.001 0z" />
                                    </glyph>
                                    <glyph unicode="I" horiz-adv-x="277">
                                        <path d="M67.9989 0l0 716.001 145.001 0 0 -716.001 -145.001 0z" />
                                    </glyph>
                                    <glyph unicode="F" horiz-adv-x="610">
                                        <path
                                            d="M73.0005 0l0 716.001 491.997 0 0 -121.001 -346.997 0 0 -170.001 299.997 0 0 -121.001 -299.997 0 0 -303.998 -145.001 0z" />
                                    </glyph>
                                    <glyph unicode="N" horiz-adv-x="722">
                                        <path
                                            d="M73.0005 0l0 716.001 140.333 0 294.67 -479.831 0 479.831 133.997 0 0 -716.001 -144.83 0 -290.172 470.665 0 -470.665 -133.997 0z" />
                                    </glyph>
                                    <glyph unicode="K" horiz-adv-x="722">
                                        <path
                                            d="M74.9986 0l0 716.002 145 0 0 -317.169 292.169 317.169 194.331 0 -270.166 -278.837 284.166 -437.165 -187.001 0 -197 336.166 -116.499 -119.664 0 -216.502 -145 0z" />
                                    </glyph>
                                    <glyph unicode="S" horiz-adv-x="667">
                                        <path
                                            d="M35.0036 231.998l140.999 14.0046c8.49889,-47.1704 25.4967,-81.67 51.3268,-103.832 25.8379,-22.17 60.6709,-33.1736 104.507,-33.1736 46.3329,0 81.3288,9.84041 104.833,29.5057 23.496,19.6653 35.3293,42.6651 35.3293,68.9992 0,16.9978 -5.00163,31.328 -14.8343,43.3319 -9.83266,11.8333 -27.1639,22.17 -51.8308,30.8317 -16.8349,6.00195 -55.1652,16.3309 -115.169,31.3358 -77.1647,19.3319 -131.33,42.9985 -162.495,71.1627 -43.836,39.5012 -65.6725,87.672 -65.6725,144.504 0,36.5003 10.3367,70.8293 30.8395,102.661 20.6656,31.8398 50.3265,56.0027 89.1608,72.6671 38.8343,16.6721 85.5007,25.0004 140.503,25.0004 89.502,0 156.997,-19.8282 202.167,-59.6628 45.3326,-39.8347 68.9992,-92.8364 71.3333,-159.331l-145.001 -5.00163c-6.1648,36.9965 -19.3319,63.5013 -39.5012,79.6616 -20.1616,16.1681 -50.4971,24.3335 -90.828,24.3335 -41.6725,0 -74.3343,-8.66173 -97.8381,-25.993 -15.1677,-11.1742 -22.8291,-26.0007 -22.8291,-44.6735 0,-16.9978 7.16512,-31.4986 21.4954,-43.4948 18.1687,-15.5012 62.3381,-31.4986 132.501,-48.1707 70.1701,-16.5015 122.001,-33.8327 155.5,-51.4974 33.6699,-17.8353 60.004,-41.9982 79.0025,-72.8377 18.9984,-30.8317 28.4977,-68.8286 28.4977,-113.998 0,-40.9978 -11.3293,-79.4988 -34.1662,-115.332 -22.8369,-35.8334 -55.0024,-62.501 -96.6671,-79.8322 -41.6647,-17.5018 -93.6662,-26.1636 -155.834,-26.1636 -90.5023,0 -159.998,20.8285 -208.502,62.6638 -48.4964,41.6647 -77.3275,102.498 -86.8267,182.331z" />
                                    </glyph>
                                    <glyph unicode=" " horiz-adv-x="277"></glyph>
                                    <glyph unicode="B" horiz-adv-x="722">
                                        <path
                                            d="M72.9979 716.002l286.335 0c56.8333,0 98.9978,-2.33717 126.835,-7.00242 28.0006,-4.83349 52.8319,-14.6642 74.8304,-29.5011 22.0031,-15.0006 40.3367,-34.8302 55.0008,-59.6661 14.6687,-24.8313 22.0031,-52.8319 22.0031,-83.6653 0,-33.3342 -9.00311,-64.1676 -27.0002,-92 -18.0017,-28.0006 -42.501,-48.8351 -73.3344,-62.8353 43.4968,-12.8317 76.8311,-34.4983 100.335,-65.1634 23.3308,-30.6697 34.9985,-66.6685 34.9985,-108.169 0,-32.6658 -7.50259,-64.3313 -22.6669,-95.1647 -15.1689,-30.8334 -35.8351,-55.501 -62.1669,-74.0028 -26.1681,-18.3336 -58.502,-29.6648 -97.0017,-33.9981 -23.9992,-2.50086 -82.1647,-4.16508 -174.333,-4.83349l-243.834 0 0 716.002zm145 -119l0 -165.002 94.6691 0c56.1649,0 91.1679,0.832106 104.832,2.50086 24.6676,2.8328 44.1698,11.3312 58.3338,25.4997 14.1685,14.1685 21.1664,32.6658 21.1664,55.6647 0,22.1667 -6.16577,40.0002 -18.3336,53.8368 -12.1633,13.8321 -30.3332,22.1667 -54.3324,24.9995 -14.3322,1.66421 -55.501,2.50086 -123.334,2.50086l-83.0014 0zm0 -284.003l0 -191.998 134.001 0c51.9998,0 85.1658,1.50052 99.1661,4.33332 21.5029,4.00138 38.9998,13.5001 52.5,28.6644 13.5001,15.3326 20.3343,35.5032 20.3343,61.0029 0,21.6666 -5.16542,39.8319 -15.6645,54.8326 -10.3354,15.0006 -25.4997,25.9999 -45.1701,32.8341 -19.6659,6.82963 -62.4989,10.3308 -128.331,10.3308l-116.836 0z" />
                                    </glyph>
                                    <glyph unicode="P" horiz-adv-x="667">
                                        <path
                                            d="M73.0005 0l0 716.001 231.835 0c87.8348,0 145.001,-3.49726 171.661,-10.6701 41.0056,-10.833 75.3346,-34.1662 103.003,-70.1624 27.6679,-36.004 41.5019,-82.4997 41.5019,-139.503 0,-43.9988 -8.00261,-80.8325 -23.8372,-110.835 -15.9975,-29.9943 -36.1668,-53.498 -60.6632,-70.6664 -24.5041,-16.9978 -49.4967,-28.3348 -74.8306,-33.8327 -34.4996,-6.83168 -84.3375,-10.3289 -149.669,-10.3289l-93.9996 0 0 -270.003 -145.001 0zm145.001 595l0 -203.997 78.8319 0c56.8325,0 94.6665,3.8307 113.836,11.3293 19.1613,7.49857 34.1662,19.169 44.9991,35.3371 10.833,15.9975 16.3309,34.4996 16.3309,55.8321 0,26.1636 -7.66916,47.6667 -22.8291,64.6645 -15.3383,16.9978 -34.4996,27.6679 -58.0034,32.0027 -17.1684,3.16382 -51.668,4.83103 -103.669,4.83103l-69.4955 0z" />
                                    </glyph>
                                    <glyph unicode="M" horiz-adv-x="833">
                                        <path
                                            d="M71.0018 0l0 716.002 217.166 0 128.331 -488.337 126.835 488.337 217.666 0 0 -716.002 -134.001 0 -0.500173 563.667 -141.167 -563.667 -139.33 0 -140.503 563.667 -0.500173 -563.667 -133.996 0z" />
                                    </glyph>
                                </font>
                                <style type="text/css">
                                    <![CDATA[
                                    @font-face {
                                        font-family: "Arial";
                                        src: url("#FontID0") format(svg)
                                    }

                                    .fil0 {
                                        fill: none
                                    }

                                    .fil5 {
                                        fill: #282828
                                    }

                                    .fil4 {
                                        fill: #2AABE2
                                    }

                                    .fil3 {
                                        fill: #36407E
                                    }

                                    .fil2 {
                                        fill: #595959
                                    }

                                    .fil6 {
                                        fill: #959595
                                    }

                                    .fil1 {
                                        fill: white
                                    }

                                    .fnt1 {
                                        font-weight: bold;
                                        font-size: 507.709px;
                                        font-family: 'Arial'
                                    }

                                    .fnt0 {
                                        font-weight: bold;
                                        font-size: 865.843px;
                                        font-family: 'Arial'
                                    }

                                    ]]>
                                </style>
                            </defs>
                            <g id="Layer_x0020_1">
                                <metadata id="CorelCorpID_0Corel-Layer" />
                                <rect class="fil0" width="5957" height="2020" />
                                <circle class="fil1" cx="1005" cy="1010" r="1010" />
                                <g id="_526822800">
                                    <path class="fil2"
                                        d="M1005 1310c172,0 311,-140 311,-311 0,-172 -139,-311 -311,-311 -172,0 -311,139 -311,311 0,171 139,311 311,311z" />
                                    <path class="fil3"
                                        d="M220 546l444 256c-33,58 -52,125 -52,197 0,55 11,108 32,156l-424 245 0 -401 0 -453z" />
                                    <path class="fil4"
                                        d="M664 802l-444 -256 0 0 393 -227 339 -196 0 486c-123,17 -228,90 -288,193z" />
                                    <path class="fil3"
                                        d="M1044 608l0 -493 353 204 393 227 0 0 -445 256c-61,-107 -172,-182 -301,-194z" />
                                    <path class="fil4"
                                        d="M1345 802l445 -256 0 453 0 391 -421 -242c19,-46 29,-97 29,-149 0,-72 -19,-139 -53,-197z" />
                                    <path class="fil3"
                                        d="M1324 1228l427 246 -354 204 -392 227 0 -513c131,0 248,-65 319,-164z" />
                                    <path class="fil4"
                                        d="M1005 1392l0 513 0 0 -392 -227 -346 -199 423 -245c72,96 186,158 315,158 0,0 0,0 0,0z" />
                                    <path class="fil5"
                                        d="M1316 999c0,171 -139,311 -311,311l0 -311 269 -156c27,46 42,99 42,156z" />
                                    <path class="fil6"
                                        d="M1274 843l-269 156 -270 -156c54,-93 155,-155 270,-155 0,0 0,0 0,0 115,0 216,62 269,155z" />
                                </g>
                                <g id="_526822992">
                                    <text x="2135" y="1027" class="fil1 svgText fnt0">LABKOM</text>
                                    <g transform="matrix(1 0 0 1 -813.683 608.031)">
                                        <text x="2978" y="1010"
                                            class="fil1 svgText fnt1">F&nbsp;M&nbsp;I&nbsp;P&nbsp;A&nbsp;&nbsp;U&nbsp;N&nbsp;S</text>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle"
                        class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white hidden"
                    id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        @if (Route::has('login'))
                            @auth
                                <li class="mr-3">
                                    <a href="{{ route('Dashboard') }}" id="navDashboard"
                                        class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow opacity-75 bg-white text-gray-800">Dashboard</a>
                                </li>
                            @else
                                <li class="mr-3">
                                    <a href="{{ route('login') }}" id="navLogin"
                                        class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow opacity-75 bg-white text-gray-800">Login</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="mr-3">
                                        <a href="{{ route('register') }}" id="navRegister"
                                            class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow opacity-75 bg-white text-gray-800">Register</a>
                                    </li>
                                @endif
                            @endif
                            @endif
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            @yield('content')
        </main>
        <!--Footer-->
        <footer class="bg-white">
            <div class="container mx-auto px-8">
                <div class="w-full flex flex-col md:flex-row py-8">
                    <div class="flex-1 mb-6 text-black">
                        <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                            href="{{ route('home') }}">
                            <!--Icon from: http://www.potlabicons.com/ -->
                            <svg class="h-16 fill-current inline" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                                version="1.1"
                                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                viewBox="0 0 5957 2020">
                                <defs>
                                    <font id="FontID0" horiz-adv-x="722" font-variant="normal" style="fill-rule:nonzero"
                                        font-style="normal" font-weight="700">
                                        <font-face font-family="Arial">
                                        </font-face>
                                        <missing-glyph>
                                            <path d="M0 0z" />
                                        </missing-glyph>
                                        <glyph unicode="U" horiz-adv-x="722">
                                            <path
                                                d="M73.0005 716.001l145.001 0 0 -388.002c0,-61.6635 1.83005,-101.498 5.33507,-119.667 6.1648,-29.3351 20.6656,-53.0018 43.6654,-70.6664 23.1626,-17.8353 54.6612,-26.6676 94.6665,-26.6676 40.5016,0 71.1627,8.33605 91.8283,25.171 20.6734,16.8349 33.003,37.33 37.1671,61.8341 4.1719,24.4963 6.3354,64.9979 6.3354,121.668l0 396.331 145.001 0 0 -376.502c0,-85.997 -3.8307,-146.831 -11.6627,-182.331 -7.83976,-35.4999 -22.17,-65.5019 -43.1691,-89.9983 -20.8362,-24.5041 -48.8376,-43.836 -83.8335,-58.3368 -35.1665,-14.5008 -80.8325,-21.8288 -137.332,-21.8288 -68.1695,0 -119.837,7.83201 -155.004,23.6666 -35.1665,15.8269 -62.9973,36.3297 -83.5001,61.6635 -20.495,25.3338 -33.8327,51.668 -40.331,79.4988 -9.49922,40.9978 -14.1674,101.669 -14.1674,181.834l0 382.334z" />
                                        </glyph>
                                        <glyph unicode="A" horiz-adv-x="722">
                                            <path
                                                d="M717.998 0l-156.163 0 -61.835 163.002 -287.167 0 -59.4978 -163.002 -153.335 0 278.001 716.002 153.167 0 286.831 -716.002zm-264.996 283.998l-99.5026 265.001 -96.6652 -265.001 196.168 0z" />
                                        </glyph>
                                        <glyph unicode="O" horiz-adv-x="777">
                                            <path
                                                d="M43.0012 353.668c0,72.9979 10.9993,134.333 32.8341,184 16.1647,36.499 38.4997,69.333 66.6639,98.334 28.1688,28.9964 59.0022,50.4993 92.5001,64.6632 44.6654,18.8338 96.165,28.3371 154.499,28.3371 105.668,0 190.002,-32.8341 253.501,-98.334 63.3355,-65.6681 95.001,-156.836 95.001,-273.667 0,-115.835 -31.5018,-206.499 -94.3326,-271.835 -62.8353,-65.4999 -147.001,-98.1657 -252.169,-98.1657 -106.5,0 -191.334,32.5021 -254.165,97.6656 -62.8353,64.9997 -94.3326,154.667 -94.3326,269.002zm148.997 4.83349c0,-81.1689 18.8338,-142.667 56.3331,-184.668 37.5039,-41.8326 85.1703,-62.8308 142.836,-62.8308 57.8336,0 105.168,20.8299 142.331,62.3306 37.0037,41.6689 55.501,104 55.501,187.169 0,82.1647 -17.9971,143.5 -54.1642,183.832 -36.0033,40.5004 -83.8335,60.6664 -143.668,60.6664 -59.6661,0 -107.833,-20.498 -144.332,-61.3348 -36.5035,-41.0005 -54.8371,-102.667 -54.8371,-185.164z" />
                                        </glyph>
                                        <glyph unicode="L" horiz-adv-x="610">
                                            <path d="M76.9993 0l0 710 145 0 0 -588.999 359.001 0 0 -121.001 -504.001 0z" />
                                        </glyph>
                                        <glyph unicode="I" horiz-adv-x="277">
                                            <path d="M67.9989 0l0 716.001 145.001 0 0 -716.001 -145.001 0z" />
                                        </glyph>
                                        <glyph unicode="F" horiz-adv-x="610">
                                            <path
                                                d="M73.0005 0l0 716.001 491.997 0 0 -121.001 -346.997 0 0 -170.001 299.997 0 0 -121.001 -299.997 0 0 -303.998 -145.001 0z" />
                                        </glyph>
                                        <glyph unicode="N" horiz-adv-x="722">
                                            <path
                                                d="M73.0005 0l0 716.001 140.333 0 294.67 -479.831 0 479.831 133.997 0 0 -716.001 -144.83 0 -290.172 470.665 0 -470.665 -133.997 0z" />
                                        </glyph>
                                        <glyph unicode="K" horiz-adv-x="722">
                                            <path
                                                d="M74.9986 0l0 716.002 145 0 0 -317.169 292.169 317.169 194.331 0 -270.166 -278.837 284.166 -437.165 -187.001 0 -197 336.166 -116.499 -119.664 0 -216.502 -145 0z" />
                                        </glyph>
                                        <glyph unicode="S" horiz-adv-x="667">
                                            <path
                                                d="M35.0036 231.998l140.999 14.0046c8.49889,-47.1704 25.4967,-81.67 51.3268,-103.832 25.8379,-22.17 60.6709,-33.1736 104.507,-33.1736 46.3329,0 81.3288,9.84041 104.833,29.5057 23.496,19.6653 35.3293,42.6651 35.3293,68.9992 0,16.9978 -5.00163,31.328 -14.8343,43.3319 -9.83266,11.8333 -27.1639,22.17 -51.8308,30.8317 -16.8349,6.00195 -55.1652,16.3309 -115.169,31.3358 -77.1647,19.3319 -131.33,42.9985 -162.495,71.1627 -43.836,39.5012 -65.6725,87.672 -65.6725,144.504 0,36.5003 10.3367,70.8293 30.8395,102.661 20.6656,31.8398 50.3265,56.0027 89.1608,72.6671 38.8343,16.6721 85.5007,25.0004 140.503,25.0004 89.502,0 156.997,-19.8282 202.167,-59.6628 45.3326,-39.8347 68.9992,-92.8364 71.3333,-159.331l-145.001 -5.00163c-6.1648,36.9965 -19.3319,63.5013 -39.5012,79.6616 -20.1616,16.1681 -50.4971,24.3335 -90.828,24.3335 -41.6725,0 -74.3343,-8.66173 -97.8381,-25.993 -15.1677,-11.1742 -22.8291,-26.0007 -22.8291,-44.6735 0,-16.9978 7.16512,-31.4986 21.4954,-43.4948 18.1687,-15.5012 62.3381,-31.4986 132.501,-48.1707 70.1701,-16.5015 122.001,-33.8327 155.5,-51.4974 33.6699,-17.8353 60.004,-41.9982 79.0025,-72.8377 18.9984,-30.8317 28.4977,-68.8286 28.4977,-113.998 0,-40.9978 -11.3293,-79.4988 -34.1662,-115.332 -22.8369,-35.8334 -55.0024,-62.501 -96.6671,-79.8322 -41.6647,-17.5018 -93.6662,-26.1636 -155.834,-26.1636 -90.5023,0 -159.998,20.8285 -208.502,62.6638 -48.4964,41.6647 -77.3275,102.498 -86.8267,182.331z" />
                                        </glyph>
                                        <glyph unicode=" " horiz-adv-x="277"></glyph>
                                        <glyph unicode="B" horiz-adv-x="722">
                                            <path
                                                d="M72.9979 716.002l286.335 0c56.8333,0 98.9978,-2.33717 126.835,-7.00242 28.0006,-4.83349 52.8319,-14.6642 74.8304,-29.5011 22.0031,-15.0006 40.3367,-34.8302 55.0008,-59.6661 14.6687,-24.8313 22.0031,-52.8319 22.0031,-83.6653 0,-33.3342 -9.00311,-64.1676 -27.0002,-92 -18.0017,-28.0006 -42.501,-48.8351 -73.3344,-62.8353 43.4968,-12.8317 76.8311,-34.4983 100.335,-65.1634 23.3308,-30.6697 34.9985,-66.6685 34.9985,-108.169 0,-32.6658 -7.50259,-64.3313 -22.6669,-95.1647 -15.1689,-30.8334 -35.8351,-55.501 -62.1669,-74.0028 -26.1681,-18.3336 -58.502,-29.6648 -97.0017,-33.9981 -23.9992,-2.50086 -82.1647,-4.16508 -174.333,-4.83349l-243.834 0 0 716.002zm145 -119l0 -165.002 94.6691 0c56.1649,0 91.1679,0.832106 104.832,2.50086 24.6676,2.8328 44.1698,11.3312 58.3338,25.4997 14.1685,14.1685 21.1664,32.6658 21.1664,55.6647 0,22.1667 -6.16577,40.0002 -18.3336,53.8368 -12.1633,13.8321 -30.3332,22.1667 -54.3324,24.9995 -14.3322,1.66421 -55.501,2.50086 -123.334,2.50086l-83.0014 0zm0 -284.003l0 -191.998 134.001 0c51.9998,0 85.1658,1.50052 99.1661,4.33332 21.5029,4.00138 38.9998,13.5001 52.5,28.6644 13.5001,15.3326 20.3343,35.5032 20.3343,61.0029 0,21.6666 -5.16542,39.8319 -15.6645,54.8326 -10.3354,15.0006 -25.4997,25.9999 -45.1701,32.8341 -19.6659,6.82963 -62.4989,10.3308 -128.331,10.3308l-116.836 0z" />
                                        </glyph>
                                        <glyph unicode="P" horiz-adv-x="667">
                                            <path
                                                d="M73.0005 0l0 716.001 231.835 0c87.8348,0 145.001,-3.49726 171.661,-10.6701 41.0056,-10.833 75.3346,-34.1662 103.003,-70.1624 27.6679,-36.004 41.5019,-82.4997 41.5019,-139.503 0,-43.9988 -8.00261,-80.8325 -23.8372,-110.835 -15.9975,-29.9943 -36.1668,-53.498 -60.6632,-70.6664 -24.5041,-16.9978 -49.4967,-28.3348 -74.8306,-33.8327 -34.4996,-6.83168 -84.3375,-10.3289 -149.669,-10.3289l-93.9996 0 0 -270.003 -145.001 0zm145.001 595l0 -203.997 78.8319 0c56.8325,0 94.6665,3.8307 113.836,11.3293 19.1613,7.49857 34.1662,19.169 44.9991,35.3371 10.833,15.9975 16.3309,34.4996 16.3309,55.8321 0,26.1636 -7.66916,47.6667 -22.8291,64.6645 -15.3383,16.9978 -34.4996,27.6679 -58.0034,32.0027 -17.1684,3.16382 -51.668,4.83103 -103.669,4.83103l-69.4955 0z" />
                                        </glyph>
                                        <glyph unicode="M" horiz-adv-x="833">
                                            <path
                                                d="M71.0018 0l0 716.002 217.166 0 128.331 -488.337 126.835 488.337 217.666 0 0 -716.002 -134.001 0 -0.500173 563.667 -141.167 -563.667 -139.33 0 -140.503 563.667 -0.500173 -563.667 -133.996 0z" />
                                        </glyph>
                                    </font>
                                    <style type="text/css">
                                        <![CDATA[
                                        @font-face {
                                            font-family: "Arial";
                                            src: url("#FontID0") format(svg)
                                        }

                                        .fil0 {
                                            fill: none
                                        }

                                        .fil5 {
                                            fill: #282828
                                        }

                                        .fil4 {
                                            fill: #2AABE2
                                        }

                                        .fil3 {
                                            fill: #36407E
                                        }

                                        .fil2 {
                                            fill: #595959
                                        }

                                        .fil6 {
                                            fill: #959595
                                        }

                                        .fil1 {
                                            fill: white
                                        }

                                        .fnt1 {
                                            font-weight: bold;
                                            font-size: 507.709px;
                                            font-family: 'Arial'
                                        }

                                        .fnt0 {
                                            font-weight: bold;
                                            font-size: 865.843px;
                                            font-family: 'Arial'
                                        }

                                        ]]>
                                    </style>
                                </defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <rect class="fil0" width="5957" height="2020" />
                                    <circle class="fil1" cx="1005" cy="1010" r="1010" />
                                    <g id="_526822800">
                                        <path class="fil2"
                                            d="M1005 1310c172,0 311,-140 311,-311 0,-172 -139,-311 -311,-311 -172,0 -311,139 -311,311 0,171 139,311 311,311z" />
                                        <path class="fil3"
                                            d="M220 546l444 256c-33,58 -52,125 -52,197 0,55 11,108 32,156l-424 245 0 -401 0 -453z" />
                                        <path class="fil4"
                                            d="M664 802l-444 -256 0 0 393 -227 339 -196 0 486c-123,17 -228,90 -288,193z" />
                                        <path class="fil3"
                                            d="M1044 608l0 -493 353 204 393 227 0 0 -445 256c-61,-107 -172,-182 -301,-194z" />
                                        <path class="fil4"
                                            d="M1345 802l445 -256 0 453 0 391 -421 -242c19,-46 29,-97 29,-149 0,-72 -19,-139 -53,-197z" />
                                        <path class="fil3"
                                            d="M1324 1228l427 246 -354 204 -392 227 0 -513c131,0 248,-65 319,-164z" />
                                        <path class="fil4"
                                            d="M1005 1392l0 513 0 0 -392 -227 -346 -199 423 -245c72,96 186,158 315,158 0,0 0,0 0,0z" />
                                        <path class="fil5"
                                            d="M1316 999c0,171 -139,311 -311,311l0 -311 269 -156c27,46 42,99 42,156z" />
                                        <path class="fil6"
                                            d="M1274 843l-269 156 -270 -156c54,-93 155,-155 270,-155 0,0 0,0 0,0 115,0 216,62 269,155z" />
                                    </g>
                                    <g id="_526822992">
                                        <text x="2135" y="1027" class="fil2 fnt0">LABKOM</text>
                                        <g transform="matrix(1 0 0 1 -813.683 608.031)">
                                            <text x="2978" y="1010"
                                                class="fil2 fnt1">F&nbsp;M&nbsp;I&nbsp;P&nbsp;A&nbsp;&nbsp;U&nbsp;N&nbsp;S</text>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="mailto:labkom@mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="mailto:labkom@mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="mailto:labkom@mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.facebook.com/LabkomMipaUns"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.linkedin.com/company/labkom-fmipa-uns/"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://labkom.mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official
                                    Blog</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://labkom.mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">About
                                    Us</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="mailto:labkom@mipa.uns.ac.id"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- JavaScripts -->
        <script src="{{ mix('js/manifest.js') }}" defer></script>
        <script src="{{ mix('js/vendor.js') }}" defer></script>
        <script src="{{ mix('js/script.js') }}" defer></script>
        <script>
            // --- Peminjaman Lab ---
            let peminjamanlab = document.getElementById('peminjamanlab')
            if (peminjamanlab) {
                let success = peminjamanlab.dataset.success;
                if (success) {
                    const asisten = {
                        zahra: 6285729971270,
                        enny: 6285331318280,
                    }
                    let getAsisten = (obj) => {
                        let keys = Object.keys(obj);
                        return obj[keys[keys.length * Math.random() << 0]];
                    };
                    window.open(
                        `https://api.whatsapp.com/send?phone=${getAsisten(asisten)}&text=Assalamualaikum,%20Saya%20(nama)%20(nim)%20dari%20(prodi),%20meminta%20izin%20untuk%20meminjam%20lab%20____%20pada20%tanggal%20____`
                        , '_self');
                }
            }
            // --- Peminjaman Alat ---
            let peminjamanalat = document.getElementById('peminjamanalat')
            if (peminjamanalat) {
                let success = peminjamanalat.dataset.success;
                if (success) {
                    const asisten = {
                        zahra: 6285729971270,
                        enny: 6285331318280,
                    }
                    let getAsisten = (obj) => {
                        let keys = Object.keys(obj);
                        return obj[keys[keys.length * Math.random() << 0]];
                    };
                    window.open(
                        `https://api.whatsapp.com/send?phone=${getAsisten(asisten)}&text=Assalamualaikum,%20Saya%20(nama)%20(nim)%20dari%20(prodi),%20meminta%20izin%20untuk%20meminjam%20alat%20berupa%20_____%20dengan%20jumlah%20____buah`
                        , '_self')
                }
            }
            // --- Surat Bebas Labkom ---
            let suratbebaslabkom = document.getElementById('suratbebaslabkom')
            if (suratbebaslabkom) {
                let success = suratbebaslabkom.dataset.success;
                if (success) {
                    const asisten = {
                        zahra: 6285729971270,
                        enny: 6285331318280,
                    }
                    let getAsisten = (obj) => {
                        let keys = Object.keys(obj);
                        return obj[keys[keys.length * Math.random() << 0]];
                    };
                    window.open(
                        `https://api.whatsapp.com/send?phone=${getAsisten(asisten)}&text=Assalamualaikum,%20Saya%20(nama)%20(nim)%20dari%20(prodi),%20meminta%20izin%20untuk%20dibuatkan%20surat%20keterangan%20bebas%20labkom%20sebagai%20syarat%20untuk%20_____`
                    , '_self');
                }
            }

        </script>
    </body>

    </html>
