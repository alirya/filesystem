import {PathLike, promises} from 'fs';
import Callable from '@alirya/function/callable.js';


/**
 *
 * @param file
 * @param source
 * @param converter
 */
export function SerializeAsyncParameters<
    Type extends object
>(
    file : PathLike,
    source : Type,
    converter : Callable<[Type], string> = JSON.stringify
) : Promise<string> {

    const data = converter(source);

    return promises.writeFile(file, data).then(()=>data);
}

export function SerializeAsyncParameter<
    Type extends object
>(  {
        file,
        source,
        converter = JSON.stringify,
    } : {
        file : PathLike,
        source : Type,
        converter : Callable<[Type], string>,
    }
) : Promise<string> {

    return SerializeAsyncParameters(file, source, converter);
}


namespace SerializeAsync {
    export const Parameters = SerializeAsyncParameters;
    export const Parameter = SerializeAsyncParameter;
}
export default SerializeAsync;
