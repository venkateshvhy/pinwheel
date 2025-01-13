import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";

export interface IQueryParam {
  [key: string]: string | number;
}

type TServiceCall = {
  endpoint: string;
  method: string;
  body?: any;
  pathParams?: string | number;
  queryParams?: IQueryParam;
};

export function getHeaders() {
  const headers: { [key: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
    "Access-Control-Allow-Headers": "*",
  };

  return headers;
}

export const generateApiEndPoint = ({
  endpoint,
  pathParams,
  queryParams,
}: {
  endpoint: string;
  pathParams?: string | number;
  queryParams?: IQueryParam;
}) => {
  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);
  let url = `${baseURL}/api/${endpoint}`;

  if (pathParams) url = `${url}/${pathParams}`;

  if (queryParams) {
    const params: string[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      params.push(`${key}=${value}`);
    }

    if (params.length > 0) url = `${url}?${params.join("&")}`;
  }
  return url;
};

export default async function ServiceCall({
  endpoint,
  method,
  body,
  pathParams = "",
  queryParams = {},
}: TServiceCall) {
  const url = generateApiEndPoint({ endpoint, pathParams, queryParams });
  const headers = getHeaders();
  const loadingStore = useLoadingStore(); // Access loading store

  loadingStore.startLoading(); // Start loading
  const options: AxiosRequestConfig<any> = {
    url,
    method,
    headers,
    ...(body && { data: body }),
  };

  try {
    const response: AxiosResponse = await axios(options);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    const responseStatus = error?.response?.status || 500;
    const responseData = error?.response?.data || { message: "An unknown error occurred" };

    console.error(`Error in ServiceCall: ${responseStatus}`, responseData);
    return {
      status: responseStatus,
      data: responseData,
    };
  } finally {
    loadingStore.stopLoading(); // Stop loading
  }
}
