# Accessible dropdown menu

By providing your menu information to the `src/lib/menu` file, this app can build your HTML markup, along with CSS and JS.

For now, there is only one "mode": a "horizontal" menu with dropdown submenus.

I may add other "modes" in the future.

## Setup the app

### Install the app

1. Clone this repo to your computer
2. Open this folder in a Terminal window
3. Run `yarn install`

### Populate your menu information

1. Open the `src/lib/menu` file and provide your information

Open `src/lib/menu_sample` for example markup.

### Modify the CSS

If you wish to modify the `access-menu-horizontal.css` file, you can do so via design tokens.

Open the `tokens.json` file and change the values.

If you wish to customize or add CSS properties that are not already available, you will need to edit or clone the `pcss/access-menu-horizontal.pcss` or create a new file with your desired changes.

## Development

Run `yarn run dev` to test the app.

## Preview

You can preview the production build with `yarn run preview`.

## Building your final markup

To create the final markup for your menu:

1. Run `yarn run build`
2. Open the `index.html` file in the `docs` directory
3. Find and copy/paste the entire `<nav class="acc-nav"></nav>` element
4. You will also need the `access-menu-min.js` and `access-menu-horizontal.css` files.

You will not need the other CSS files. These CSS files are just for this app.

You can ignore everything else in the `docs` directory. I use the `docs` folder for the Github page.
