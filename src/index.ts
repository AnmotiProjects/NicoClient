import fs from 'fs';
import NicoClient from './NicoClient';
import NicoVideoJP from './NicoClient/wrapper/NicoVideoJP';

async function main() {
    const api = new NicoClient();
    const video = await api.getVideo('sm43083649');
    console.log(video);
    // const nicoVideoJP = new NicoVideoJP();
    // const videoInfo = await nicoVideoJP.fetchVideoInfo('sm43083649');
    // fs.writeFileSync('./temp/videoInfo.json', JSON.stringify(videoInfo, null, 4));
}

main();
