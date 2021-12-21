require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember honey hidden produce bone gather'; 
let testAccounts = [
"0xa5bdb38e9ae62c3c11cd062de5af1a7f24ab2c9f195e861af4339060e76067fc",
"0x9d5bfd4470e784a2df417271c6880b57b1d322f5ab506fda7c6ab45ae09228b6",
"0xa7ea3587b21f5476bc17adc2e1fdd65de1dea6c9d5fedd2cc22295d0bc95e9e5",
"0xbf1c189009949127705d7343f1694c7f311406346c4bdf745b369c7834c0ba83",
"0x4abb04e922c3707bb5584533a019e3b3751883eb1333a459153feb41e4cbe09b",
"0x502ff05858b8ba3243e4c480d63193c600a146a9a7a4b2e0b24f0e6baffbd358",
"0x3d98a10ef4282c98f0184ebec2e4c6a184778f79f96ad3ff0153c3b6976ce2a8",
"0xb26a46bf9a1e28f7a54044f4e796933835d357f159c926e361d7dee0f74ae6f5",
"0x5d31a19a706eda37b490709f0580d77b3cffa10022363d379d36a34d899ae762",
"0x5446b05b87be6b0e4d9380e7ba5503a97aaf45f93b9450eb467a1d6230f49a61"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


