# [Blockchain]: Consent Timestamping on Base Network

**Priority**: High  
**Labels**: blockchain, backend, contract

## Description
Add blockchain timestamping for immutable consent records on Base network. Store consent document hashes on-chain for proof-of-existence and verification.

## Implementation Details

### Smart Contract Development
- [ ] Create `ConsentRegistry` smart contract
- [ ] Implement consent hash storage function
- [ ] Add verification functions
- [ ] Create event logging for on-chain activities

### Backend Integration
- [ ] Create Base network RPC client
- [ ] Implement consent hash calculation
- [ ] Add blockchain transaction service
- [ ] Create verification API endpoints

### Frontend Changes
- [ ] Add blockchain status indicators
- [ ] Implement verification UI
- [ ] Add transaction status tracking
- [ ] Create blockchain explorer links

### Database Changes
- [ ] Add `blockchain_transactions` table
- [ ] Store transaction hashes and block numbers
- [ ] Add verification status tracking
- [ ] Create blockchain sync status

## Technical Specifications
- **Network**: Base (Ethereum L2)
- **Contract Language**: Solidity
- **Token Standard**: ERC-20 (for future CCNSENT token)
- **Gas Optimization**: Use Base's low fees

## Acceptance Criteria
- [ ] Consent hashes stored on Base network
- [ ] Verification system functional
- [ ] Transaction status properly tracked
- [ ] Frontend displays blockchain status
- [ ] Gas costs optimized for healthcare use case

## Estimated Effort: M

## Dependencies
- Consent document generation
- Base network wallet setup
- Gas fee management

## Testing Requirements
- [ ] Contract unit tests
- [ ] Integration tests with Base testnet
- [ ] Gas cost analysis
- [ ] Security audit for smart contracts