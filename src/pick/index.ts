export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// export type MyPick<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? P : never]: T[P];
// };
