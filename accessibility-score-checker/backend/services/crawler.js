const { chromium, firefox, webkit } = require('playwright');

async function scanPage(url) {
    try{
        const browser = await chromium.launch()
        const page = await browser.newPage()
        await page.goto(url)
        await page.addScriptTag({path: 'node_modules/axe-core/axe.min.js'})
        results = await page.evaluate (() => {
           return axe.run()
        })
        if(results.violations.length > 0) {
            console.log("worked")
        }else{
            console.log("didnt worked or has no violtions")
        }
        await browser.close()
    }catch(error){
        console.log(error);
    }
}
module.exports = { scanPage };
