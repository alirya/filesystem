import ConfigSuffix from '../../dist/object/config-suffix-json';
import Example from '../boolean/example';
import {existsSync, unlinkSync} from 'fs';
import Json from '../../dist/object/json-sync';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('destination not exists', ()=>{

    let target = __dirname + '/example.json';

    it(`remove destination`, () => {

        if(existsSync(target)) {
            unlinkSync(target);
        }
    });

    it(`get`, () => {

        let object = ConfigSuffix(target, '-example');

        expect(Example(object)).toBeTrue();

        if(Example(object)) {

            expect(object.string).toBe('example');
        }
    });

    it(`get by Json`, () => {

        let real = Json.Parameters(target);
        expect(Example(real)).toBeTrue();

        if(Example(real)) {

            expect(real.string).toBe('example');
        }
    });

    it(`remove destination`, () => {

        unlinkSync(target);
    });

});

it(`both exists`, () => {

    let object = ConfigSuffix(__dirname + '/exists.json', '-example');
    expect(Example(object)).toBeTrue();

    if(Example(object)) {

        expect(object.string).toBe('exists');
    }
});


it(`dest exists, invalid`, () => {

    try {

        let object = ConfigSuffix(__dirname + '/invalid.json', '-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`source exists, invalid`, () => {

    try {

        let object = ConfigSuffix(__dirname + '/invalid-2.json', '-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`not exists`, () => {

    try {

        let object = ConfigSuffix(__dirname + '/not-exists.json' , '-example');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});
