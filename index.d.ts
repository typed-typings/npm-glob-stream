
import glob = require('glob');

export interface Options extends glob.Options {
    cwd?: string;
    base?: string;
    cwdbase?: boolean;
}

export interface Element {
    cwd: string;
    base: string;
    path: string;
}

export function create(glob: string, opts?: Options): NodeJS.ReadableStream;
export function create(globs: string[], opts?: Options): NodeJS.ReadableStream;
