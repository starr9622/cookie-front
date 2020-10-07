import axios, { AxiosResponse, AxiosError } from "axios";
import endpoint from "./endpoint.config";

interface IApiError {
  status: string;
  statusCode: number;
  errorMessage: string;
}

export class ApiError implements IApiError {
  status: string = "";
  statusCode: number = 0;
  errorMessage: string = "";

  constructor(err: AxiosError) {
    this.status = err.response.data.status;
    this.statusCode = err.response.status;
    this.errorMessage = err.response.data.errorMessage;
  }
}

export function fetchSearch() {
  return new Promise((resolve, reject) => {
    axios
      .get(endpoint.searchItem)
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });
}
