export const NFT_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "whitelistContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleEnded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const NFT_CONTRACT_ADDRESS = "0xf59c905103b84aa813e3c4b592aed1a0b34bcd44";
export const TOKEN_CONTRACT_ABI = "[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cryptoDevsContract",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTotalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenIdsClaimed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokensPerNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620025dc380380620025dc833981810160405281019062000037919062000327565b6040518060400160405280601081526020017f43727970746f2044657620546f6b656e000000000000000000000000000000008152506040518060400160405280600281526020017f43440000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb9291906200020d565b508060049080519060200190620000d49291906200020d565b505050620000f7620000eb6200013f60201b60201c565b6200014760201b60201c565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003be565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200021b9062000388565b90600052602060002090601f0160209004810192826200023f57600085556200028b565b82601f106200025a57805160ff19168380011785556200028b565b828001600101855582156200028b579182015b828111156200028a5782518255916020019190600101906200026d565b5b5090506200029a91906200029e565b5090565b5b80821115620002b95760008160009055506001016200029f565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ef82620002c2565b9050919050565b6200030181620002e2565b81146200030d57600080fd5b50565b6000815190506200032181620002f6565b92915050565b60006020828403121562000340576200033f620002bd565b5b6000620003508482850162000310565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003a157607f821691505b60208210811415620003b857620003b762000359565b5b50919050565b61220e80620003ce6000396000f3fe6080604052600436106101235760003560e01c806370a08231116100a0578063a0712d6811610064578063a0712d68146103e3578063a457c2d7146103ff578063a9059cbb1461043c578063dd62ed3e14610479578063f2fde38b146104b65761012a565b806370a082311461030e578063715018a61461034b5780637ff9b596146103625780638da5cb5b1461038d57806395d89b41146103b85761012a565b8063313ce567116100e7578063313ce5671461022757806339509351146102525780634e71d92d1461028f5780635afcc2f5146102a65780635f3690af146102d15761012a565b806306fdde031461012c578063095ea7b31461015757806318160ddd1461019457806323b872dd146101bf5780632ab4d052146101fc5761012a565b3661012a57005b005b34801561013857600080fd5b506101416104df565b60405161014e91906115d7565b60405180910390f35b34801561016357600080fd5b5061017e60048036038101906101799190611692565b610571565b60405161018b91906116ed565b60405180910390f35b3480156101a057600080fd5b506101a9610594565b6040516101b69190611717565b60405180910390f35b3480156101cb57600080fd5b506101e660048036038101906101e19190611732565b61059e565b6040516101f391906116ed565b60405180910390f35b34801561020857600080fd5b506102116105cd565b60405161021e9190611717565b60405180910390f35b34801561023357600080fd5b5061023c6105db565b60405161024991906117a1565b60405180910390f35b34801561025e57600080fd5b5061027960048036038101906102749190611692565b6105e4565b60405161028691906116ed565b60405180910390f35b34801561029b57600080fd5b506102a461068e565b005b3480156102b257600080fd5b506102bb6108ff565b6040516102c89190611717565b60405180910390f35b3480156102dd57600080fd5b506102f860048036038101906102f391906117bc565b61090b565b60405161030591906116ed565b60405180910390f35b34801561031a57600080fd5b50610335600480360381019061033091906117e9565b61092b565b6040516103429190611717565b60405180910390f35b34801561035757600080fd5b50610360610973565b005b34801561036e57600080fd5b506103776109fb565b6040516103849190611717565b60405180910390f35b34801561039957600080fd5b506103a2610a06565b6040516103af9190611825565b60405180910390f35b3480156103c457600080fd5b506103cd610a30565b6040516103da91906115d7565b60405180910390f35b6103fd60048036038101906103f891906117bc565b610ac2565b005b34801561040b57600080fd5b5061042660048036038101906104219190611692565b610ba2565b60405161043391906116ed565b60405180910390f35b34801561044857600080fd5b50610463600480360381019061045e9190611692565b610c8c565b60405161047091906116ed565b60405180910390f35b34801561048557600080fd5b506104a0600480360381019061049b9190611840565b610caf565b6040516104ad9190611717565b60405180910390f35b3480156104c257600080fd5b506104dd60048036038101906104d891906117e9565b610d36565b005b6060600380546104ee906118af565b80601f016020809104026020016040519081016040528092919081815260200182805461051a906118af565b80156105675780601f1061053c57610100808354040283529160200191610567565b820191906000526020600020905b81548152906001019060200180831161054a57829003601f168201915b5050505050905090565b60008061057c610e2e565b9050610589818585610e36565b600191505092915050565b6000600254905090565b6000806105a9610e2e565b90506105b6858285611001565b6105c185858561108d565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b6000806105ef610e2e565b9050610683818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461067e9190611910565b610e36565b600191505092915050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016106f09190611825565b602060405180830381865afa15801561070d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610731919061197b565b905060008111610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076d90611a1a565b60405180910390fd5b6000805b82811015610899576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b81526004016107e1929190611a3a565b602060405180830381865afa1580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610822919061197b565b90506007600082815260200190815260200160002060009054906101000a900460ff16610885576001836108569190611910565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061089190611a63565b91505061077a565b50600081116108dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d490611b1e565b60405180910390fd5b6108fa33678ac7230489e80000836108f59190611b3e565b61130e565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61097b610e2e565b73ffffffffffffffffffffffffffffffffffffffff16610999610a06565b73ffffffffffffffffffffffffffffffffffffffff16146109ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e690611be4565b60405180910390fd5b6109f9600061146e565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a3f906118af565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6b906118af565b8015610ab85780601f10610a8d57610100808354040283529160200191610ab8565b820191906000526020600020905b815481529060010190602001808311610a9b57829003601f168201915b5050505050905090565b60008166038d7ea4c68000610ad79190611b3e565b905080341015610b1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1390611c50565b60405180910390fd5b6000670de0b6b3a764000083610b329190611b3e565b905069021e19e0c9bab240000081610b48610594565b610b529190611910565b1115610b93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8a90611ce2565b60405180910390fd5b610b9d338261130e565b505050565b600080610bad610e2e565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610c73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6a90611d74565b60405180910390fd5b610c808286868403610e36565b60019250505092915050565b600080610c97610e2e565b9050610ca481858561108d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610d3e610e2e565b73ffffffffffffffffffffffffffffffffffffffff16610d5c610a06565b73ffffffffffffffffffffffffffffffffffffffff1614610db2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da990611be4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990611e06565b60405180910390fd5b610e2b8161146e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ea6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9d90611e98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0d90611f2a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ff49190611717565b60405180910390a3505050565b600061100d8484610caf565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110875781811015611079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107090611f96565b60405180910390fd5b6110868484848403610e36565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f490612028565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561116d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611164906120ba565b60405180910390fd5b611178838383611534565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f59061214c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112919190611910565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112f59190611717565b60405180910390a3611308848484611539565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561137e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611375906121b8565b60405180910390fd5b61138a60008383611534565b806002600082825461139c9190611910565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f19190611910565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114569190611717565b60405180910390a361146a60008383611539565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561157857808201518184015260208101905061155d565b83811115611587576000848401525b50505050565b6000601f19601f8301169050919050565b60006115a98261153e565b6115b38185611549565b93506115c381856020860161155a565b6115cc8161158d565b840191505092915050565b600060208201905081810360008301526115f1818461159e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611629826115fe565b9050919050565b6116398161161e565b811461164457600080fd5b50565b60008135905061165681611630565b92915050565b6000819050919050565b61166f8161165c565b811461167a57600080fd5b50565b60008135905061168c81611666565b92915050565b600080604083850312156116a9576116a86115f9565b5b60006116b785828601611647565b92505060206116c88582860161167d565b9150509250929050565b60008115159050919050565b6116e7816116d2565b82525050565b600060208201905061170260008301846116de565b92915050565b6117118161165c565b82525050565b600060208201905061172c6000830184611708565b92915050565b60008060006060848603121561174b5761174a6115f9565b5b600061175986828701611647565b935050602061176a86828701611647565b925050604061177b8682870161167d565b9150509250925092565b600060ff82169050919050565b61179b81611785565b82525050565b60006020820190506117b66000830184611792565b92915050565b6000602082840312156117d2576117d16115f9565b5b60006117e08482850161167d565b91505092915050565b6000602082840312156117ff576117fe6115f9565b5b600061180d84828501611647565b91505092915050565b61181f8161161e565b82525050565b600060208201905061183a6000830184611816565b92915050565b60008060408385031215611857576118566115f9565b5b600061186585828601611647565b925050602061187685828601611647565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118c757607f821691505b602082108114156118db576118da611880565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061191b8261165c565b91506119268361165c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561195b5761195a6118e1565b5b828201905092915050565b60008151905061197581611666565b92915050565b600060208284031215611991576119906115f9565b5b600061199f84828501611966565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a04602183611549565b9150611a0f826119a8565b604082019050919050565b60006020820190508181036000830152611a33816119f7565b9050919050565b6000604082019050611a4f6000830185611816565b611a5c6020830184611708565b9392505050565b6000611a6e8261165c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611aa157611aa06118e1565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b08602783611549565b9150611b1382611aac565b604082019050919050565b60006020820190508181036000830152611b3781611afb565b9050919050565b6000611b498261165c565b9150611b548361165c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b8d57611b8c6118e1565b5b828202905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611bce602083611549565b9150611bd982611b98565b602082019050919050565b60006020820190508181036000830152611bfd81611bc1565b9050919050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c3a601783611549565b9150611c4582611c04565b602082019050919050565b60006020820190508181036000830152611c6981611c2d565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611ccc602783611549565b9150611cd782611c70565b604082019050919050565b60006020820190508181036000830152611cfb81611cbf565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d5e602583611549565b9150611d6982611d02565b604082019050919050565b60006020820190508181036000830152611d8d81611d51565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df0602683611549565b9150611dfb82611d94565b604082019050919050565b60006020820190508181036000830152611e1f81611de3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e82602483611549565b9150611e8d82611e26565b604082019050919050565b60006020820190508181036000830152611eb181611e75565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f14602283611549565b9150611f1f82611eb8565b604082019050919050565b60006020820190508181036000830152611f4381611f07565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f80601d83611549565b9150611f8b82611f4a565b602082019050919050565b60006020820190508181036000830152611faf81611f73565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612012602583611549565b915061201d82611fb6565b604082019050919050565b6000602082019050818103600083015261204181612005565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120a4602383611549565b91506120af82612048565b604082019050919050565b600060208201905081810360008301526120d381612097565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612136602683611549565b9150612141826120da565b604082019050919050565b6000602082019050818103600083015261216581612129565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121a2601f83611549565b91506121ad8261216c565b602082019050919050565b600060208201905081810360008301526121d181612195565b905091905056fea264697066735822122027940565b9cac1121c8d4093b33f33076b5d86710acc41ef219da18eed2f981e64736f6c634300080a0033",
  "deployedBytecode": "0x6080604052600436106101235760003560e01c806370a08231116100a0578063a0712d6811610064578063a0712d68146103e3578063a457c2d7146103ff578063a9059cbb1461043c578063dd62ed3e14610479578063f2fde38b146104b65761012a565b806370a082311461030e578063715018a61461034b5780637ff9b596146103625780638da5cb5b1461038d57806395d89b41146103b85761012a565b8063313ce567116100e7578063313ce5671461022757806339509351146102525780634e71d92d1461028f5780635afcc2f5146102a65780635f3690af146102d15761012a565b806306fdde031461012c578063095ea7b31461015757806318160ddd1461019457806323b872dd146101bf5780632ab4d052146101fc5761012a565b3661012a57005b005b34801561013857600080fd5b506101416104df565b60405161014e91906115d7565b60405180910390f35b34801561016357600080fd5b5061017e60048036038101906101799190611692565b610571565b60405161018b91906116ed565b60405180910390f35b3480156101a057600080fd5b506101a9610594565b6040516101b69190611717565b60405180910390f35b3480156101cb57600080fd5b506101e660048036038101906101e19190611732565b61059e565b6040516101f391906116ed565b60405180910390f35b34801561020857600080fd5b506102116105cd565b60405161021e9190611717565b60405180910390f35b34801561023357600080fd5b5061023c6105db565b60405161024991906117a1565b60405180910390f35b34801561025e57600080fd5b5061027960048036038101906102749190611692565b6105e4565b60405161028691906116ed565b60405180910390f35b34801561029b57600080fd5b506102a461068e565b005b3480156102b257600080fd5b506102bb6108ff565b6040516102c89190611717565b60405180910390f35b3480156102dd57600080fd5b506102f860048036038101906102f391906117bc565b61090b565b60405161030591906116ed565b60405180910390f35b34801561031a57600080fd5b50610335600480360381019061033091906117e9565b61092b565b6040516103429190611717565b60405180910390f35b34801561035757600080fd5b50610360610973565b005b34801561036e57600080fd5b506103776109fb565b6040516103849190611717565b60405180910390f35b34801561039957600080fd5b506103a2610a06565b6040516103af9190611825565b60405180910390f35b3480156103c457600080fd5b506103cd610a30565b6040516103da91906115d7565b60405180910390f35b6103fd60048036038101906103f891906117bc565b610ac2565b005b34801561040b57600080fd5b5061042660048036038101906104219190611692565b610ba2565b60405161043391906116ed565b60405180910390f35b34801561044857600080fd5b50610463600480360381019061045e9190611692565b610c8c565b60405161047091906116ed565b60405180910390f35b34801561048557600080fd5b506104a0600480360381019061049b9190611840565b610caf565b6040516104ad9190611717565b60405180910390f35b3480156104c257600080fd5b506104dd60048036038101906104d891906117e9565b610d36565b005b6060600380546104ee906118af565b80601f016020809104026020016040519081016040528092919081815260200182805461051a906118af565b80156105675780601f1061053c57610100808354040283529160200191610567565b820191906000526020600020905b81548152906001019060200180831161054a57829003601f168201915b5050505050905090565b60008061057c610e2e565b9050610589818585610e36565b600191505092915050565b6000600254905090565b6000806105a9610e2e565b90506105b6858285611001565b6105c185858561108d565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b6000806105ef610e2e565b9050610683818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461067e9190611910565b610e36565b600191505092915050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016106f09190611825565b602060405180830381865afa15801561070d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610731919061197b565b905060008111610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076d90611a1a565b60405180910390fd5b6000805b82811015610899576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b81526004016107e1929190611a3a565b602060405180830381865afa1580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610822919061197b565b90506007600082815260200190815260200160002060009054906101000a900460ff16610885576001836108569190611910565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061089190611a63565b91505061077a565b50600081116108dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d490611b1e565b60405180910390fd5b6108fa33678ac7230489e80000836108f59190611b3e565b61130e565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61097b610e2e565b73ffffffffffffffffffffffffffffffffffffffff16610999610a06565b73ffffffffffffffffffffffffffffffffffffffff16146109ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e690611be4565b60405180910390fd5b6109f9600061146e565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a3f906118af565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6b906118af565b8015610ab85780601f10610a8d57610100808354040283529160200191610ab8565b820191906000526020600020905b815481529060010190602001808311610a9b57829003601f168201915b5050505050905090565b60008166038d7ea4c68000610ad79190611b3e565b905080341015610b1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1390611c50565b60405180910390fd5b6000670de0b6b3a764000083610b329190611b3e565b905069021e19e0c9bab240000081610b48610594565b610b529190611910565b1115610b93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8a90611ce2565b60405180910390fd5b610b9d338261130e565b505050565b600080610bad610e2e565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610c73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6a90611d74565b60405180910390fd5b610c808286868403610e36565b60019250505092915050565b600080610c97610e2e565b9050610ca481858561108d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610d3e610e2e565b73ffffffffffffffffffffffffffffffffffffffff16610d5c610a06565b73ffffffffffffffffffffffffffffffffffffffff1614610db2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da990611be4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990611e06565b60405180910390fd5b610e2b8161146e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ea6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9d90611e98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0d90611f2a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ff49190611717565b60405180910390a3505050565b600061100d8484610caf565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110875781811015611079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107090611f96565b60405180910390fd5b6110868484848403610e36565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f490612028565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561116d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611164906120ba565b60405180910390fd5b611178838383611534565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f59061214c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112919190611910565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112f59190611717565b60405180910390a3611308848484611539565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561137e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611375906121b8565b60405180910390fd5b61138a60008383611534565b806002600082825461139c9190611910565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f19190611910565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114569190611717565b60405180910390a361146a60008383611539565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561157857808201518184015260208101905061155d565b83811115611587576000848401525b50505050565b6000601f19601f8301169050919050565b60006115a98261153e565b6115b38185611549565b93506115c381856020860161155a565b6115cc8161158d565b840191505092915050565b600060208201905081810360008301526115f1818461159e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611629826115fe565b9050919050565b6116398161161e565b811461164457600080fd5b50565b60008135905061165681611630565b92915050565b6000819050919050565b61166f8161165c565b811461167a57600080fd5b50565b60008135905061168c81611666565b92915050565b600080604083850312156116a9576116a86115f9565b5b60006116b785828601611647565b92505060206116c88582860161167d565b9150509250929050565b60008115159050919050565b6116e7816116d2565b82525050565b600060208201905061170260008301846116de565b92915050565b6117118161165c565b82525050565b600060208201905061172c6000830184611708565b92915050565b60008060006060848603121561174b5761174a6115f9565b5b600061175986828701611647565b935050602061176a86828701611647565b925050604061177b8682870161167d565b9150509250925092565b600060ff82169050919050565b61179b81611785565b82525050565b60006020820190506117b66000830184611792565b92915050565b6000602082840312156117d2576117d16115f9565b5b60006117e08482850161167d565b91505092915050565b6000602082840312156117ff576117fe6115f9565b5b600061180d84828501611647565b91505092915050565b61181f8161161e565b82525050565b600060208201905061183a6000830184611816565b92915050565b60008060408385031215611857576118566115f9565b5b600061186585828601611647565b925050602061187685828601611647565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118c757607f821691505b602082108114156118db576118da611880565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061191b8261165c565b91506119268361165c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561195b5761195a6118e1565b5b828201905092915050565b60008151905061197581611666565b92915050565b600060208284031215611991576119906115f9565b5b600061199f84828501611966565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a04602183611549565b9150611a0f826119a8565b604082019050919050565b60006020820190508181036000830152611a33816119f7565b9050919050565b6000604082019050611a4f6000830185611816565b611a5c6020830184611708565b9392505050565b6000611a6e8261165c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611aa157611aa06118e1565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b08602783611549565b9150611b1382611aac565b604082019050919050565b60006020820190508181036000830152611b3781611afb565b9050919050565b6000611b498261165c565b9150611b548361165c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b8d57611b8c6118e1565b5b828202905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611bce602083611549565b9150611bd982611b98565b602082019050919050565b60006020820190508181036000830152611bfd81611bc1565b9050919050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c3a601783611549565b9150611c4582611c04565b602082019050919050565b60006020820190508181036000830152611c6981611c2d565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611ccc602783611549565b9150611cd782611c70565b604082019050919050565b60006020820190508181036000830152611cfb81611cbf565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d5e602583611549565b9150611d6982611d02565b604082019050919050565b60006020820190508181036000830152611d8d81611d51565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df0602683611549565b9150611dfb82611d94565b604082019050919050565b60006020820190508181036000830152611e1f81611de3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e82602483611549565b9150611e8d82611e26565b604082019050919050565b60006020820190508181036000830152611eb181611e75565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f14602283611549565b9150611f1f82611eb8565b604082019050919050565b60006020820190508181036000830152611f4381611f07565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f80601d83611549565b9150611f8b82611f4a565b602082019050919050565b60006020820190508181036000830152611faf81611f73565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612012602583611549565b915061201d82611fb6565b604082019050919050565b6000602082019050818103600083015261204181612005565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120a4602383611549565b91506120af82612048565b604082019050919050565b600060208201905081810360008301526120d381612097565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612136602683611549565b9150612141826120da565b604082019050919050565b6000602082019050818103600083015261216581612129565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121a2601f83611549565b91506121ad8261216c565b602082019050919050565b600060208201905081810360008301526121d181612195565b905091905056fea264697066735822122027940565b9cac1121c8d4093b33f33076b5d86710acc41ef219da18eed2f981e64736f6c634300080a0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
";
export const TOKEN_CONTRACT_ADDRESS = "0x6294548d2F95f385C1c32622bf2Bc61364f5a5F2";
