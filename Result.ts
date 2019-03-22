export interface Result {
	status: number
}
export namespace Result {
	export function is(value: any | Result): value is Result {
		return typeof(value) == "object" &&
			typeof(value.status) == "number"
	}
	export function hasBody(value: any | Result): value is (Result & { body: any }) {
		return typeof(value) == "object" &&
			typeof(value.status) == "number" &&
			value.body != undefined && value.body != null
	}
	export function getBody(value: any | Result, fallback?: any): any {
		return hasBody(value) ? value.body : fallback
	}
}
