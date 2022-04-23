import {PathLike} from "fs";

export default function ExistsParameters(valid : boolean, path : PathLike) : string {

    let string = (<any>path).toString();

    if(valid) {

        return `path "${string}" is exists`;

    } else {

        return `path "${string}" is not exists`;
    }
}
