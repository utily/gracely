import { Error } from "../Error"
import { Result } from "../Result"

export interface MethodNotAllowed extends Error {
	status: 405
	type: "method not allowed"
	header: { allow: MethodNotAllowed.Method[]; eTag?: undefined }
	error?: string
}

export function methodNotAllowed(allow: MethodNotAllowed.Method[], error?: string): MethodNotAllowed {
	return { status: 405, type: "method not allowed", header: { allow }, error }
}

export namespace MethodNotAllowed {
	export const methods: Method[] = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT"]
	export type Method = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT"
	export function is(value: any): value is MethodNotAllowed {
		return (
			typeof value == "object" &&
			value.status == 405 &&
			value.type == "method not allowed" &&
			typeof value.header == "object" &&
			Array.isArray(value.header.allow) &&
			value.header.allow.every((m: any) => methods.includes(m)) &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
