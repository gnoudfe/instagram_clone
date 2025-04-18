interface CustomFetchConfig {
  method?: string;
  body?: any;
  token?: string;
  headers?: Record<string, string>;
}

export class ApiClient {
  private host: string;
  private prefix: string;
  private headers: Record<string, string>;

  constructor(host: string, prefix: string = "") {
    this.host = host;
    this.prefix = prefix;
    this.headers = {
      Accept: "application/json",
      lang: "vi",
    };
  }
  private get basePath(): string {
    return this.prefix ? `${this.host}/${this.prefix}` : this.host;
  }

  private getHeaders(config: CustomFetchConfig): Record<string, string> {
    const headers = { ...this.headers };

    const token = config.token;

    if (token) {
      headers.Authorization = token;
    }

    // Kiểm tra nếu body là FormData thì không thiết lập Content-Type
    if (
      config.body &&
      !(config.body instanceof FormData) &&
      config.method !== "GET"
    ) {
      headers["Content-Type"] = "application/json"; // Giữ Content-Type là "application/json" nếu không phải FormData
    }

    return headers;
  }

  public async Http({
    path,
    config = {},
    isServer = false,
  }: {
    path: string;
    config?: CustomFetchConfig;
    isServer?: boolean;
  }): Promise<any> {
    const {
      method = "GET",
      body,
      headers: customHeaders,
      ...restConfig
    } = config;
    const headers = {
      ...this.getHeaders(config),
      ...customHeaders,
    };

    const isFormData = body instanceof FormData;

    const fetchConfig: RequestInit = {
      method,
      headers,
      credentials: isServer ? "omit" : "include", // client => include
      body:
        method !== "GET" && body
          ? isFormData
            ? body
            : JSON.stringify(body)
          : undefined,
      cache: "no-cache" as RequestCache,
      ...restConfig,
    };

    try {
      const response = await fetch(this.basePath + path, fetchConfig);
      return response.json();
    } catch (error: any) {
      return {
        status: "error",
        message: error.message || "Something went wrong",
      };
    }
  }
}
