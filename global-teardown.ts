import AdmZip from 'adm-zip';
import {FullConfig} from "@playwright/test";

async function globalTeardown(config: FullConfig) {
    const reportPath = config.rootDir + '\\playwright-report';
    const zip = new AdmZip();
    zip.addLocalFolder(reportPath, `./playwrightReport`);
    zip.writeZip(`./report.zip`);
}

export default globalTeardown;