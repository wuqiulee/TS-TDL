export type MyExclude<T, E> = T extends E ? never : T;
