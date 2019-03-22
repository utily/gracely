import { Result } from "./Result"

export class Response {
	readonly headers: { [header: string]: string | string[] }
	private constructor(readonly status: number, readonly body?: any) {
		this.headers = body ? { "content-type": "application/json; charset=utf-8" } : {}
	}
	static add<T extends Result>(result: T): T & { response: Response } {
		return { ...result, response: new Response(result.status, result.status >= 400 ? result : Result.getBody(result)) }
	}
}