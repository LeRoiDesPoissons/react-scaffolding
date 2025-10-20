// Base types
type Primitive = string | number | bigint | boolean | symbol | null | undefined;

type NonNullableKeys<T> = {
	[K in keyof T]: T[K] extends null | undefined ? never : K;
}[keyof T];

/**
 * @description Use to differentiate between different entities with the same base type.
 * @example
 * // Here both IDs are essentially strings
 * type UserId = Brand<string, 'UserId'>;
 * type OrderId = Brand<string, 'OrderId'>;
 * const userId: UserId = '12345' as UserId;
 * const orderId: OrderId = '67890' as OrderId;
 *
 * userId !== orderId;
 */
type Brand<T, B> = T & { __brand: B };

// Build in types extension
type JSONObject = { [key: string]: JSONValue };
type JSONValue = string | number | boolean | null | JSONObject | JSONValue[];

// Objects
type PartialExcept<T, TRequiredKeys extends keyof T> = Partial<T> &
	Pick<T, TRequiredKeys>;

type ReadonlyDeep<T extends object> = {
	readonly [K in keyof T]: T[K] extends object ? Readonly<T[K]> : T[K];
};

type PartialDeep<T extends object> = {
	[K in keyof T]?: T[K] extends object ? PartialDeep<T[K]> : T[K];
};

/**
 * @description Filter keys based on type condition
 * @usage with Pick or Omit
 * @example
 * type PickByCondition<T, Condition> = Pick<T, FilterKeys<T, Condition>>;
 * type OmitByCondition<T, Condition> = Omit<T, FilterKeys<T, Condition>>;
 */
type FilterKeys<T, Condition> = {
	[K in keyof T]: K extends Condition ? K : never;
}[keyof T];

/**
 * @description Merge two objects together, discarding duplicate keys from the second (o2) object which are also present in the first (01) object
 */
type Merge<O1, O2> = O2 & Omit<O1, keyof O2>;
