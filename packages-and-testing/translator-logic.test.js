import { translate } from "../scripts/modules/translator-logic.js";

const mockDomLM = {
  selectInput: { value: "latin" },
  selectOutput: { value: "morse" },
};

const mockDomML = {
  selectInput: { value: "morse" },
  selectOutput: { value: "latin" },
};

describe("Tests translator function", () => {
  it("should return correct morse output", () => {
    expect(translate("hiya", mockDomLM)).toBe(".... .. -.-- .- ");
  });
  it("should return correct latin script output", () => {
    expect(translate(".... .. -.-- .- ", mockDomML)).toBe("HIYA");
  });

  it("should ignore invalid characters", () => {
    expect(translate("|>#<|", mockDomLM)).toBe("");
    expect(
      translate("------ ---- ........ ----- .-.-.-.-.-.-.", mockDomML)
    ).toBe("0");
  });
});
