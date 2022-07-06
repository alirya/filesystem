import ExistsType from '../../boolean/string/exists.js';
import {PathLike} from 'fs';

export default function Exists(path : PathLike) : Error {

    return new Error(ExistsType.Parameters(false, path));
}

