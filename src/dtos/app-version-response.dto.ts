export interface AppVersionResponseDto {
  id: string;
  versionCode: number;
  downloadUrl: string;
  required: boolean;
  createdAt: Date;
  updatedAt: Date;
}
