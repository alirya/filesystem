import {CallbackParameters} from '@alirya/function/assert/callback';
import ExistsNumberError from './throwable/exists-parameters';
import {existsSync, PathLike} from 'fs';

export function ExistsParameters(
    value : PathLike,
    error : (path:PathLike)=>Error = ExistsNumberError
) : void {

    CallbackParameters(value, existsSync, error);
}

export type ExistsArgument = {
    value : PathLike,
    error ?: (path:PathLike)=>Error
};
export function ExistsParameter({
    value,
    error,
} : ExistsArgument) {

    return ExistsParameters(value, error);
}

namespace Exists {
    export const Parameters = ExistsParameters;
    export const Parameter = ExistsParameter;
    export type Argument = ExistsArgument;
}
export default Exists;
