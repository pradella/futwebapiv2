export interface IUTAuctionEntity {
  canBid(): boolean;
  canBuy(): boolean;
  canWatch(): boolean;
  getAge(): number;
  getAgeInSeconds(): number;
  getSecondsRemaining(): number;
  isActiveTrade(): boolean;
  isBid(): boolean;
  isBought(): boolean;
  isClosedTrade(): boolean;
  isExpired(): boolean;
  isHighestBid(): boolean;
  isInactive(): boolean;
  isOutbid(): boolean;
  isPendingExpiry(): boolean;
  isSelling(): boolean;
  isSold(): boolean;
  isStale(): boolean;
  isValid(): boolean;
  isWon(): boolean;
  buyNowPrice: number;
  currentBid: number;
  expires: number;
  isUpdating: boolean;
  stale: boolean;
  startingBid: number;
  timestamp: number;
  tradeId: string;
  tradeOwner: boolean;
  _bidState: string;
  _tradeState: string;
  _watched: boolean;
}