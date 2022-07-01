import ReadDefault from '../../dist/string/read-default';
import {unlinkSync} from 'fs';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`exists, valid`, () => {

    let read = ReadDefault(__dirname + '/data.txt', ()=>{
        fail('callback should not be called');
        return '';
    });

    expect(read.toString()).toBe('string');
});

describe('not exists', ()=>{

    let data : any = undefined;

    it(`not exists, valid`, (done) => {

        let read = ReadDefault(__dirname + '/temporary.txt', ()=>{
            data = Math.random();
            return data;
        });

        expect(read.toString()).toBe(data.toString());

        done();
    });

    it(`not exists, valid`, () => {

        let read = ReadDefault(__dirname + '/temporary.txt', ()=>{
            fail('callback should not be called');
            return '';
        });

        expect(read.toString()).toBe(data.toString());

    });

    it('cleanup', () => {
        unlinkSync(__dirname + '/temporary.txt');
    });
});


