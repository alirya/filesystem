// import ConfigFile from '../../dist/object/config-file-json.js';
// import Example from '../boolean/example.js';
// import {existsSync, unlinkSync} from 'fs';
// import Json from '../../dist/read/json-sync.js';
//
// it('enable console log', () => {spyOn(console, 'log').and.callThrough();});
//
// describe('destination not exists', ()=>{
//
//     let target = __dirname + '/example.json';
//     let source = __dirname + '/example.json-example';
//
//     it(`remove destination`, () => {
//
//         if(existsSync(target)) {
//             unlinkSync(target);
//         }
//     });
//
//     it(`get`, () => {
//
//         let object = ConfigFile(target, source);
//
//         expect(Example(object)).toBeTrue();
//
//         if(Example(object)) {
//
//             expect(object.string).toBe('example');
//         }
//     });
//
//     it(`get by Json`, () => {
//
//         let real = Json.Parameters(target);
//         expect(Example(real)).toBeTrue();
//
//         if(Example(real)) {
//
//             expect(real.string).toBe('example');
//         }
//     });
//
//     it(`remove destination`, () => {
//
//         unlinkSync(target);
//     });
//
// });
//
// it(`both exists`, () => {
//
//     let object = ConfigFile(__dirname + '/exists.json', '-example');
//     expect(Example(object)).toBeTrue();
//
//     if(Example(object)) {
//
//         expect(object.string).toBe('exists');
//     }
// });
//
//
// it(`dest exists, invalid`, () => {
//
//     try {
//
//         let object = ConfigFile(__dirname + '/invalid.json', __dirname + '/invalid.json');
//         fail('exception should thrown');
//
//     } catch (e) {
//
//         expect(e).toBeInstanceOf(Error);
//     }
//
// });
//
// it(`source exists, invalid`, () => {
//
//     try {
//
//         let object = ConfigFile(__dirname + '/invalid-2.json', __dirname + '/invalid-2.json');
//         fail('exception should thrown');
//
//     } catch (e) {
//
//         expect(e).toBeInstanceOf(Error);
//     }
//
// });
//
// it(`not exists`, () => {
//
//     try {
//
//         let object = ConfigFile(__dirname + '/not-exists.json' , __dirname + '/not-exists.json');
//         fail('exception should thrown');
//
//     } catch (e) {
//
//         expect(e).toBeInstanceOf(Error);
//     }
//
// });
