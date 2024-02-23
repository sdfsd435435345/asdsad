import { awsS3Config } from '@/helper/env'
import { S3Client } from '@aws-sdk/client-s3'

export const awsS3Client = new S3Client({
  credentials: {
    accessKeyId: awsS3Config.accessKeyId,
    secretAccessKey: awsS3Config.secretAccessKey,
  },
  region: awsS3Config.region,
})
