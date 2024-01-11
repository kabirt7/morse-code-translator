import { translate } from "./scripts/modules/translator-logic";

describe("Tests translator function", () => {
  it("should return correct morse output", () => {
    const mockDom = {
      selectInput: { value: "latin" },
      selectOutput: { value: "morse" },
    };

    const result = translate("hiya", mockDom);

    expect(result).toBe(".... .. -.-- .- ");
  });
  it("should return correct latin script output", () => {
    const mockDom = {
      selectInput: { value: "morse" },
      selectOutput: { value: "latin" },
    };

    const result = translate(".... .. -.-- .- ", mockDom);

    expect(result).toBe("HIYA");
  });
});
