import { screen } from "@testing-library/react";

import { CharactersCard } from "../Home.charactersCard";
import { character } from "../../../lib/mocks";
import { renderWithRouter } from "../../../lib/utils";

describe("Character card", () => {
  it("should render", () => {
    renderWithRouter(
      <CharactersCard
        id={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
      />
    );

    expect(screen.getByTestId(`character-${character.id}`)).toBeInTheDocument();
  });
});
