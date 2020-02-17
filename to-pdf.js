const puppeteer = require('puppeteer');
const serve = require('serve');

const server = serve(__dirname, {
  port: 1337,
  clipless: true,
  silent: true,
  ignore: ['node_modules']
});

// this isn't important enough to figure out the race condition.
setTimeout(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:1337', {waitUntil: 'networkidle2'});
    await page.emulateMedia('print');
    await page.pdf({
      path: 'devin-clark-resume.pdf',
      format: 'Letter',
      margin: {
        top: '0.25in',
        bottom: '0.25in',
        left: '0.25in',
        right: '0.25in',
      }
    });

    await browser.close();
    server.stop();
  } catch(ex) {
    server.stop();
    console.log(ex)
    process.exit(1);
  }
}, 5000);