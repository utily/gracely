import { Result } from "../Result"

const methods = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT"]
type Method = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT"

export interface MethodNotAllowed {
	status: 405
	type: "method not allowed"
	header: { allow: Method[] }
	error?: string
}

export namespace MethodNotAllowed {
	export function is(value: any): value is MethodNotAllowed {
		return (
			typeof value == "object" &&
			value.status == 405 &&
			value.type == "method not allowed" &&
			typeof value.header == "object" &&
			Array.isArray(value.header.allow) &&
			value.header.allow.every((m: any) => methods.some(m)) &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
	export function create(allow: Method[], error?: string): MethodNotAllowed {
		return { status: 405, type: "method not allowed", header: { allow }, error }
	}
}
