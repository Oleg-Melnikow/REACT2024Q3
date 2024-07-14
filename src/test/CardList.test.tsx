import { render, screen } from "@testing-library/react";

import { getItemIdFromPath } from "../helpers/getItemIdFromPath";
import ContentBlock from "../components/ContentBlock/ContentBlock.tsx";
import NotContent from "../components/NotContent/NotContent.tsx";

describe("App", () => {
  it("renders headline", () => {
    render(<ContentBlock />);

    screen.debug();
  });

  it("renders headline", () => {
    const { container } = render(<NotContent />);
    const text = container.lastChild?.textContent;
    const name = container.lastChild?.nodeName;

    expect(text).toBe("Not content");
    expect(name).toBe("DIV");
  });

  it("should return id people", () => {
    const result = getItemIdFromPath("people/1");
    expect(result).toEqual("1");
  });
});
