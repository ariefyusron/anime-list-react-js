/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_BE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
