declare module "index" {
  export function botLogin(token: string): void;
  export class clientStatus {
    constructor(type: string, txt: string, status: string);
    setStatus(): void;
  }
}

declare module "inquirer" {
  interface InquirerPromptModule {
    password: any;
  }

  const inquirer: InquirerPromptModule;
  export = inquirer;
}

declare function startCLI(): Promise<void>;

declare const process: {
  title: string;
  exit(exitCode?: number): void;
  env: {
    SHELL: string;
  };
};

declare const console: {
  clear(): void;
  error(message?: any, ...optionalParams: any[]): void;
};

declare const isGitBash: boolean;

if (isGitBash) {
  console.error(
    "This script is currently not compatible with Git Bash for application issues. Please use a different terminal while we are looking into resolving the problem."
  );
  process.exit(1);
}

startCLI();
