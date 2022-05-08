export type Result<T = undefined> = {
	status: number
	header?: {
		eTag?: string
		wwwAuthenticate?: string
	}
} &	(T extends undefined ? {} : {body: T}) 

export namespace Result {
	export function is(value: any | Result): value is Result {
		return (
			typeof value == "object" &&
			value &&
			typeof value.status == "number" &&
			(value.header == undefined ||
				(typeof value.header == "object" && (value.header.eTag == undefined || typeof value.header.eTag == "string")))
		)
	}
	export function hasBody(value: any | Result): value is Result & { body: any } {
		return (
			typeof value == "object" &&
			value &&
			typeof value.status == "number" &&
			value.body != undefined &&
			value.body != null
		)
	}
	export function getBody(value: any | Result, fallback?: any): any {
		return hasBody(value) ? value.body : fallback
	}
}
const a: Result = {status: 1}
console.log(a)
