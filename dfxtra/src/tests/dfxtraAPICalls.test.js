import axiosMock from "axios";
import * as api from "../AsyncFunctions/dfxtraAPICalls";
import mockGradProfile from "../utils/mockGradProfile.json";

jest.mock("axios");

describe("External Data tests", () => {
	let functionResult;
	describe("get Profile test", () => {
		const setProfile = jest.fn();
		const setError = jest.fn();
		describe("Normal data returned", () => {
			it("should make a get request via axios to the right path", async () => {
				axiosMock.get.mockResolvedValueOnce({ data: mockGradProfile });
				functionResult = await api.getProfile(setProfile, setError);
				expect(axiosMock.get).toHaveBeenCalledTimes(1);
			});
		});
	});
});
