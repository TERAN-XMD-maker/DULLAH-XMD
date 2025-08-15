const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Ua4+iSBT9L/VVM8obTToZXo2o4Aufm/1QQgGlQGFRqDjxv2/Q7plOZnamN1k+FfW495x7z7nfQE5wiUaoBv1voKD4DBlqlqwuEOgDvYoiREEbhJBB0AdkOKzcJNhFvFethTScWOPBNsPby8o9dN28muzWznYVEyl3XsC9DYpqn+LgNwHN5VzoZPZpMOCMke85ujpWi0rbpalyxaPZebec2N0r7ehL7QXcm4gQU5zHVpGgDFGYjlA9hZh+Dr41uMR2aXTOnY1vihUtjq1KXGnZcDRf07ncEtDGVNLNmsu3n4Mv70bFbH0xtMNCIMrNWXq7W30TLSGs4k63w5abScZxtZQl7hN+ieMchU6IcoZZ/em6H50gOQ22ltcZTck1ygb1VSjYgcYF2WGl04qs0TzBIYo38eeAK69xeF6LydrgN6uw6HWXeuhPpotUQ55kTib2bOIeS8kQbuVH4FP6rpXjf6m7YcxXshkt517H23NURLsgP6RCz/GDDRcMO4fZTPdjX53by8/Bn5vWOsdeHR8PNjEL54YqgmTMpMFxjf39awfHUPFz7mSrP+BDVtHfodxGZB3a87HDi7q01NCKZoltKeqB167DerdUfVHeQt9gV4vPh5E5TZK5JLqriC85Ylm3xflil5xYJ6PhMtvfXN+cOcnl5cHoiGonBH3u3gYUxbhkFDJM8sce120DGJ4XKKCIPcoLEldoSfEsHu5SXYymU7zqxtVY3Q4Gru+IG/7QizcTRMcHIXgBbVBQEqCyROEAl4zQ2kVlCWNUgv5fj041pCnKCENDHII+4CVRkXuC0OvK3a/ll0sCWQmL4kuOGGiDiJLMRaDPaIXa4PFAknu8pvGy3DN7CicqmioLQo/TDU40ZI3nGorZM6mPM1QymBWgzymSxKuCJIv39v+Dw+RFQex2BUOyVFXkDP5VV7mewumSIGqKpfwBR+/+dxvk6MqeOm6qL3BtEGFasmVeFSmB4bvI3w9hEJAqZ4s6D4xmgSjof9hGjOE8LhtmVQ5pkOAzMhoeoB/BtETfG44oCt+5vA0xg4SNDk1ppk27ax402JtAP9Wmz/9cnRw2l4GPKMyDpOHZBunzZZdXFLXHq5IgyALf5782+/fvmJsUIWIQp2XjzTFc3bzAstxM65Qz29acWDNiDfzg+O6dpzad05qVr3XcJdPXi8v70maHERHr5XwzE3cj3CE+U+3TPr04L78IAvqgGCkKLrieFjk72Yqn26HZwhba0Ns1uLjF6ZYMiEVb26UQaddJinowQoruVTw/q4ks22656kyNfWBf/PzUyvSNd2np2kuTLURnHKCPyfZyPJNCK5WloZxUF0+rD0WdzuaDNIvkS+7ashLai+mFEC+2hcnw7F+Hp3UFe6o6HI2t81Q6dla742o9PIiQC7XkMveT2dPVj6mSvk1z/OY3/PiNMHoMx7c2/ambT9yN5rr39ocQb9P2XyaWvhildK8HxBuZ18D0jq0Vv81PEze1Vt2JvSBn2VIi/ZRJgQHujfiLFLKI0Az0QZntIWgDSqpGwU4ekd9NcC12zDfWKSyZ9sMVvzCaoD5vTSkpBrBMmgKsFOW0bCRea0WxYJC9mwxozecudHD/B8kJfi2PCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255716945971",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
