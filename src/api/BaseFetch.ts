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
  token: string,
  headers: { [key: string]: string } = {}
): Promise<IResponse<R>> => {
  const body = method !== 'GET' ? { body: JSON.stringify(params) } : {};

  const hasParams = Object.keys(params).length > 0;
  const urlResult =
    method !== 'GET'
      ? `/api/${url}`
      : `/api/${url}${hasParams ? '?' : ''}${querystring.stringify(params)}`;

  try {
    const res = await fetch(urlResult, {
      method,
      ...body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...headers
      }
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
