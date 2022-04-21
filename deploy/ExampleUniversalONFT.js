const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const ONFT_ARGS = require("../constants/onftArgs.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    const onftArgs = ONFT_ARGS[hre.network.name]
    const startTimestamp = 1650549600

    console.log(`[${hre.network.name}] LayerZero Endpoint address: ${lzEndpointAddress}`)
    console.log({ onftArgs })
    console.log(`start timestamp: ${startTimestamp}`)

    await deploy("ExampleUniversalONFT", {
        from: deployer,
        args: [lzEndpointAddress, onftArgs.startMintId, onftArgs.endMintId, startTimestamp],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["ExampleUniversalONFT"]
