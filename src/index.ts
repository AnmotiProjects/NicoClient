import fs from 'fs';
import NicoClient from './NicoClient';
import www_NicoVideoJP from './NicoClient/wrapper/NicoVideoJP.www';

async function main() {
    const api = new NicoClient();
    const video = await api.getVideo('sm43083649');
    console.log(video);
    // const www_nicoVideoJP = new www_NicoVideoJP();
    // const videoInfo = await www_nicoVideoJP.fetchVideoInfo('sm43083649');
    // fs.writeFileSync('./temp/videoInfo.json', JSON.stringify(videoInfo, null, 4));
}

main();
