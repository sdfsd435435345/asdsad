import { awsS3Config } from '@/helper/env'
import { AwsS3FolderModuleName, AwsS3FolderModuleUseCaseName, awsS3AccessableFolder } from '@/plugins/aws-s3/constants'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { awsS3Client } from '@/plugins/aws-s3'
import { uniqueId } from 'lodash'

const getAwsS3FileRelativePath = (
  moduleName: AwsS3FolderModuleName,
  usecaseName: AwsS3FolderModuleUseCaseName,
  fileNameWithType: string
) => {
  const relativePath = `${awsS3AccessableFolder.h5}/${moduleName}/${usecaseName}/${fileNameWithType}`
  return relativePath
}

/**
 * url 访问权限由 bucket 进行配置
 * @param relativePath 上传到 S3 的相对路径
 */
const getUploadFileUrl = (relativePath: string) => {
  const { bucket, region } = awsS3Config
  const absolutePath = `https://${bucket}.S3.${region}.amazonaws.com/fastpay-h5/${relativePath}`
  return absolutePath
}

function getFileExtension(file: File) {
  return file.name?.split('.').pop() || ''
}

const getFileNameWithType = (file: File) => {
  const extension = getFileExtension(file)
  const nameWithType = extension ? `.${extension}` : ''
  const timestamp = String(Date.now())
  return `${timestamp}_${uniqueId(timestamp)}${nameWithType}`
}

/**
 * 上传文件（视频、图片等）到 AWS S3 相应的模块和用例下
 * 前端配置的 accessKey 权限为仅支持上传
 * @param file
 * @param module
 * @param usecaseName
 * @returns
 */
export const awsS3UploadFile = async (
  file: File,
  module: AwsS3FolderModuleName,
  usecaseName: AwsS3FolderModuleUseCaseName
): Promise<{ url: string }> => {
  return new Promise(async (resolve, reject) => {
    if (!file) reject(new Error(`文件不存在`))

    const { bucket } = awsS3Config
    const filePath = getAwsS3FileRelativePath(module, usecaseName, getFileNameWithType(file))

    const putCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: filePath,
      Body: file,
      ContentType: file.type,
    })

    try {
      await awsS3Client.send(putCommand)
      resolve({
        url: getUploadFileUrl(filePath),
      })
    } catch (error) {
      console.error(error)
      reject(new Error(`上传失败`))
    }
  })
}
