import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("assessment weights", () => {
  it("sums every assessment's weight to exactly 100", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    expect(assessments.length, "no assessments found").toBeGreaterThan(0);

    const total = assessments.reduce((sum, node) => {
      const weight = node.meta?.weight;
      expect(typeof weight, `${node.id} has no numeric weight`).toBe("number");
      return sum + (weight as number);
    }, 0);

    expect(total).toBe(100);
  });
});
