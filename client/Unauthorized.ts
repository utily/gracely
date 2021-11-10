import { Error } from "../Error"
import { Result } from "../Result"

export interface Unauthorized extends Error {
	status: 401
	header?: { wwwAuthenticate?: string }
	type: "not authorized"
	error?: string
}

export function unauthorized(): Error
export function unauthorized(error: string): Error
export function unauthorized(scheme: "basic", parameter?: { realm?: string; charset?: "UTF-8" }): Error
export function unauthorized(scheme?: "basic" | string, parameter?: { realm?: string; charset?: "UTF-8" }): Error {
	const result: Error = { status: 401, type: "not authorized" }
	if (scheme == "basic")
		result.header = {
			wwwAuthenticate: `${scheme[0].toUpperCase()}${scheme.slice(1)}${
				typeof parameter == "object" && parameter && Object.keys(parameter).length > 0
					? ` ${Object.entries(parameter ?? {})
							.map(([p, t]) => `${p}=${t}`)
							.join(", ")}`
					: ""
			}`,
		}
	else
		result.error = scheme
	return result
}

export namespace Unauthorized {
	export function is(value: any): value is Unauthorized {
		return (
			typeof value == "object" &&
			value &&
			value.status == 401 &&
			value.type == "not authorized" &&
			(value.error == undefined || typeof value.error == "string") &&
			(value.header == undefined ||
				(typeof value.header == "object" &&
					value.header &&
					(value.header.wwwAuthenticate == undefined || typeof value.header.wwwAuthenticate == "string"))) &&
			Result.is(value)
		)
	}
}
