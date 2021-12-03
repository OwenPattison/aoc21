import { greaterThanLastCounter, slidingWindowValues } from "@/day1/day1";
import { puzzleData } from "./puzzleData";

const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("dayOne", () => {
    it("should count the number of increases in data", () => {
        const result = greaterThanLastCounter(data);

        expect(result).toBe(7);
    });

    it("should return count for puzzleData", () => {
        const result = greaterThanLastCounter(puzzleData);

        expect(result).toBe(1446);
    });

    it("should count the number of increases in sliding window data", () => {
        const result = slidingWindowValues(data);

        expect(result).toBe(5);
    });

    it("should return count for sliding window puzzle data", () => {
        const result = slidingWindowValues(puzzleData);

        expect(result).toBe(1486);
    });
});
