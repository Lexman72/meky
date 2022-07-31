const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkdrifters",
    alias: ["nickdrifters"],
    use: "<id>",
    desc: "Speed Drifters Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nicksdriver", { query: text }, "apikey"))
        let caption = `Speed Drifters Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}