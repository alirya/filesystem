import ConfigDirectory from '../../dist/object/config-directory-json';
import Example from '../boolean/example';
import {existsSync, unlinkSync} from 'fs';
import Json from '../../dist/object/json-sync';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


let directory = __dirname;

describe('destination not exists', ()=>{

    it(`remove destination`, () => {

        if(existsSync(directory + '/example.json')) {
            unlinkSync(directory + '/example.json');
        }
    });

    it(`get`, () => {

        let object = ConfigDirectory(directory,'/example.json', '/example.json-example');

        expect(Example(object)).toBeTrue();

        if(Example(object)) {

            expect(object.string).toBe('example');
        }
    });

    it(`get by Json`, () => {

        let real = Json.Parameters(directory + '/example.json');
        expect(Example(real)).toBeTrue();

        if(Example(real)) {

            expect(real.string).toBe('example');
        }
    });

    it(`remove destination`, () => {

        unlinkSync(directory + '/example.json');
    });

});

it(`both exists`, () => {

    let object = ConfigDirectory(directory, '/exists.json', '/exists.json-example');
    expect(Example(object)).toBeTrue();

    if(Example(object)) {

        expect(object.string).toBe('exists');
    }
});


it(`dest exists, invalid`, () => {

    try {

        let object = ConfigDirectory(directory, '/invalid.json', '/invalid.json-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`source exists, invalid`, () => {

    try {

        let object = ConfigDirectory(directory, '/invalid-2.json', '/invalid-2.json-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`not exists`, () => {

    try {

        let object = ConfigDirectory(directory, '/not-exists.json' , '/not-exists.json-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});
