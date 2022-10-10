import {PathLike, writeFileSync} from "fs";
import Callable from '@alirya/function/callable';

export function SerializeSyncParameters<
    Type extends object
>(
    file : PathLike,
    source : Type,
    converter : Callable<[Type], string> = JSON.stringify
) : string {

    const data = converter(source);

    writeFileSync(file, data);

    return data;
}


export function SerializeSyncParameter<
    Type extends object
>(  {
        path,
        value,
        converter = JSON.stringify,
    } : {
        path: PathLike,
        value : Type,
        converter : Callable<[Type], string>,
    }
) : string {

    return SerializeSyncParameters(path, value, converter);
}


namespace SerializeSync {
    export const Parameters = SerializeSyncParameters;
    export const Parameter = SerializeSyncParameter;
}
export default SerializeSync;
