# Accessible dropdown menu

By providing your menu information to the `src/lib/menu_items` file, this app can build your HTML markup, along with CSS and JS.

## Setup the app

### Install the app

1. Clone this repo to your computer
2. Open this folder in a Terminal window
3. Run `yarn install`

### Populate your menu information

1. Open the `src/lib/menu_items` file and provide your information

Open `src/lib/menu_items_sample` for example markup.

## Development

Run `yarn run dev` to test the app.

## Preview

You can preview the production build with `yarn run preview`.

## Building your final markup

To create the final markup for your menu:

1. Run `yarn run build`
2. Open the `index.html` file in the `build` directory
3. Find and copy/paste the entire `<nav class="acc-nav"></nav>` element
4. You will also need the `access-menu-min.js` and `access-menu-horizontal.css` files.

You will not need the other CSS files. You can ignore everything else in the `build` directory.
