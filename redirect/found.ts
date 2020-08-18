import { Result } from "../Result"

export function found(location: string): Result & { location: string } {
	return { status: 302, location }
}
export namespace found {
	export function is(value: any): value is { status: 302; location: string } {
		return Result.is(value) && value.status == 302
	}
}
