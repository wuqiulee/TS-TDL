/**
 * 获取数组的第一项
 */
// export type FirstOfArray<T extends any[]> = T extends [] ? never : T[0];
// export type FirstOfArray<T extends any[]> = T["length"] extends 0
//   ? never
//   : T[0];
// export type FirstOfArray<T extends any[]> = T[0] extends T[number]
//   ? T[0]
//   : never;
export type FirstOfArray<T extends any[]> = T extends [infer F, ...infer R]
  ? F
  : never;
