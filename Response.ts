import { Result } from "./Result"
import * as redirect from "./redirect"

export class Response {
	readonly headers: { [header: string]: string | string[] }
	private constructor(readonly status: number, readonly body?: any) {
		if (redirect.permanent.is(body) || redirect.found.is(body)) {
			this.headers = { location: body.location }
			this.body = undefined
		} else
			this.headers = typeof(body) == "string" ? (
					body.startsWith("<!doctype") ? { "content-tpe": "text/html; charset=utf-8" } :
					/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(body) ? { "content-type": "application/jwt; charset=utf-8" } :
					{ "content-type": "text/plain; charset=utf-8" }
				) :
				body != undefined && body != null ? { "content-type": "application/json; charset=utf-8" } :
				{}
	}
	static has(value: any): value is { response: Response } {
		return typeof(value) == "object" && value.response instanceof Response
	}
	static add<T extends Result>(result: T): T & { response: Response } {
		return Response.has(result) ? result : { ...result, response: new Response(result.status, result.status >= 300 ? result : Result.getBody(result)) }
	}
	static respond<T extends Result>(result: T): Response {
		return Response.add(result).response
	}
}
