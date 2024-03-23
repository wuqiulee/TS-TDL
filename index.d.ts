type Expect<T extends true> = T;
type ExpectTrue<T extends true> = T;
type ExpectFalse<T extends false> = T;
type IsTrue<T extends true> = T;
type IsFalse<T extends false> = T;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

type IsAny<T> = 0 extends 1 & T ? true : false;
type NotAny<T> = true extends IsAny<T> ? false : true;
