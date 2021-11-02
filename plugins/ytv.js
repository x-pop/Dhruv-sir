/* Coded by rashi
Re-coded by KTB 
*/

const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*✅️ DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'ytv ?(.*)', fromMe: wk, desc: 'video downloading links from youtube'}, async (message, match) => {

var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
	
        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=${match[1]}`)
	
        const { status, result } = data

	var img = await Axios.get(`${result.thumbnail}`, {responseType: 'arraybuffer'})
	

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: "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6cAfH5kunMeX46YoHO2Y1/MmCBivkNOPEl8XL0/L3kRcvTj/AKxCWpRAf7/K6FET/pe8QuQFIhIgo0XXqR0aF8VALn5NUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlUlAL34NMjwvgo0GXoQJEBADkgIAKoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqBAA/8AF6f/2gAMAwEAAgADAAAAEPbfffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffbfXffbfffffffffffffffffffffffffffffXfXffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffXfffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffXffffedffffffffffWffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffWcfffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffXfffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffXffeffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffefcZefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffWffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffXfffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffXfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcDPPPPPPPPPHMPfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffZfPPPPPPPPPPGfffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffb/PPPPPPPPPPPPH/fffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffavPPPPPPPPPPPPFvfffffffffffffffffffffffffffffffffffefbffbfffffffffffffFfffbfPPPPPPPPPPPPPPHfffafPefffffffffffffffffffffffffffffffffffffffffffffaPPPPPPPPPPPMM/c8PPPPPPPPPPPFOffffffffffffffffffffffffffffffffffffbfffffffff/ADzzzzzzzzp4/wB99Pu2888888888/8AfffffffffffffffffffffXffffffffffffffffffefffffvPPPPPPPKf/ffffffX1fPPOFGPPPvffffffffffffffffffffffffffffffffffffffffffffffvPPPPPPM/ffee7N9fff9/PKF61PPvffffffffffffffffffffffffffffffffffffffbfffffffvPPPPPOJ/fa1nPLKk/fe9PPLrvPPvffffffffffffffffffffffffffffffffffffffffffffffvPPPPPOXfb5PPPPPGn/fdfPPPPPPvffffffffffffffffffffffffffffffffffffffffffffffvPPPPPHvfUvPPPPPPI/fbvPPPPPPrfffffffffffffffeffffffffffffffffffffffffffffffvPPPPPFPfX/ADzzzzzy/wB9o888888+999999999999999999999999999999999999999d999999+888888U99/wDPPPPPPP8A33jzzzzzz733333333333333333333323323333333333333333333337zzzzzzL30rzzzzzzwb31Lzzzzzz733333333333333333333333323333333333333333333337zzzzzz/X39rzzzzyb/31/wA88888+99t9999999999999999999999599999999999999999999+8888888x99rVw84pf99gc888888+99999999999999999V9999999999999999999999999999+8888888+/999/v/8Afff7vPPPPPPPvffffffffffffffffffffffffffffffffffffffffffffffvPPPPPPPH/wD3333333f/AM8888888+9999999999999999999999999999999999999999999999+888888888cz3x9x/wArPPPPPPPPPPvffffffffffffffffffffffffffcfffffefXffffffffffXvPPPPPPPPPPLHjrnPPPPPPPPPPPKtfffffffffffffffffffffffffffTfffffffffffffffffTvPPPPPPPPPPPPPPPPPPPPPPPPPPDvfffffffffffffffffffffffffffffffffffffffffffffbb+MMMMMMMMMMMMMMMMMMMMMMMNH3ffffffffffffffffffffffXffffffffffffffffffffffffffTTTTRTTTTTTTTTTTTTTTTTTffffffffffffffffffffVfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffXfffffffffffffffbfXfeffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffTffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfWfdeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffbffffffffffffeedfffZffWfffdfffffffffffffffffffffffffffffffffffdfffffffffffcaffffffXfffffbfffffffffffffffffbffffffffffffffffffVffedffedffffdfafdfdfffffaffffffffffffffffffffffbffffffffffbffffXffffffffffffffffffffffffffbffffffffafffffdfffffffffffffffffXfffffffdffffffffffffffffffffffffffffffffffffffffffaffffffPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/EAB0RAQACAwEBAQEAAAAAAAAAAAEAERAwUCBAYKD/2gAIAQMBAT8Q/jPDYnfNj3jc90NydcJUqVKlfBUqVKlROgG25ZL2pzzXfq9b2FrUN+Vg9pa81KleRvw9tchcrxUSsj3nJocndcmhyd1yaHJ3XJocndcmhyd13HeTIwfFxch+EuWy/J+ASJoC4Ffg6leKldo+x559j0B+pf5FP//EACARAAICAwEAAwEBAAAAAAAAAAERADEgMFAQIUFR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"})
        });
    
