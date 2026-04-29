import { Module } from '@nestjs/common';
import { UploadFileService } from './firebase.service';
import { UsersService } from 'src/modules/users/users.service';
import { FirebaseAdmin } from 'src/firebase-config/firebase.setup';

@Module({
  imports: [],
  providers: [UploadFileService, FirebaseAdmin],
  exports: [UploadFileService]
})
export class UploadFileModule {}
