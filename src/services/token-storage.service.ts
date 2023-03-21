const tokensType = ['token', 'refresh_token'] as const;

export type TokenType = typeof tokensType[number];

export class TokenStorageService {

  static getToken(tokenType: TokenType): string {
    if(!tokensType.includes(tokenType)) {
      throw new Error(`Invalid token type: "${tokenType}"`);
    }

    return localStorage.getItem(`auth:${tokenType}`) as string;
  }

  static storageToken(tokenType: TokenType, token: string) {
    if(!tokensType.includes(tokenType)) {
      throw new Error(`Invalid token type: "${tokenType}"`);
    }

    localStorage.setItem(`auth:${tokenType}`, token);
  }

  static unstorageToken(tokenType?: TokenType) {
    if(tokenType && !tokensType.includes(tokenType)) {
      throw new Error(`Invalid token type: "${tokenType}"`);
    }

    if(tokenType) {
      localStorage.removeItem(`auth:${tokenType}`);
    } else {
      localStorage.removeItem('auth:token');
      localStorage.removeItem('auth:refresh_token');
    }
  }

}
