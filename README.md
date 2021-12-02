# Template Mithril, Tailwind, Webpack

## Usage

### Development Mode

```sh
npm run dev
```

### Production Mode

```sh
npm run prod
```

## Files

### `/src`

The source files. These are the ones you want to edit.
In the HTML-File you can find our HTML-Template, which you don't/shouldn't have to edit, because of the usage of Mithril.js.

In the styles.css file there are extension of the default Tailwind CSS Framework.

Finally the index.js contains our "source code" and our application logic. For a quick introducition to Mithril.js [visit this site](https://mithril.js.org/index.html). After you know the concepts and generally how the things work, there are three "main" components in the index.js file. These are the folllowing "header, main, footer". In these "main" components you can find "smaller" components, which are the things that actually make up your application.

### `/dist`

In here are automatically generated files from webpack. Webpack ist a Node.js module, that packs all the things, ideally only those, that your browser needs to display the webpage and "bundles" them into a single Javascript file.
