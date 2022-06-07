import * as gracely from "../index"

describe("client", () => {
	it("missing query argument", () => {
		const e = gracely.client.missingQueryArgument("argument", "string", "description of argument")
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing query argument",
			argument: {
				name: "argument",
				type: "string",
				description: "description of argument",
			},
			response: undefined,
		})
	})
	it("missing property w/ description", () => {
		const e = gracely.client.missingProperty("property", "string", "description of property")
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing property",
			content: {
				property: "property",
				type: "string",
				description: "description of property",
			},
			response: undefined,
		})
	})
	it("missing property w/ object", () => {
		const e = gracely.client.missingProperty("property", "string", { url: "http://example.com", key: "abcdef" })
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing property",
			content: {
				property: "property",
				type: "string",
				url: "http://example.com",
				key: "abcdef",
			},
			response: undefined,
		})
	})
	it("client errors create and is tests", () => {
		expect(gracely.client.FlawedContent.is(gracely.client.flawedContent({ type: "test" }))).toBeTruthy()
		expect(
			gracely.client.FlawedContent.is(
				gracely.client.flawedContent(
					{
						type: "test",
						property: "test2",
						condition: "isNotTest?",
						flaws: [gracely.client.flawedContent({ type: "test", property: "test2" })],
					},
					"error"
				)
			)
		).toBeTruthy()
		expect(gracely.client.InvalidContent.is(gracely.client.invalidContent("type", "description"))).toBeTruthy()
		expect(
			gracely.client.InvalidContent.is(gracely.client.invalidContent("type", "description", "details"))
		).toBeTruthy()
		expect(
			gracely.client.InvalidContent.is(gracely.client.invalidContent("type", "description", { details: "test" }))
		).toBeTruthy()
		expect(
			gracely.client.InvalidContent.is(
				gracely.client.invalidContent("type", "description", { details: "test" }, "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.InvalidPathArgument.is(
				gracely.client.invalidPathArgument("pattern", "name", "type", "description")
			)
		).toBeTruthy()
		expect(
			gracely.client.InvalidPathArgument.is(
				gracely.client.invalidPathArgument("pattern", "name", "type", "description", "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.InvalidQueryArgument.is(gracely.client.invalidQueryArgument("name", "type", "description"))
		).toBeTruthy()
		expect(
			gracely.client.InvalidQueryArgument.is(
				gracely.client.invalidQueryArgument("name", "type", "description", "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.MalformedContent.is(gracely.client.malformedContent("property", "type", "description"))
		).toBeTruthy()
		expect(
			gracely.client.MalformedContent.is(
				gracely.client.malformedContent("property", "type", "description", { details: "test" })
			)
		).toBeTruthy()
		expect(
			gracely.client.MalformedContent.is(
				gracely.client.malformedContent("property", "type", "description", { details: "test" }, "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.MethodNotAllowed.is(gracely.client.methodNotAllowed(gracely.client.MethodNotAllowed.methods))
		).toBeTruthy()
		expect(
			gracely.client.MethodNotAllowed.is(
				gracely.client.methodNotAllowed([...gracely.client.MethodNotAllowed.methods], "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.MissingProperty.is(gracely.client.missingProperty("property", "type", "description", "error"))
		).toBeTruthy()
		expect(
			gracely.client.MissingProperty.is(
				gracely.client.missingProperty("property", "type", { description: "1", property2: "2" })
			)
		).toBeTruthy()
		expect(
			gracely.client.MissingProperty.is(
				gracely.client.missingProperty("property", "type", { description: "1", property2: "2" }, "error")
			)
		).toBeTruthy()
		expect(
			gracely.client.MissingQueryArgument.is(gracely.client.missingQueryArgument("name", "type", "description"))
		).toBeTruthy()
		expect(
			gracely.client.MissingQueryArgument.is(
				gracely.client.missingQueryArgument("name", "type", "description", "error")
			)
		).toBeTruthy()
		expect(gracely.client.NotFound.is(gracely.client.notFound())).toBeTruthy()
		expect(gracely.client.NotFound.is(gracely.client.notFound("error"))).toBeTruthy()
		expect(gracely.client.Unauthorized.is(gracely.client.unauthorized())).toBeTruthy()
		expect(gracely.client.Unauthorized.is(gracely.client.unauthorized("don't show why"))).toBeTruthy()
		expect(gracely.client.unauthorized("don't show why")).toEqual({
			status: 401,
			type: "not authorized",
			error: "don't show why",
		})
	})
	it("unauthorized response options testing is it correct?", () => {
		expect(gracely.client.unauthorized("basic")).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic" },
		})
		expect(gracely.client.unauthorized("basic", {})).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic" },
		})
		expect(gracely.client.unauthorized("basic", { realm: "" })).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic realm=" },
		})
	})
	it("unauthorized response options testing", () => {
		expect(gracely.client.unauthorized("basic", { realm: "unicorn" })).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic realm=unicorn" },
		})
		expect(gracely.client.unauthorized("basic", { realm: "unicorn", charset: "UTF-8" })).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic realm=unicorn, charset=UTF-8" },
		})
		expect(gracely.client.unauthorized("basic", { charset: "UTF-8" })).toEqual({
			status: 401,
			type: "not authorized",
			header: { wwwAuthenticate: "Basic charset=UTF-8" },
		})
	})
	it("missing header", () => {
		expect(gracely.client.missingHeader("If-Match", "Header If-Match is required for this resource.")).toEqual({
			status: 400,
			type: "missing header",
			content: {
				name: "If-Match",
				description: "Header If-Match is required for this resource.",
			},
		})
	})
	it("malformed header", () => {
		expect(gracely.client.malformedHeader("If-Match", "Expected value to be a date.")).toEqual({
			status: 400,
			type: "malformed header",
			content: {
				name: "If-Match",
				description: "Expected value to be a date.",
			},
		})
	})
	it("entity tag mismatch", () => {
		expect(gracely.client.entityTagMismatch("Expected etag to be a date.")).toEqual({
			status: 412,
			type: "entity tag mismatch",
			content: {
				description: "Expected etag to be a date.",
			},
		})
	})
})
