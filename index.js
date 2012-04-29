var data = require('fs').readFileSync(module.filename, 'utf8');
module.exports = function () {
    console.log(data);
};
if (module === require.main) module.exports();
