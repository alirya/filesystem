import {PathLike, promises} from 'fs';
import Callable from '@alirya/function/callable.js';
import {SerializeAsyncParameters} from './serialize-async.js';


export function JsonAsyncParameters<
    Type extends object
>(
    file : PathLike,
    source : Type,
    space?: string | number
) : Promise<string> {

    return SerializeAsyncParameters(file, source, (data)=>JSON.stringify(data, undefined, space));
}


export function JsonAsyncParameter<
    Type extends object
>(  {
        file,
        source,
        space,
    } : {
        file : PathLike,
        source : Type,
        space?: string | number
    }
) : Promise<string> {

    return JsonAsyncParameters(file, source, space);
}


namespace JsonAsync {
    export const Parameters = JsonAsyncParameters;
    export const Parameter = JsonAsyncParameter;
}
export default JsonAsync;

export {JsonAsync as WriteJsonAsync};
export {JsonAsyncParameters as WriteJsonAsyncParameters};
export {JsonAsyncParameter as WriteJsonAsyncParameter};
