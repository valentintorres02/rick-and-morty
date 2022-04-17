import { screen } from "@testing-library/react";

import CharacterDetail from "../Character.detail";
import { character } from "../../../lib/mocks";
import { renderWithRouter } from "../../../lib/utils";

const { getByTestId } = screen;

describe("Character card", () => {
  let component;

  beforeEach(() => {
    component = renderWithRouter(<CharacterDetail character={character} />);
  });

  it("should render", () => {
    expect(
      getByTestId(`character-detail-${character?.id}`)
    ).toBeInTheDocument();
  });

  it("should display the correct character name", () => {
    expect(getByTestId(`character-name-${character?.id}`)).toBeInTheDocument();
  });

  it("should display the correct data", () => {
    expect(
      getByTestId(`character-status-${character?.id}`)
    ).toBeInTheDocument();
    expect(
      getByTestId(`character-gender-${character?.id}`)
    ).toBeInTheDocument();
    expect(
      getByTestId(`character-species-${character?.id}`)
    ).toBeInTheDocument();
    expect(
      getByTestId(`character-origin-${character?.id}`)
    ).toBeInTheDocument();
    expect(
      getByTestId(`character-location-${character?.id}`)
    ).toBeInTheDocument();
  });

  it("should contain the correct image src", () => {
    const image = getByTestId(`character-image-${character?.id}`);
    expect(image).toHaveAttribute("src", character.image);
  });
});
