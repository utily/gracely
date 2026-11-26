import { gracely, Result } from "./index"

describe("redirect", () => {
	it.each([
		[gracely.redirect.found("/target"), gracely.redirect.found.is],
		[gracely.redirect.permanent("/target"), gracely.redirect.permanent.is],
		[gracely.redirect.notModified("etag"), gracely.redirect.notModified.is],
		[gracely.redirect.post("/target", { name: "value" }), gracely.redirect.post.is]
	])("identifies redirect results", (value, is) => {
		expect(is(value)).toBe(true)
	})

	it("rejects unrelated redirect values", () => {
		expect(gracely.redirect.found.is(null)).toBe(false)
		expect(gracely.redirect.permanent.is({ status: 302 })).toBe(false)
		expect(gracely.redirect.notModified.is({ status: 304 })).toBe(false)
		expect(gracely.redirect.post.is({ status: 302 })).toBe(false)
	})
})

describe("success", () => {
	it.each([
		[gracely.success.ok("body", "etag"), gracely.success.ok.is],
		[gracely.success.created("body"), gracely.success.created.is],
		[gracely.success.noContent(), gracely.success.noContent.is]
	])("identifies success results", (value, is) => {
		expect(is(value)).toBe(true)
	})

	it("rejects unrelated success values", () => {
		expect(gracely.success.ok.is(null)).toBe(false)
		expect(gracely.success.created.is({ status: 200, body: "body" })).toBe(false)
		expect(gracely.success.noContent.is({ status: 200 })).toBe(false)
	})
})

describe("Result", () => {
	it.each([
		[{ status: 200 }, true],
		[null, false],
		[{ status: "200" }, false],
		[{ status: 200, header: { eTag: "etag" } }, true],
		[{ status: 200, header: { eTag: 1 } }, false]
	])("checks result shape", (value, expected) => {
		expect(Result.is(value)).toBe(expected)
	})

	it("checks and reads bodies", () => {
		expect(Result.hasBody({ status: 200, body: "body" })).toBe(true)
		expect(Result.hasBody({ status: 200, body: null })).toBe(false)
		expect(Result.getBody({ status: 200, body: "body" }, "fallback")).toBe("body")
		expect(Result.getBody({ status: 200 }, "fallback")).toBe("fallback")
	})
})
