declare namespace NodeJs {
  interface ProcessEnv {
    readonly NODE_ENV: 'local' | 'production';
  }
}

declare type Async<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => Promise<ReturnType<T>>;
