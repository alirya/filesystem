import {ensureDir, EnsureOptions} from "fs-extra";
import {JsonAsyncParameter, JsonAsyncParameters} from "./json-async";

export type EnsureDirectoryOption = EnsureOptions | number;

export function EnsureDirectoryParameters(
    path: string,
    option?: EnsureDirectoryOption
) : Promise<string> {

    return ensureDir(path, option).then(()=>path);
}

export function EnsureDirectoryParameter(
    {
        path,
        option,
    } : {
        path: string,
        option?: EnsureDirectoryOption
    }
) : Promise<string> {

    return EnsureDirectoryParameters(path, option)
}


namespace JsonAsync {
    export const Parameters = EnsureDirectoryParameters;
    export const Parameter = EnsureDirectoryParameter;
}
export default JsonAsync;