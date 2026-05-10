const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/Ã¡/g, 'á');
content = content.replace(/Ã©/g, 'é');
content = content.replace(/Ã\u00AD/g, 'í'); // using unicode escape for Ã­
content = content.replace(/Ã³/g, 'ó');
content = content.replace(/Ãº/g, 'ú');
content = content.replace(/Ã±/g, 'ñ');
content = content.replace(/Â¿/g, '¿');
content = content.replace(/Ã /g, 'Á');
content = content.replace(/Ã‰/g, 'É');
content = content.replace(/Ã /g, 'Í');
content = content.replace(/Ã“/g, 'Ó');
content = content.replace(/Ãš/g, 'Ú');
content = content.replace(/Ã‘/g, 'Ñ');
fs.writeFileSync('index.html', content);
