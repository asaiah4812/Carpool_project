import { config } from '@onflow/fcl';

const fclConfigInfo: { [key: string]: { accessNode: string; discoveryWallet: string; discoveryAuthnEndpoint: string } } = {
    testnet: {
        accessNode: 'https://rest-testnet.onflow.org',
        discoveryWallet: 'https://fcl-discovery.onflow.org/testnet/authn',
        discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/testnet/authn',
    },
    mainnet: {
        accessNode: 'https://rest-mainnet.onflow.org',
        discoveryWallet: 'https://fcl-discovery.onflow.org/authn',
        discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/authn',
    }
};

const network = (process.env.SWAP_APP_NETWORK || 'testnet') as 'testnet' | 'mainnet';
console.log(`Network is set to: ${network}`);

config({
    "app.detail.title": "SkillSwap",
    "app.detail.icon": "https://skillswap-orcin.vercel.app/img/logo.png",
    "flow.network": network,
    "accessNode.api": fclConfigInfo[network].accessNode,
    "discovery.wallet": fclConfigInfo[network].discoveryWallet,
    "discovery.authn.endpoint": fclConfigInfo[network].discoveryAuthnEndpoint,
    'discovery.wallet.method': 'IFRAME/RPC',
    'fcl.walletConnect.projectId': 'd70050da5bbea9c7b9e609032dcb2605' // Add your WalletConnect project ID here
});