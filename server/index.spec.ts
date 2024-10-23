import { describe, expect, it } from "vitest"
import * as gracely from "../index"

describe("server", () => {
	it("server errors create and is tests", () => {
		expect(gracely.server.BackendFailure.is(gracely.server.backendFailure())).toBeTruthy()
		expect(gracely.server.BackendFailure.is(gracely.server.backendFailure({ type: "test" }))).toBeTruthy()
		expect(
			gracely.server.BackendFailure.is(gracely.server.backendFailure("test backend", "something", "test", "test error"))
		).toBeTruthy()
		expect(gracely.server.BackendTimeout.is(gracely.server.backendTimeout())).toBeTruthy()
		expect(gracely.server.BackendTimeout.is(gracely.server.backendTimeout("error"))).toBeTruthy()
		expect(gracely.server.DatabaseFailure.is(gracely.server.databaseFailure())).toBeTruthy()
		expect(gracely.server.DatabaseFailure.is(gracely.server.databaseFailure(["test", "error"]))).toBeTruthy()
		expect(gracely.server.DatabaseFailure.is(gracely.server.databaseFailure("test error"))).toBeTruthy()
		expect(gracely.server.DatabaseFailure.is(gracely.server.databaseFailure("test error", "error"))).toBeTruthy()
		expect(gracely.server.DatabaseTimeout.is(gracely.server.databaseTimeout())).toBeTruthy()
		expect(gracely.server.DatabaseTimeout.is(gracely.server.databaseTimeout("error"))).toBeTruthy()
		expect(gracely.server.Misconfigured.is(gracely.server.misconfigured("key", "description"))).toBeTruthy()
		expect(gracely.server.Misconfigured.is(gracely.server.misconfigured("key", "description", "error"))).toBeTruthy()
		expect(gracely.server.Unavailable.is(gracely.server.unavailable())).toBeTruthy()
		expect(gracely.server.Unavailable.is(gracely.server.unavailable("error"))).toBeTruthy()
		expect(gracely.server.Unknown.is(gracely.server.unknown())).toBeTruthy()
		expect(gracely.server.Unknown.is(gracely.server.unknown("error"))).toBeTruthy()
	})
})
