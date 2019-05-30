<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./assets/styles/base.scss";

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  :active, :hover, :focus {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }

  @font-face {
    font-family: 'VitoCompresset';
    src:
    url("./assets/fonts/vito/vito_compressed_bold.ttf") format('ttf') ,
    url("./assets/fonts/vito/vito_compressed_bold.woff") format('woff'),
    url("./assets/fonts/vito/vito_compressed_bold.woff2") format('woff2');
  }

  @font-face {
    font-family: 'VitoBold';
    src:
    url("./assets/fonts/vito/vito_extended_bold-webfont.eot") format('eot'),
    url("./assets/fonts/vito/vito_extended_bold-webfont.svg") format('svg'),
    url("./assets/fonts/vito/vito_extended_bold-webfont.ttf") format('ttf'),
    url("./assets/fonts/vito/vito_extended_bold-webfont.woff") format('woff');
  }

  @font-face {
    font-family: 'VitoLight';
    src:
    url("./assets/fonts/vito/vito_extended_light-webfont.eot") format('eot'),
    url("./assets/fonts/vito/vito_extended_light-webfont.svg") format('svg'),
    url("./assets/fonts/vito/vito_extended_light-webfont.ttf") format('ttf'),
    url("./assets/fonts/vito/vito_extended_light-webfont.woff") format('woff');
  }

  @font-face {
    font-family: 'OpenSansBold';
    src:
    url('./assets/fonts/open_sans/OpenSans-Bold.eot') format('eot'),
    url('./assets/fonts/open_sans/OpenSans-Bold.svg') format('svg'),
    url('./assets/fonts/open_sans/OpenSans-Bold.ttf') format('ttf'),
    url('./assets/fonts/open_sans/OpenSans-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'OpenSansExtraBold';
  src:
  url('./assets/fonts/open_sans/OpenSans-ExtraBold.eot') format('eot'),
  url('./assets/fonts/open_sans/OpenSans-ExtraBold.svg') format('svg'),
  url('./assets/fonts/open_sans/OpenSans-ExtraBold.ttf') format('ttf'),
  url('./assets/fonts/open_sans/OpenSans-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'OpenSansLight';
 src:
   url('./assets/fonts/open_sans/OpenSans-Light.eot') format('eot'),
   url('./assets/fonts/open_sans/OpenSans-Light.svg') format('svg'),
   url('./assets/fonts/open_sans/OpenSans-Light.ttf') format('ttf'),
   url('./assets/fonts/open_sans/OpenSans-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'OpenSansRegular';
  src:
    url('./assets/fonts/open_sans/OpenSans-Regular.eot') format('eot'),
    url('./assets/fonts/open_sans/OpenSans-Regular.svg') format('svg'),
    url('./assets/fonts/open_sans/OpenSans-Regular.ttf') format('ttf'),
    url('./assets/fonts/open_sans/OpenSans-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'OpenSansSemiBold';
 src:
   url('./assets/fonts/open_sans/OpenSans-SemiBold.eot') format('eot'),
   url('./assets/fonts/open_sans/OpenSans-SemiBold.svg') format('svg'),
   url('./assets/fonts/open_sans/OpenSans-SemiBold.ttf') format('ttf'),
   url('./assets/fonts/open_sans/OpenSans-SemiBold.woff') format('woff');
  }

  #app {
    font-family: 'VitoCompresset';
    font-family: 'VitoBold';
    font-family: 'VitoLight';

    font-family: 'OpenSansBold';
    font-family: 'OpenSansExtraBold';
    font-family: 'OpenSansLight';
    font-family: 'OpenSansRegular';
    font-family: 'OpenSansSemiBold';

    background-color: #f5f5f5;
  }
</style>
