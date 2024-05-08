// ActionTrackID は 英数字と数字の組み合わせで構成されるID
// ここでは、英数字を10桁と数字をUnix Timestampで生成しています。
// 例: 1n9YcoHbCs_1715008685850

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateActionTrackID() {
    let id = '';
    for (let i = 0; i < 10; i++) {
        id += chars[Math.floor(chars.length * Math.random())];
    }
    return id + '_' + Date.now();
}

export default generateActionTrackID;
