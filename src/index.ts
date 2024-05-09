import fs from 'fs';
import dotenv from 'dotenv';
import axios from 'axios';
import NicoClient from './NicoClient';
import www_NicoVideoJP from './NicoClient/wrapper/NicoVideoJP.www';
import nvapi_NicoVideoJP from './NicoClient/wrapper/NicoVideoJP.nvapi';

dotenv.config();

const sessionID = process.env.SESSION_ID;

async function main() {
    const api = new NicoClient({
        sessionID,
        axios,
        userAgent: 'NicoClient/0.0.1 webmaster@anmoti.com niconico/118200835',
    });
    // const video = await api.getVideo('sm43083649');
    // const checkUpdate = await api.checkUpdate('2', '9.46', '15.8.2');

    // const www_nicoVideoJP = new www_NicoVideoJP();

    // const videoInfo = await www_nicoVideoJP.fetchVideoInfo('sm43083649');
    // fs.writeFileSync('./temp/videoInfo.json', JSON.stringify(videoInfo, null, 4));

    // const nvapi_nicoVideoJP = new nvapi_NicoVideoJP();
}

main();
