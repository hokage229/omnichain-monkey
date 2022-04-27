require("dotenv").config();

require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require("@nomiclabs/hardhat-etherscan")
require('./tasks');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

function getMnemonic(networkName) {
    if (networkName) {
        const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()]
        if (mnemonic && mnemonic !== '') {
            return mnemonic
        }
    }

    const mnemonic = process.env.MNEMONIC
    if (!mnemonic || mnemonic === '') {
        return 'test test test test test test test test test test test junk'
    }
    return mnemonic
}

function accounts(chainKey) {
    return {mnemonic: getMnemonic(chainKey)}
}

function getUrl(networkName) {
    if (networkName) {
        const url = process.env['URL_' + networkName.toUpperCase()]
        if (url && url !== '') {
            return url
        }
    }
    return ""
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

    solidity: "0.8.4",
    contractSizer: {
        alphaSort: false,
        runOnCompile: true,
        disambiguatePaths: false,
    },

    namedAccounts: {
        deployer: {
            default: 0,    // wallet address 0, of the mnemonic in .env
        }
    },

    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            chainId: 4,
            accounts: accounts(),
        },
        'bsc-testnet': {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            chainId: 97,
            accounts: accounts(),
        },
        fuji: {
            url: `https://api.avax-test.network/ext/bc/C/rpc`,
            chainId: 43113,
            accounts: accounts(),
        },
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com/",
            chainId: 80001,
            accounts: accounts(),
        },
        'arbitrum-rinkeby': {
            url: `https://rinkeby.arbitrum.io/rpc`,
            chainId: 421611,
            accounts: accounts(),
        },
        'optimism-kovan': {
            url: `https://kovan.optimism.io/`,
            chainId: 69,
            accounts: accounts(),
        },
        'fantom-testnet': {
            url: `https://rpc.testnet.fantom.network/`,
            chainId: 4002,
            accounts: accounts(),
        },


        ethereum: {
            url: getUrl("ethereum"),
            chainId: 1,
            accounts: accounts(),
        },
        bsc: {
            url: getUrl("bsc"),
            chainId: 56,
            accounts: accounts(),
        },
        avalanche: {
            url: getUrl("avalanche"),
            chainId: 43114,
            accounts: accounts(),
        },
        polygon: {
            url: getUrl("polygon"),
            chainId: 137,
            accounts: accounts(),
        },
        arbitrum: {
            url: getUrl("arbitrum"),
            chainId: 42161,
            accounts: accounts(),
        },
        optimism: {
            url: getUrl("optimism"),
            chainId: 10,
            accounts: accounts(),
        },
        fantom: {
            url: getUrl("fantom"),
            chainId: 250,
            accounts: accounts(),
        }
    },

    etherscan: {
        //need to hide
        apiKey: {
            mainnet: "WSAAUQJZWW2IM1I7SD9IEJSYUZXEYVP8MG",
            bsc: "AX6GED3CWP3N8MS6FQAUPR5RPYDMGMTC9S",
            avalanche: "S2EI1WDSF6HFZIDYWRJF2I5M38UXRRE4G9",
            polygon: "ENXRVRNK82ZZ4V4IUE55JVNH1MDGVD6DN8",
            arbitrumOne: "",
            optimisticEthereum: "Y5MA46HY5PRU1V88PWG23XZSUSFI7TNEVT",
            opera: "ZBI5AMGKSH8ATJ56RI5V4MEJDYYYGV8B92"
        }
    }
};
