const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index (9).html', 'utf8');

if (!fs.existsSync('assets')) {
  fs.mkdirSync('assets');
}

// 1. Extract avatar
const avatarMatch = html.match(/<div class="avatar-wrap">\s*<img src="(data:image\/jpeg;base64,[^"]+)"/);
if (avatarMatch) {
  const base64Data = avatarMatch[1].replace(/^data:image\/jpeg;base64,/, '');
  fs.writeFileSync('assets/avatar.jpg', Buffer.from(base64Data, 'base64'));
  console.log('Saved assets/avatar.jpg');
}

// 2. Extract PDF
const pdfMatch = html.match(/href="(data:application\/pdf;base64,[^"]+)"/);
if (pdfMatch) {
  const base64Pdf = pdfMatch[1].replace(/^data:application\/pdf;base64,/, '');
  fs.writeFileSync('assets/Kishore_Kumar_Resume.pdf', Buffer.from(base64Pdf, 'base64'));
  console.log('Saved assets/Kishore_Kumar_Resume.pdf');
}

// 3. Extract projects and images
const pMatch = html.match(/const projects = (\{[\s\S]*?\n  \});/);
if (pMatch) {
  eval('var projects = ' + pMatch[1]);
  Object.keys(projects).forEach(k => {
    const proj = projects[k];
    if (proj.images && proj.images.length) {
      proj.images.forEach((img, idx) => {
        if (img.src && img.src.startsWith('data:image/')) {
          const m = img.src.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
          if (m) {
            const ext = m[1] === 'jpeg' ? 'jpg' : m[1];
            const fname = `assets/${k}_${idx + 1}.${ext}`;
            fs.writeFileSync(fname, Buffer.from(m[2], 'base64'));
            console.log('Saved ' + fname);
          }
        }
      });
    }
  });
}
