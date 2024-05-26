export interface BaseResponse<T> {
  statusCode: number;
  message: string;
  error: BaseError;
}

interface BaseError {
  errorCode: number;
  errorMessage?: string;
  url?: string;
}

