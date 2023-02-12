import {PathLike} from 'fs';

export function ExistsParameters(valid : boolean, path : PathLike) : string {

    const string = (<any>path).toString();

    if(valid) {

        return `path "${string}" is exists`;

    } else {

        return `path "${string}" is not exists`;
    }
}

export type ExistsArgument = {
    valid : boolean;
    path : PathLike;
};

export function ExistsParameter(
    {
        valid,
        path,
    } : ExistsArgument
) {

    return ExistsParameters(valid, path);
}

namespace Exists {
    export const Parameters = ExistsParameters;
    export const Parameter = ExistsParameter;
    export type Argument = ExistsArgument;
}
export default Exists;
