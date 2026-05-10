const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Remove the reviews div from all products
content = content.replace(/<div class="flex items-center gap-1 mt-2 text-\[10px\] text-natural-dark\/40">\s*<span class="text-yellow-500">.*?<\/div>/gs, '');

// Fix encoding issues globally
content = content.replace(/Â·/g, '-');
content = content.replace(/NaturalDryÂ® â€”/g, 'NaturalDry® —');

fs.writeFileSync('index.html', content);
