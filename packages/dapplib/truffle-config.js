require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain honey idea clog once senior'; 
let testAccounts = [
"0x835a9687728b618388d75f89401d11a4cb1722f8c7b4faa5c548da640c089259",
"0xc3512e2c2b96ed909da3de4de61bc503e907c3e04ec1e54d7eed142edde95b33",
"0xd8b803a0298d14a25b541186779f9b65c0c8e924a574c7e025e1187aa752bf99",
"0x96997360a41d9d54575ce5c3229621011cbfb4a07be90c135c012eda03662c13",
"0x48e025100b8673d820ccd17f6cd3ad6a7257ff659461f05ce1c78acef5cc49e8",
"0x918588f25c73881e552e37a0fa9c1ef111597a723196191737451bcf29614de0",
"0x189f784c0b775f322d15e2ac450d4bb5896160e8c1f30b3e5bd70bec0449e682",
"0x456afd97e70d0e2d28b9e1f093ca2df54ec27d1bb4b23cb1cc2d306e5b611b12",
"0xf4d95cae5ad3af3e32a0f2b164fe751a718b5f85c2caea360f14874ed1031526",
"0xa66a09cfa69feddf42974e8641eef9e23575a3c5172e379b22b49e6f345dca5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
