export type PolymorphPrimitive = string | number;

export type PolymorphHandler<C> = (context: C) => string | number;
