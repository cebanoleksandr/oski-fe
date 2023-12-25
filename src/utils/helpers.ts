import { Test } from "./types";

export const getPreparedTests = (tests: Test[], query: string) => {
  let preparedTests = [...tests];
  const normalizedQuery = query.trim().toLowerCase();

  if (!!normalizedQuery) {
    preparedTests = preparedTests
      .filter(test => test.title.toLowerCase().includes(normalizedQuery));
  }

  return preparedTests;
}
