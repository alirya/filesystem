import {JsonAsyncParameters} from '../../../dist/read/json-async.js';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('as',  function () {

    it('enable console log',  async () => {

        const data = await JsonAsyncParameters(__dirname + '../../../file/real.json');
        expect(data).toEqual({
            number : 1,
            string : 'real',
            boolean : true
        });
    });
});
