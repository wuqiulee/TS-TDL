/**
 * 将元祖转为对象类型，对象的 key/value 为该元祖的每一项，且约束该元祖的每一项不能为数组或对象
 */
export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
