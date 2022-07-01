import Json from '../../dist/object/json-sync';
import Example from '../boolean/example';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`exists, valid`, () => {

    let object = Json.Parameters(__dirname + '/real.json');
    expect(Example(object)).toBeTrue();
});

it(`exists, valid, extension not json`, () => {

    let object = Json.Parameters(__dirname + '/real.json');
    expect(Example(object)).toBeTrue();
});


it(`exists, invalid`, () => {

    try {

        let object = Json.Parameters(__dirname + '/invalid.json');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`not exists`, () => {

    try {

        let object = Json.Parameters(__dirname + '/not-exists.json');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});
