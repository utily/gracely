export interface Flaw {
	property?: string | number
	type: string
	flaws?: Flaw[]
	condition?: string
}

export namespace Flaw {
	export function is(value: any | Flaw): value is Flaw {
		return (
			typeof value == "object" &&
			(value.property == undefined || typeof value.property == "string" || typeof value.property == "number") &&
			typeof value.type == "string" &&
			(value.flaws == undefined || (Array.isArray(value.flaws) && value.flaws.every(Flaw.is))) &&
			(value.condition == undefined || typeof value.condition == "string")
		)
	}
}
