import React from "react";

import { GoBack } from "../shared/GoBack";
import { TypeCharacterByIdFetcher } from "./Character.api";

type Props = {
  character: TypeCharacterByIdFetcher;
};

const CharacterDetail: React.FC<Props> = ({ character }) => {
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2">
      <div className="h-full">
        <GoBack />
        <div className="flex items-center justify-center h-full">
          <img
            src={character?.image}
            alt={character?.name}
            className="rounded-full h-80"
          />
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-slate-400">
        <div className="">
          <h3 className="mb-5 text-5xl font-semibold text-cyan-900">
            {character?.name}
          </h3>
          <div className="flex flex-col">
            <span className="text-lg">
              <span className="font-bold">Status: </span>{" "}
              <span>{character?.status}</span>
            </span>
            <span className="text-lg">
              <span className="font-bold">Gender: </span>{" "}
              <span>{character?.gender}</span>
            </span>
            <span className="text-lg">
              <span className="font-bold">Species: </span>{" "}
              <span>{character?.species}</span>
            </span>
            <span className="text-lg">
              <span className="font-bold">Origin: </span>{" "}
              <span>{character?.origin?.name}</span>
            </span>
            <span className="text-lg">
              <span className="font-bold">Location: </span>{" "}
              <span>{character?.location?.name}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;