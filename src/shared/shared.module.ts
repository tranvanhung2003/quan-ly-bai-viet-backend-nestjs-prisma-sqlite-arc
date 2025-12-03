import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HashingService } from './services/hashing.service';
import { PrismaService } from './services/prisma.service';
import { TokenService } from './services/token.service';

const sharedServices = [PrismaService, HashingService, TokenService];

@Global()
@Module({
  imports: [JwtModule],
  providers: [...sharedServices],
  exports: [...sharedServices],
})
export class SharedModule {}
