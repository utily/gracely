export interface Result {
	status: number
	body?: any
	header?: {
		eTag?: string
		wwwAuthenticate?: string
	}
}
export namespace Result {
	export function is(value: any | Result): value is Result {
		return (
			typeof value == "object" &&
			typeof value.status == "number" &&
			(value.header == undefined ||
				(typeof value.header == "object" && (value.header.eTag == undefined || typeof value.header.eTag == "string")))
		)
	}
	export function hasBody(value: any | Result): value is Result & { body: any } {
		return typeof value == "object" && typeof value.status == "number" && value.body != undefined && value.body != null
	}
	export function getBody(value: any | Result, fallback?: any): any {
		return hasBody(value) ? value.body : fallback
	}
}
