@use "./theme/colors.scss" as colors;
@use "./theme/typography.scss" as typography;
@use "sass:color";

$base-spacing: 8px;
$border-radius: 8px;
$border-radius-md: 24px;
$border-radius-lg: 100px;

@font-face {
  font-display: swap;
  font-family: typography.$garnett;
  font-style: normal;
  font-weight: 500;
  src: url("#{typography.$cdn-base}#{typography.$garnett-medium-base}.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: typography.$garnett;
  font-style: normal;
  font-weight: 400;
  src: url("#{typography.$cdn-base}#{typography.$garnett-regular-base}.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: typography.$arizona-text-variable;
  font-style: normal;
  src: url("#{typography.$cdn-base}#{typography.$arizona-text-base}.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: typography.$arizona-text-light;
  font-style: normal;
  src: url("#{typography.$cdn-base}#{typography.$arizona-text-light-base}.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: typography.$apercu;
  font-weight: 500;
  src: url("#{typography.$cdn-base}#{typography.$apercu-base}.woff2")
    format("woff2");
}

@font-face {
  font-family: typography.$apercu-pro;
  font-style: normal;
  font-weight: 400;
  src: url("#{typography.$cdn-base}/apercu/web/5.008/apercu-regular-pro.woff2")
    format("woff2");
}

@font-face {
  font-family: typography.$apercu-pro;
  font-style: normal;
  font-weight: 500;
  src: url("#{typography.$cdn-base}/apercu/web/5.008/apercu-medium-pro.woff2")
    format("woff2");
}

@font-face {
  font-family: typography.$apercu-pro;
  font-style: normal;
  font-weight: 700;
  src: url("#{typography.$cdn-base}/apercu/web/5.008/apercu-bold-pro.woff2")
    format("woff2");
}

// One-off here because I think the font family definitions this was based on are messed up!
@font-face {
  font-family: "Apercu Monospaced";
  font-style: normal;
  font-weight: 400;
  src: url("https://cdn.mxpnl.com/static/marketing/fonts/apercu/web/5.008/apercu-mono-regular-pro.woff2")
    format("woff2");
}

//Bold top nav buttons on hover
.nextra-nav-container {
  .nx-text-sm {
    // color: colors.$purple200;
    &:hover {
      font-weight: bold;
      transition-duration: 0.5s;
    }
    &:active {
      font-weight: bold;
    }
  }
}

// Light Theme Starts Here
.light {
  line-height: 1.8;
  font-size: 0.88rem;
  letter-spacing: 0.3px;

  // We'll handle our own antialiasing.
  .nx-subpixel-antialiased {
    -webkit-font-smoothing: unset;
    -moz-osx-font-smoothing: unset;
  }

  // We'll handle our own tracking.
  .nx-tracking-tight {
    letter-spacing: unset;
  }

  .nx-font-semibold,
  .nx-font-bold,
  p strong {
    font-weight: 500; // Override to a weight that we actually DO support, otherwise we risk faux bold
  }

  .nx-font-semibold,
  .nx-font-bold,
  li strong {
    font-weight: 500; // Override to a weight that we actually DO support, otherwise we risk faux bold
  }

  // Get rid of all heading border-bottoms
  h1,
  h2,
  h3,
  h4,
  h5 {
    &.nx-border-b {
      border-width: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: colors.$purple200;
  }

  body {
    background-color: colors.$base100;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior-y: none;
    font-family: typography.$garnett-stack;
  }

  // Modify breadcrumbs
  .nextra-breadcrumb {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 500;
    color: colors.$purple200;
    .nx-font-medium {
      color: colors.$purple100;
    }
    .nx-text-ellipsis:hover {
      color: colors.$purple100;
      cursor: pointer;
    }
  }

  .nextra-nav-container {
    background-color: colors.$purple140;

    // // Modify image assets in top nav
    // path {
    //   fill: colors.$base100;
    // }

    // .nextra-nav-container-blur {
    //   background-color: colors.$purple40;
    // }

    // Set color for top nav flex region
    .nx-mx-auto > nx-flex {
      background-color: colors.$purple40;
    }

    // //Modify top nav tabs
    // .nx-text-sm {
    //   color: colors.$purple200;
    //   &:hover {
    //     font-weight: bold;
    //   }
    //   &:active {
    //     font-weight: bold;
    //   }
    // }

    // Modify search module
    .Search_searchBar__rnWt2 {
      ::placeholder {
        text-align: center;
      }
    }
  }

  // All code/mono type
  code,
  kbd,
  samp,
  pre {
    font-family: "Apercu Monospaced", monospace;
    font-size: 15px;
    line-height: 150%;
    font-variant-ligatures: none;
    font-feature-settings: normal;
    letter-spacing: initial;
    // Modify code block syntax color
    --shiki-color-text: #414141;
    --shiki-color-background: transparent;
    --shiki-token-constant: #1976d2;
    --shiki-token-string: #22863a;
    --shiki-token-comment: #aaa;
    --shiki-token-keyword: #d32f2f;
    --shiki-token-parameter: #ff9800;
    --shiki-token-function: #6f42c1;
    --shiki-token-string-expression: #22863a;
    --shiki-token-punctuation: #212121;
    --shiki-token-link: #22863a;
  }

  //modify code tab switches
  // [role~="tab"] {
  //   color: colors.$base100;
  // }

  //modify code tab hover
  [role~="tab"]:hover {
    background-color: colors.$purple20;
    color: colors.$purple140;
  }

  //modify selected tab
  .nx-border-primary-500[role~="tab"] {
    background-color: colors.$purple20;
    color: colors.$purple140;
  }

  //modify code block window
  // .nextra-code-block pre {
  //   // background-color: colors.$grey100;
  //   // scrollbar-color: colors.$black;
  //   // box-shadow: 0px -7px 6px -8px rgba(32, 31, 36, 0.1);
  // }

  .nextra-content {
    h1,
    h2,
    h3,
    h4,
    h5 {
      letter-spacing: -0.3px;
    }
  }

  // Modify nextra-cards
  a.nextra-card {
    span {
      display: flex;
      justify-content: center;
      background-color: colors.$purple20;
      &:hover {
        background-color: colors.$purple50;
        transition-duration: 0.5s;
      }
    }
  }

  // left-hand sidebar
  .nextra-sidebar-container {
    // nextra currently doesn't name anything in the sidebar properly and only has tailwind functional
    // names, and so this is hacked together so that we get the view that we want

    // bold the parent links, first two are desktop version, second two are mobile version
    // extra specificity is required because we want to distinguish between the top level and nested files
    .nextra-scrollbar
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > a,
    .nextra-scrollbar
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > button,
    .nextra-scrollbar
      > ul
      > li.open
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > a,
    .nextra-scrollbar
      > ul
      > li.open
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > button {
      font-weight: 500;
    }

    // Bottom scroll mask
    .nx-sticky.nx-bottom-0 {
      background-color: colors.$base100;
      box-shadow: 0px -7px 6px -8px rgba(0, 0, 0, 0.1);
    }

    .nx-transform-gpu > .nx-transition-opacity {
      // styles the separator / category titles
      .first\:nx-mt-0 {
        align-items: center;
        color: colors.$grey80;
        display: flex;
        grid-gap: 8px;
        letter-spacing: 0.16rem;
        padding-bottom: 0;
        padding-top: 24px;
      }

      // modify pressed state
      a:active {
        background-color: color.adjust(colors.$purple40, $alpha: -0.6);
      }

      // modify the selected nav item
      .nx-text-primary-800 {
        background-color: colors.$purple20;
        color: colors.$purple140;
      }

      // modify the non-selected nav items
      .nx-text-gray-500 {
        color: colors.$purple200;
      }

      // remove the vertical rule within dropdowns
      .before\:nx-w-px:before {
        width: 0;
      }

      // modify hover states
      .hover\:nx-bg-gray-100:hover {
        background-color: colors.$purple20;
        color: colors.$purple140;
      }

      // add background color to focus states
      li > a:focus-visible,
      li > button:focus-visible {
        background-color: colors.$white;
      }

      // add more spacing to focused states
      li {
        margin-left: 4px;
        margin-right: 4px;
      }

      // add more spacing to focused states
      .nx-pt-1 {
        padding-bottom: 0.25rem;
      }

      // decrease the indent in the nav
      ul {
        margin-left: 0;
      }
    }
  }

  // Right-hand sidebar
  .nextra-toc {
    // Remove all hardcoded white backgrounds and shadow filters
    .nx-shadow-\[0_-12px_16px_white\] {
      box-shadow: unset;
    }
    .nx-bg-white {
      background-color: colors.$base100;
    }

    // Add some spacing between the sidebar sections
    ul li {
      margin-top: $base-spacing * 2;
      margin-bottom: $base-spacing * 2;
    }

    // modify selected bookmark
    .nx-text-primary-600 {
      color: colors.$purple100;
    }

    // modify non-selected bookmarks
    // .nx-text-gray-500 {
    //   // background-color: colors.$purple20;
    //   color: colors.$base100;
    // }

    // modify hover states
    .nx-text-gray-500:hover {
      // background-color: colors.$purple20;
      color: colors.$purple100;
    }
  }

  .nextra-breadcrumb {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 500;
  }

  // Custom Search theming from Algolia Docsearch
  .DocSearch {
    --docsearch-primary-color: #{colors.$purple200};
    --docsearch-highlight-color: #{colors.$purple100};
    --docsearch-spacing: #{$base-spacing * 3};
    --docsearch-modal-width: 47rem;
    --docsearch-container-background: rgba(27, 11, 59, 0.85);
    --docsearch-modal-background: white;
    --docsearch-footer-height: 60px;
    --docsearch-hit-color: #{colors.$purple200};
    --docsearch-muted-color: #{colors.$purple200};

    // Global Nextra theming makes the focus ring look a little nasty
    input:focus-visible {
      box-shadow: none;
    }

    &-SearchBar {
      padding: 80px 88px 32px;
    }

    &-Modal {
      border-radius: $border-radius-md;
    }

    &-Dropdown {
      padding: 0 90px;
      margin-bottom: 20px;
    }

    .DocSearch-Hit-action,
    .DocSearch-Hit-icon,
    .DocSearch-Hit-Tree {
      color: #{colors.$purple40};
    }

    &-Hit-Tree {
      opacity: 1;
    }

    &-Hit a {
      transition: background-color 0.1s linear;
      border-radius: 0;
      box-shadow: none;
    }

    &-Hits mark {
      color: colors.$purple100;
      font-weight: bold;
    }

    &-Hit {
      border-radius: $border-radius;
      padding-bottom: initial;
      margin-bottom: $base-spacing;
      border: 2px solid #{colors.$purple100};
      overflow: hidden;
    }

    &-Form {
      border-radius: $border-radius-md;
      box-shadow: inset 0 0 0 2px colors.$grey30;
      transition: box-shadow 0.15s linear;

      .DocSearch-MagnifierLabel {
        color: colors.$grey30;
        transition: color 0.15s linear;
      }

      &:focus-within {
        box-shadow: var(--docsearch-searchbox-shadow);

        .DocSearch-MagnifierLabel {
          color: var(--docsearch-highlight-color);
        }
      }
    }

    &-Footer {
      border-radius: 0 0 $border-radius-md $border-radius-md;
    }

    &-Commands-Key {
      box-shadow: none;
      background: transparent;
      color: colors.$grey50;
    }

    &-Label {
      color: colors.$grey50;
    }

    &-Screen-Icon {
      display: flex;
      justify-content: center;
      color: unset;
    }

    &-NoResults-Prefill-List {
      display: none;
    }

    &-StartScreen {
      display: none;
    }

    &-NoResults {
      color: colors.$grey50;
    }
  }
}

// Dark theme starts here
.dark {
  line-height: 1.8;
  font-size: 0.88rem;
  letter-spacing: 0.3px;

  // We'll handle our own antialiasing.
  .nx-subpixel-antialiased {
    -webkit-font-smoothing: unset;
    -moz-osx-font-smoothing: unset;
  }

  // We'll handle our own tracking.
  .nx-tracking-tight {
    letter-spacing: unset;
  }

  .nx-font-semibold,
  .nx-font-bold,
  p strong {
    font-weight: 500; // Override to a weight that we actually DO support, otherwise we risk faux bold
  }

  .nx-font-semibold,
  .nx-font-bold,
  li strong {
    font-weight: 500; // Override to a weight that we actually DO support, otherwise we risk faux bold
  }

  //set color of hyperlinks
  .nx-underline[href] {
    color: colors.$purple40;
  }

  summary::-webkit-details-marker {
    color: colors.$base100;
  }

  // Get rid of all heading border-bottoms
  h1,
  h2,
  h3,
  h4,
  h5 {
    &.nx-border-b {
      border-width: 0;
    }
  }

  // Set color to markdown headers
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: colors.$base100;
  }

  Modify high level stuff across body body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior-y: none;
    font-family: typography.$garnett-stack;
    // background-color: colors.$black;
  }

  // Modify top nav container
  .nextra-nav-container {
    background-color: colors.$purple200;

    // Modify image assets in top nav
    path {
      fill: colors.$base100;
    }

    .nextra-nav-container-blur {
      background-color: colors.$purple40;
    }

    // Set color for top nav flex region
    .nx-mx-auto > nx-flex {
      background-color: colors.$purple100;
    }

    //Modify top nav tabs
    .nx-text-sm {
      color: colors.$base100;
    }

    // Modify search module
    .Search_searchBar__rnWt2 {
      ::placeholder {
        text-align: center;
      }
    }
  }

  // Modify main body of article
  .nx-w-full > main {
    color: colors.$base100;
  }

  .nx-mt-6 {
    border-bottom: colors.$black;
  }

  // modify buttons in integration pages
  a.nextra-card {
    span {
      display: flex;
      justify-content: center;
      background-color: colors.$purple200;
      &:hover {
        background-color: colors.$purple140;
        transition-duration: 0.5s;
      }
    }
  }

  // Modify code output
  code,
  kbd,
  samp,
  pre {
    font-family: "Apercu Monospaced", monospace;
    font-size: 15px;
    line-height: 150%;
    font-variant-ligatures: none;
    font-feature-settings: normal;
    letter-spacing: initial;
    --shiki-color-text: #d1d1d1;
    --shiki-token-constant: #79b8ff;
    --shiki-token-string: #ffab70;
    --shiki-token-comment: #6b737c;
    --shiki-token-keyword: #f97583;
    --shiki-token-parameter: #ff9800;
    --shiki-token-function: #b392f0;
    --shiki-token-string-expression: #4bb74a;
    --shiki-token-punctuation: #bbb;
    --shiki-token-link: #ffab70;
  }

  //modify code tab switches
  [role~="tab"] {
    color: colors.$base100;
  }

  //modify code tab hover
  [role~="tab"]:hover {
    background-color: colors.$purple20;
    color: colors.$purple140;
  }

  //modify selected tab
  .nx-border-primary-500[role~="tab"] {
    background-color: colors.$purple20;
    color: colors.$purple140;
  }

  //modify code block window
  .nextra-code-block pre {
    background-color: colors.$grey100;
    scrollbar-color: colors.$black;
    box-shadow: 0px -7px 6px -8px rgba(32, 31, 36, 0.1);
  }

  // Modify markdown headers
  .nextra-content {
    h1,
    h2,
    h3,
    h4,
    h5 {
      letter-spacing: -0.3px;
      color: colors.$base100;
    }
  }

  // Modify left-hand Nav
  .nextra-sidebar-container {
    // background-color: colors.$black;

    // .nx-flex {
    //   background-color: colors.$black;
    // }

    // nextra currently doesn't name anything in the sidebar properly and only has tailwind functional
    // names, and so this is hacked together so that we get the view that we want

    // bold the parent links, first two are desktop version, second two are mobile version
    // extra specificity is required because we want to distinguish between the top level and nested files
    .nextra-scrollbar
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > a,
    .nextra-scrollbar
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > button,
    .nextra-scrollbar
      > ul
      > li.open
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > a,
    .nextra-scrollbar
      > ul
      > li.open
      > .nx-transform-gpu
      > .nx-transition-opacity
      > ul
      > li
      > button {
      font-weight: 500;
    }

    // Bottom scroll mask
    > .nx-sticky.nx-bottom-0 {
      // background-color: colors.$black;
      box-shadow: 0px -7px 6px -8px rgba(32, 31, 36, 0.1);
      border-top: colors.$black;
    }

    .nx-transform-gpu > .nx-transition-opacity {
      // styles the separator / category titles text
      .first\:nx-mt-0 {
        align-items: center;
        color: colors.$base100;
        display: flex;
        grid-gap: 8px;
        letter-spacing: 0.16rem;
        padding-bottom: 0;
        padding-top: 24px;
      }

      // modify pressed state
      a:active {
        background-color: color.adjust(colors.$purple40, $alpha: -0.6);
      }

      // modify the selected nav item
      .nx-text-primary-800 {
        background-color: colors.$purple20;
        color: colors.$purple140;
      }

      // modify the non-selected nav items
      .nx-text-gray-500 {
        color: colors.$base80;
      }

      // remove the vertical rule within dropdowns
      .before\:nx-w-px:before {
        width: 0;
      }

      // modify hover states
      .hover\:nx-bg-gray-100:hover {
        background-color: colors.$purple20;
        color: colors.$purple140;
      }

      // add background color to focus states
      li > a:focus-visible,
      li > button:focus-visible {
        background-color: colors.$white;
      }

      // add more spacing to focused states
      li {
        margin-left: 4px;
        margin-right: 4px;
      }

      // add more spacing to focused states
      .nx-pt-1 {
        padding-bottom: 0.25rem;
      }

      // decrease the indent in the nav
      ul {
        margin-left: 0;
      }
    }
  }

  // Modify Right-hand ToC
  .nextra-toc {
    // Remove all hardcoded white backgrounds and shadow filters
    .nx-shadow-\[0_-12px_16px_white\] {
      box-shadow: unset;
    }
    // .nx-bg-white {
    //   background-color: colors.$black;
    // }

    .nextra-scrollbar {
      // set background color for bookmark region
      // background-color: colors.$black;

      // set font color for bookmark header
      p {
        color: colors.$base100;
        cursor: default;
      }

      // modify selected bookmark
      .nx-text-primary-600 {
        color: colors.$purple50;
      }

      // modify non-selected bookmarks
      .nx-text-gray-500 {
        // background-color: colors.$purple20;
        color: colors.$base100;
      }

      // modify hover states
      .nx-text-gray-500:hover {
        // background-color: colors.$purple20;
        color: colors.$purple50;
      }
    }

    // Add some spacing between the sidebar sections
    ul li {
      margin-top: $base-spacing * 2;
      margin-bottom: $base-spacing * 2;
    }
  }

  // Modify breadcrumbs
  .nextra-breadcrumb {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 500;
    color: colors.$base100;
    .nx-font-medium {
      color: colors.$purple50;
    }
    .nx-text-ellipsis:hover {
      color: colors.$purple50;
      cursor: pointer;
    }
  }

  // Custom Search theming from Algolia Docsearch
  .DocSearch {
    // --docsearch-primary-color: #{colors.$purple200};
    // --docsearch-highlight-color: #{colors.$purple100};
    // --docsearch-spacing: #{$base-spacing * 3};
    // --docsearch-modal-width: 47rem;
    // --docsearch-container-background: rgba(27, 11, 59, 0.85);
    // --docsearch-modal-background: white;
    // --docsearch-footer-height: 60px;
    // --docsearch-hit-color: #{colors.$purple200};
    // --docsearch-muted-color: #{colors.$purple200};

    // Global Nextra theming makes the focus ring look a little nasty
    input:focus-visible {
      box-shadow: none;
    }

    //Center placeholder text
    input[class~="searchBar"]::placeholder {
      text-align: center;
    }

    &-SearchBar {
      padding: 80px 88px 32px;
    }

    &-Modal {
      border-radius: $border-radius-md;
    }

    &-Dropdown {
      padding: 0 90px;
      margin-bottom: 20px;
    }

    .DocSearch-Hit-action,
    .DocSearch-Hit-icon,
    .DocSearch-Hit-Tree {
      color: #{colors.$purple40};
    }

    &-Hit-Tree {
      opacity: 1;
    }

    &-Hit a {
      transition: background-color 0.1s linear;
      border-radius: 0;
      box-shadow: none;
    }

    &-Hits mark {
      color: colors.$purple100;
      font-weight: bold;
    }

    &-Hit {
      border-radius: $border-radius;
      padding-bottom: initial;
      margin-bottom: $base-spacing;
      border: 2px solid #{colors.$purple100};
      overflow: hidden;
    }

    &-Form {
      border-radius: $border-radius-md;
      box-shadow: inset 0 0 0 2px colors.$grey30;
      transition: box-shadow 0.15s linear;

      .DocSearch-MagnifierLabel {
        color: colors.$grey30;
        transition: color 0.15s linear;
      }

      &:focus-within {
        box-shadow: var(--docsearch-searchbox-shadow);

        .DocSearch-MagnifierLabel {
          color: var(--docsearch-highlight-color);
        }
      }
    }

    &-Footer {
      border-radius: 0 0 $border-radius-md $border-radius-md;
    }

    &-Commands-Key {
      box-shadow: none;
      background: transparent;
      color: colors.$grey50;
    }

    &-Label {
      color: colors.$grey50;
    }

    &-Screen-Icon {
      display: flex;
      justify-content: center;
      color: unset;
    }

    &-NoResults-Prefill-List {
      display: none;
    }

    &-StartScreen {
      display: none;
    }

    &-NoResults {
      color: colors.$grey50;
    }
  }

  // Fix JSX in Quickstart
  .next-steps-sections {
    .bg-base100 {
      background-color: #111111;
    }
    details {
      background-color: #111111;

      summary {
        background-color: #111111;

        &:hover {
          background-color: #111111;
          font-weight: bold;
        }
      }
    }
  }

  // Modify Footer
  footer {
    background-color: #111111;
    opacity: 100%;
    hr {
      opacity: 0%;
    }
  }

  // Modify copyright text at bottom
  .nx-justify-center {
    color: colors.$base100;
  }

  // Modify hide sidebar button
  button[title="Hide sidebar"] {
    path {
      fill: colors.$base100;
    }
  }

  // Modify contact support area
  // .nx-mt-8 {
  //   border-top: colors.$black;
  // }

  // Modify Navigation buttons at the bottom
  .nx-mb-8 > a {
    color: colors.$base100;
  }

  .nx-mb-8 > a:hover {
    color: colors.$purple50;
  }

  //remove borders around bottom navigation
  // div .nx-mb-8 {
  //   border-color: colors.$black;
  // }

  button [class~="Feedback"] {
    background-color: #111111;
  }
}
