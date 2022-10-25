const { default: makeWASocket, makeInMemoryStore, fetchLatestBaileysVersion, useMultiFileAuthState, DisconnectReason } = require('@adiwajshing/baileys')

const connectToWhatsApp = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')
    const { version, isLatest } = await fetchLatestBaileysVersion()
    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true
    })
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
            console.log("----------------------------")
            console.log(update)
            // console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
            // reconnect if not logged out
            if(shouldReconnect) {
                // connectToWhatsApp()
            }
        } else if(connection === 'open') {
            console.log('opened connection')
        }
    })
}

connectToWhatsApp()

  