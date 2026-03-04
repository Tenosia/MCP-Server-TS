const SUCCESS_CODE = 0;
const ERROR_CODE = -1;

export function respData<T>(data: T): Response {
  return respJson(SUCCESS_CODE, "ok", data);
}

export function respOk(): Response {
  return respJson(SUCCESS_CODE, "ok");
}

export function respErr(message: string): Response {
  return respJson(ERROR_CODE, message);
}

export function respJson(
  code: number,
  message: string,
  data?: unknown
): Response {
  const payload: { code: number; message: string; data?: unknown } = {
    code,
    message,
  };
  if (data !== undefined && data !== null) {
    payload.data = data;
  }
  return Response.json(payload);
}
