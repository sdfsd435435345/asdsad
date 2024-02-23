/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_AWS_S3_ACCESS_KEY_ID: string
  readonly VITE_AWS_S3_SECRET_ACCESS_KEY: string
  readonly VITE_AWS_S3_REGION: string
  readonly VITE_AWS_S3_BUCKET: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
