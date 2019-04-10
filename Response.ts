import { Result } from "./Result"

export class Response {
	readonly headers: { [header: string]: string | string[] }
	private constructor(readonly status: number, readonly body?: any) {
		this.headers = typeof(body) == "string" ? { "content-type": "text/html; charset=utf-8" } :
			body != undefined && body != null ? { "content-type": "application/json; charset=utf-8" } : {}
	}
	static add<T extends Result>(result: T): T & { response: Response } {
		return { ...result, response: new Response(result.status, result.status >= 400 ? result : Result.getBody(result)) }
	}
	static respond<T extends Result>(result: T): Response {
		return Response.add(result).response
	}
}
