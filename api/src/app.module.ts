import { Module } from '@nestjs/common';
import { SocialMediaModule } from './social-media/social-media.module';

@Module({
  imports: [SocialMediaModule],
})
export class AppModule { }
