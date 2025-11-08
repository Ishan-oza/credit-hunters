// test-parse.js
const fs = require('node:fs');
const pdf = require('pdf-parse');

const buf = fs.readFileSync('resume.pdf'); // put your test PDF here
pdf(buf)
  .then(r => {
    console.log('pages:', r.numpages);
    console.log('text length:', r.text.length);
  })
  .catch(e => {
    console.error('FAILED:', e);
  });

