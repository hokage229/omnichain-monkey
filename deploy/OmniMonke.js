const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const ONFT_ARGS = require("../constants/onftArgs.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    const onftArgs = ONFT_ARGS[hre.network.name]
    const startTimestamp = 1650902400

    console.log(`[${hre.network.name}] LayerZero Endpoint address: ${lzEndpointAddress}`)
    console.log({ onftArgs })
    console.log(`start timestamp: ${startTimestamp}`)

    await deploy("OmniMonke", {
        from: deployer,
        args: [lzEndpointAddress, onftArgs.startMintId, onftArgs.endMintId, startTimestamp],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["OmniMonke"]
//avalanche 0x4ce3f32c1091a57e2b475f660fba211ff7815c18
//optimism 0x4ce3f32c1091a57e2b475f660fba211ff7815c18
//fantom 0x4cE3F32C1091a57e2B475F660fba211fF7815c18
//polygon 0x4cE3F32C1091a57e2B475F660fba211fF7815c18
//arbitrum 0x4cE3F32C1091a57e2B475F660fba211fF7815c18
//bsc 0x4cE3F32C1091a57e2B475F660fba211fF7815c18
//ethereum  0x4cE3F32C1091a57e2B475F660fba211fF7815c18

/*
*npx hardhat --network ethereum onftSetTrustedRemote --target-network avalanche
*npx hardhat --network ethereum onftSetTrustedRemote --target-network optimism
*npx hardhat --network ethereum onftSetTrustedRemote --target-network fantom
*npx hardhat --network ethereum onftSetTrustedRemote --target-network polygon
*npx hardhat --network ethereum onftSetTrustedRemote --target-network bsc
*npx hardhat --network ethereum onftSetTrustedRemote --target-network arbitrum

*npx hardhat --network bsc onftSetTrustedRemote --target-network avalanche
*npx hardhat --network bsc onftSetTrustedRemote --target-network optimism
*npx hardhat --network bsc onftSetTrustedRemote --target-network fantom
*npx hardhat --network bsc onftSetTrustedRemote --target-network polygon
*npx hardhat --network bsc onftSetTrustedRemote --target-network arbitrum
*npx hardhat --network bsc onftSetTrustedRemote --target-network ethereum

*npx hardhat --network arbitrum onftSetTrustedRemote --target-network avalanche
*npx hardhat --network arbitrum onftSetTrustedRemote --target-network optimism
*npx hardhat --network arbitrum onftSetTrustedRemote --target-network fantom
*npx hardhat --network arbitrum onftSetTrustedRemote --target-network polygon
*npx hardhat --network arbitrum onftSetTrustedRemote --target-network bsc
*npx hardhat --network arbitrum onftSetTrustedRemote --target-network ethereum

*npx hardhat --network polygon onftSetTrustedRemote --target-network avalanche
*npx hardhat --network polygon onftSetTrustedRemote --target-network optimism
*npx hardhat --network polygon onftSetTrustedRemote --target-network fantom
*npx hardhat --network polygon onftSetTrustedRemote --target-network arbitrum
*npx hardhat --network polygon onftSetTrustedRemote --target-network bsc
*npx hardhat --network polygon onftSetTrustedRemote --target-network ethereum

*npx hardhat --network fantom onftSetTrustedRemote --target-network avalanche
*npx hardhat --network fantom onftSetTrustedRemote --target-network optimism
*npx hardhat --network fantom onftSetTrustedRemote --target-network polygon
*npx hardhat --network fantom onftSetTrustedRemote --target-network arbitrum
*npx hardhat --network fantom onftSetTrustedRemote --target-network bsc
*npx hardhat --network fantom onftSetTrustedRemote --target-network ethereum

*npx hardhat --network optimism onftSetTrustedRemote --target-network avalanche
*npx hardhat --network optimism onftSetTrustedRemote --target-network fantom
*npx hardhat --network optimism onftSetTrustedRemote --target-network polygon
*npx hardhat --network optimism onftSetTrustedRemote --target-network arbitrum
*npx hardhat --network optimism onftSetTrustedRemote --target-network bsc
*npx hardhat --network optimism onftSetTrustedRemote --target-network ethereum

*npx hardhat --network avalanche onftSetTrustedRemote --target-network optimism
*npx hardhat --network avalanche onftSetTrustedRemote --target-network fantom
*npx hardhat --network avalanche onftSetTrustedRemote --target-network polygon
*npx hardhat --network avalanche onftSetTrustedRemote --target-network arbitrum
*npx hardhat --network avalanche onftSetTrustedRemote --target-network bsc
--npx hardhat --network avalanche onftSetTrustedRemote --target-network ethereum
 */