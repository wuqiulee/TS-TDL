import { LengthOfTuple } from ".";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<LengthOfTuple<typeof tesla>, 4>>,
  Expect<Equal<LengthOfTuple<typeof spaceX>, 5>>,
  // @ts-expect-error
  LengthOfTuple<5>,
  // @ts-expect-error
  LengthOfTuple<"hello world">
];
