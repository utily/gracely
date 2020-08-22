import { Error } from "../Error"
import { Flaw } from "../Flaw"

export function flawedContent(content: Flaw): Error & { content: Flaw } {
	return { status: 400, type: "flawed content", content }
}
export namespace flawedContent {
	export function is(value: any): value is { status: 400; type: "flawed content"; content: Flaw } {
		return Error.is(value) && value.status == 400 && value.type == "flawed content"
	}
}
