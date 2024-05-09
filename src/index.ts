import fs from 'fs';
import axios from 'axios';
import NicoClient from './NicoClient';
import www_NicoVideoJP from './NicoClient/wrapper/NicoVideoJP.www';
import nvapi_NicoVideoJP from './NicoClient/wrapper/NicoVideoJP.nvapi';

const sessionID =
    'user_session_118200835_8b9a1032898ebb50945b4910928c921a3e789e6adda5bf0fd0c709400e223a0c';

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
