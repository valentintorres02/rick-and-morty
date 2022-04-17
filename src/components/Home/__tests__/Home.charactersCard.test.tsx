import { screen, within } from "@testing-library/react";

import { CharactersCard } from "../Home.charactersCard";
import { character } from "../../../lib/mocks";
import { formatDate, renderWithRouter } from "../../../lib/utils";

const { getByTestId } = screen;

describe("Character card", () => {
  let component;

  beforeEach(() => {
    component = renderWithRouter(
      <CharactersCard
        id={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        created={character.created}
      />
    );
  });

  it("should render", () => {
    expect(getByTestId(`character-${character.id}`)).toBeInTheDocument();
  });

  it("should display the correct title", () => {
    const { getByText } = within(getByTestId(`meta-${character.id}`));
    expect(getByText(character.name!)).toBeInTheDocument();
  });

  it("should display the correct date", () => {
    const formattedDate = formatDate(new Date(character.created!));

    const { getByText } = within(getByTestId(`meta-${character.id}`));
    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  it("should contain the correct image src", () => {
    const image = getByTestId(`character-image-${character.id}`);
    expect(image).toHaveAttribute("src", character.image);
  });
});

describe("character card image skeleton", () => {
  it("should display an image skeleton if the image is loading or if its url is not valid", () => {
    renderWithRouter(
      <CharactersCard
        id={character.id}
        image="invalid-url"
        name={character.name}
        status={character.status}
        created={character.created}
      />
    );

    const skeleton = getByTestId(`skeleton-image-${character.id}`);
    const image = getByTestId(`character-image-${character.id}`);
    expect(image).toHaveAttribute("class", "hidden");
    expect(skeleton).toBeVisible();
  });
});
