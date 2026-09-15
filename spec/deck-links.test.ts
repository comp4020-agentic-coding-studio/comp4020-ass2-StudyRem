import { existsSync, readFileSync } from "node:fs";
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

describe("slide decks", () => {
  it("has at least one lecture carrying a real, linked deck", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    const withSlides = lectures.filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(withSlides.length, "no lecture declares a slides link").toBeGreaterThan(0);

    for (const lecture of withSlides) {
      const slidesPath = lecture.meta!.slides as string;
      const match = slidesPath.match(/^\/decks\/([^/]+)\/?$/);
      expect(match, `${lecture.id} has an unexpected slides path: ${slidesPath}`).not.toBeNull();

      const slug = match![1];
      const deckFile = resolve(`src/decks/${slug}.deck.mdx`);
      expect(existsSync(deckFile), `${lecture.id} links to a deck with no matching ${deckFile}`).toBe(
        true,
      );
    }
  });
});
