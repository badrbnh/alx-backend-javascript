mkdir -p task_0 task_1 task_2 task_3 task_4 task_5
mkdir -p task_0/js
touch task_0/js/main.ts task_0/package.json task_0/.eslintrc.js task_0/tsconfig.json task_0/webpack.config.js
mkdir -p task_1/js
touch task_1/js/main.ts task_1/webpack.config.js task_1/tsconfig.json task_1/package.json
mkdir -p task_2/js
touch task_2/js/main.ts task_2/webpack.config.js task_2/tsconfig.json task_2/package.json
mkdir -p task_3/js
touch task_3/js/main.ts task_3/js/interface.ts task_3/js/crud.d.ts
mkdir -p task_4/js/subjects
touch task_4/package.json task_4/tsconfig.json task_4/js/subjects/Cpp.ts task_4/js/subjects/Java.ts task_4/js/subjects/React.ts task_4/js/subjects/Subject.ts task_4/js/subjects/Teacher.ts
mkdir -p task_5/js
touch task_5/js/main.ts task_5/package.json task_5/webpack.config.js task_5/tsconfig.json
touch README.md

echo '{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}' > task_0/package.json task_1/package.json task_2/package.json task_3/package.json task_4/package.json task_5/package.json
echo 'module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};' > task_0/.eslintrc.js task_1/.eslintrc.js task_2/.eslintrc.js task_3/.eslintrc.js task_4/.eslintrc.js task_5/.eslintrc.js

for dir in task_0 task_1 task_2 task_3 task_4 task_5; do echo '{  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}' > "$dir/tsconfig.json"; done
for dir in task_0 task_1 task_2 task_3 task_4 task_5; do echo 'const path = require("path");const HtmlWebpackPlugin = require("html-webpack-plugin");const { CleanWebpackPlugin } = require("clean-webpack-plugin");const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");module.exports = {entry: "./js/main.ts",devtool: "inline-source-map",module: {rules: [{test: /\.tsx?$/,loader: "ts-loader",options: {transpileOnly: true}}]},resolve: {extensions: [".tsx", ".ts", ".js"]},devServer: {contentBase: "./dist"},plugins: [new ForkTsCheckerWebpackPlugin(),new CleanWebpackPlugin(),new HtmlWebpackPlugin({title: "Development"})],output: {filename: "bundle.js",path: path.resolve(__dirname, "dist")}};' > "$dir/webpack.config.js"; done
