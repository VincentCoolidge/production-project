import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import path from "path";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode} = options;

return {
    mode,
    entry:  paths.entry,
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolver(),
}
}