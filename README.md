
# How to Build an Icon Library with TypeScript, Tsup, and SVGR

This project is a TypeScript-based icon library that transforms SVG files into reusable React components using **SVGR** and bundles them efficiently with **Tsup**. This guide will show you how to set up the project, generate components from SVG files, customize them, and publish the library on npm.

## Features

- **Reusable React components**: Automatically generate React components from SVG files.
- **Customizable icons**: Dynamically change the `size` and `color` of icons.
- **Bundled with Tsup**: Efficient bundling for both CommonJS and ES Modules.
- **TypeScript support**: Full type definitions for easy integration into TypeScript projects.

## Project Structure

The folder structure for this project looks like this:

```
my-icons-library/
├── icons/                  # SVG files go here
├── src/
│   └── icons/              # Generated React components
├── scripts/                # Utility scripts for custom tasks
├── index.ts                # Entry point of the library
├── tsconfig.json           # TypeScript config file
├── package.json            # Project settings
└── tsup.config.ts          # Tsup config file for building the project
```

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Generating React Icon Components

Place your SVG files in the `icons/` folder. Then, run the following script to generate the React components from the SVG files:

```bash
npm run generate-icons
```

## Customizing Icons

To add dynamic `size` and `color` properties to your icons, run the following script:

```bash
npm run generate-and-modify-icons
```

This will allow you to customize the appearance of icons when you use them in your React project.

## Building the Library

To bundle the icon components and generate the output files in the `dist/` directory, run:

```bash
npm run build
```

This will create both CommonJS and ES Module bundles, along with the type definitions.

## Publishing to npm

Follow these steps to publish your library to npm:

1. Make sure you're logged in to npm:
   ```bash
   npm login
   ```
2. Publish the package:
   ```bash
   npm publish --access public
   ```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

## Related Articles

For those looking to deepen their understanding of how to create and publish a TypeScript library, I recommend checking out the following resources:

- [How to Create a React Component Library Using Vite’s Library Mode](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
- [How to Write a Tree-Shakable Component Library](https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied)
- [How to Bundle a Tree-Shakable TypeScript Library with Tsup and Publish with npm](https://dev.to/orabazu/how-to-bundle-a-tree-shakable-typescript-library-with-tsup-and-publish-with-npm-3c46)

These articles offer additional insights into creating efficient, tree-shakable libraries.
