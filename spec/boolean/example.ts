import Example from '../object/example';

export default function Example(object : object) : object is Example {

    // @ts-ignore
    if(typeof object.number !== 'number') {

        return false;
    }

    // @ts-ignore
    if(typeof object.string !== 'string') {

        return false;
    }

    // @ts-ignore
    if(typeof object.boolean !== 'boolean') {

        return false;
    }

    return true;
}
