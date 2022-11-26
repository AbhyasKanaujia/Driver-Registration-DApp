# Vehicle Registration Project

## Getting Started

### 1. Create an app

1. Sign up for an account at [Alchemy](http://alchemy.com)
2. Go to [the Alchemy dashboard](http://dashboard.alchemy.com)
3. Click on "Create App"
4. Enter the app name "Vehicle Registration"
5. Enter the app description "Vehicle Registration DApp"
6. Choose chain "Ethereum"
7. Choose Network "Goerli"

### 2. Setup MetaMask

1. Follow this official tutorial by MetaMask on [getting started with MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask)
2. Switch MetaMask to Goerli
3. Copy your public address
4. Go to [Goerli FAUCET](https://goerlifaucet.com/)
5. Log in with your Alchemy account
6. Paste your public address
7. Click "Send Me ETH"
8. Click on MetaMask to see the balance increase in a while

### 3. Create the .env

1. In the root of the project, find _.env.example_
2. Duplicate this file and rename it to .env
3. Open .env
4. Go to [the Alchemy dashboard](http://dashboard.alchemy.com)
5. Click on "View Key" for the Vehicle Registration app
6. Copy the "HTTPS" link
7. Replace `API_URL` in _.env_
8. Follow this official tutorial by MetaMask on [How to reveal your Secret Recovery Phrase](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase)
9. Copy the 12-word phrase
10. Replace `MNEMONIC` in _.env_
11. Save _.env_

### 4. Install truffle

1. Download and install node.js.
    - Follow this official instruction by nodejs.dev for your platform on [Installing Node.js via Package Manager](https://nodejs.dev/en/download/package-manager/)
2. Install truffle globally
    - On a Unix-like system use, `sudo npm install -g truffle`
    - On Windows, use, `npm install -g truffle`

#### Windows Execution policy

If the `truffle` command doesn't work on Windows, the execution policy might be set to restricted. Follow these steps to remove the restriction.

This is an extremely dangerous setting change. It might leave space for malicious scripts to run on your system. Do it at your own risk. Alternatively, use `npx`.

1. Open Power Shell as administrator.
2. Enter command `Set-ExecutionPolicy -ExecutionPolicy Unrestricted`
3. Enter `Y` if prompted
