import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    startDate: string;
    endDate: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("week coverage", () => {
  const lectures = api.nodes.filter((node) => node.type === "lectures");

  it("has exactly one lecture for each of weeks 1 through 12", () => {
    const byWeek = new Map<number, ApiNode[]>();
    for (const lecture of lectures) {
      const week = lecture.meta?.week as number | undefined;
      expect(typeof week, `${lecture.id} has no numeric week`).toBe("number");
      byWeek.set(week!, [...(byWeek.get(week!) ?? []), lecture]);
    }

    for (let week = 1; week <= 12; week++) {
      const entries = byWeek.get(week) ?? [];
      expect(entries.length, `week ${week} has ${entries.length} lectures, expected exactly 1`).toBe(
        1,
      );
    }
  });

  it("has lecture dates that strictly ascend with week number, inside the teaching period", () => {
    const sorted = [...lectures].sort(
      (a, b) => (a.meta!.week as number) - (b.meta!.week as number),
    );

    let previousDate = "";
    for (const lecture of sorted) {
      const date = String(lecture.meta?.date).slice(0, 10);
      expect(date, `${lecture.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(date > previousDate, `${lecture.id}'s date does not come after the previous week's`).toBe(
        true,
      );
      expect(date >= api.course.startDate, `${lecture.id} falls before teaching starts`).toBe(true);
      expect(date <= api.course.endDate, `${lecture.id} falls after teaching ends`).toBe(true);
      previousDate = date;
    }
  });
});
