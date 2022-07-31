const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instagram",
    alias: ["igdl","igreel","ig"],
    use: "<url>",
    desc: "Download Media From https://instagram.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram/v2", { url:isUrl(text)[0] }, "apikey"))
        for (let i of fetch.result) killua.sendFile(m.from, i, "", m, { caption: `Download Media From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}