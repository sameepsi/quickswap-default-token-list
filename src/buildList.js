const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const mumbai = require('./tokens/mumbai.json');
const dogechain = require('./tokens/dogechain.json');
const zktest = require('./tokens/zktest.json');
const zkevm = require('./tokens/zkevm.json');
const manta = require('./tokens/manta.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Quickswap Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'ipfs://QmQ9GCVmLQkbPohxKeCYkbpmwfTvHXrY64TmBsPQAZdbqZ',
    'keywords': [
      'uniswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...dogechain,
      ...zkevm,
      ...mumbai,
      ...zktest,
      ...manta
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
