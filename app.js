// Setup a simple express app with a homepage
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.listen(3000)

// Connect Metamask

// Get the address of the sender
// Get the address of the recipient
// Get the total amount of ETH to be sent

// Get the current price of ETH
    // How does the IRS decide what was the price at the moment of the transfer?
// Split the TX into smaller chunks, each below $10k
    // What's the minimum buffer a TX should have in order for the price not to exceed 10k?

// Prepare the TXs
    // How to handle a failure of one of the TXs?
// Sign the TXs
    // have to figure out how to work with Metamask (and other wallets) and signing without revealing the user's private key
// Broadcast the TXs