import {BACK_URL} from "../settings"

import querystring from 'query-string';

export type IHttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IResponse<R> {
  result: R | null;
  status: number;
  error: Error | null;
  message: string | null;
}

export const baseFetch = async <P, R>(
  url: string,
  params: P,
  method: IHttpMethods = 'GET',
): Promise<IResponse<R>> => {
  const body = method !== 'GET' ? { body: JSON.stringify(params) } : {};

  const hasParams = Object.keys(params).length > 0;
  const urlResult =
    method !== 'GET'
      ? `${BACK_URL}/api/${url}`
      : `${BACK_URL}/api/${url}${hasParams ? '?' : ''}${querystring.stringify(params)}`;
  console.log(urlResult)
  try {
    const res = await fetch(urlResult, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      ...body
    });

    const status = res.status;
    if (status === 401) {
      return {
        result: null,
        status: 401,
        error: null,
        message: '401'
      };
    }

    const json = await res.json();

    return { result: json as R, status, error: null, message: null };
  } catch (error) {
    return {
      result: null,
      status: 401,
      error: error as Error,
      message: error.message
    };
  }
};
