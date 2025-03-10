import { JwtPayload, SignOptions } from "jsonwebtoken";

export interface IAuthHelper {
  signToken(payload: JwtPayload, secret: string, options: SignOptions): string;
  verifyToken(token: string, secret: string): string | JwtPayload;
  signHash(data: string): string;
  verifyHash(data: string, hashData: string): boolean;
}
