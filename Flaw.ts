import z from "zod"

export interface Flaw {
	property?: string
	type: string
	flaws?: Flaw[]
	condition?: string
}
export namespace Flaw {
	export const validator: z.ZodType<Flaw> = z.lazy(() =>
		z.object({
			property: z.string().optional(),
			type: z.string(),
			flaws: z.array(validator).optional(), // recursive type makes type inference impossible
			condition: z.string().optional(),
		})
	)
	export function is(value: any | Flaw): value is Flaw {
		return validator.safeParse(value).success
	}
	export const flaw = generate("gracely.Flaw", validator)
	export function generate(type: string, validator: z.ZodType): (value: any) => Flaw {
		return (value: any) => {
			const parsed = validator.safeParse(value)
			return {
				type,
				flaws: !("error" in parsed)
					? []
					: parsed.error.errors.map(error => ({
							property: error.path.join("."),
							type:
								"expected" in error && typeof error.expected == "string"
									? error.expected
									: !("validation" in error)
									? "unknown"
									: typeof error.validation == "string"
									? error.validation
									: JSON.stringify(error.validation),
							condition: error.message,
					  })),
			}
		}
	}
}
