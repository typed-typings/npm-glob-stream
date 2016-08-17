
import gs = require('glob-stream');

let read: NodeJS.ReadableStream;

read = gs.create('xx');
read = gs.create('xx', {});
read = gs.create(['xx'], {});
read = gs.create(['xx'], { cwd: 'xx' });
read = gs.create(['xx'], { base: 'xx' });
read = gs.create(['xx'], { cwdbase: true });

read.on('data', (file: gs.Element) => {
    console.log(file.path, file.base, file.cwd);
});
