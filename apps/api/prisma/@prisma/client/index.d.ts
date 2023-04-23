
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Medicine
 * 
 */
export type Medicine = {
  id: number
  title: string
  price: number
  pharmaceuticalForm: PharmaceuticalForm
  description: string
  prescribedOnly: boolean
}

/**
 * Model Organization
 * 
 */
export type Organization = {
  id: number
  title: string
}

/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = {
  id: number
  organizationId: number
  address: string
}

/**
 * Model Assortment
 * 
 */
export type Assortment = {
  id: number
  medicineId: number
  pharmacyId: number
  amount: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PharmaceuticalForm: {
  Tablet: 'Tablet',
  Capsule: 'Capsule',
  Solution: 'Solution',
  Injection: 'Injection',
  Ointment: 'Ointment',
  Syrup: 'Syrup',
  Patch: 'Patch',
  Suppository: 'Suppository',
  Powder: 'Powder'
};

export type PharmaceuticalForm = (typeof PharmaceuticalForm)[keyof typeof PharmaceuticalForm]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Medicines
 * const medicines = await prisma.medicine.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Medicines
   * const medicines = await prisma.medicine.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<GlobalReject>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<GlobalReject>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<GlobalReject>;

  /**
   * `prisma.assortment`: Exposes CRUD operations for the **Assortment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assortments
    * const assortments = await prisma.assortment.findMany()
    * ```
    */
  get assortment(): Prisma.AssortmentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Medicine: 'Medicine',
    Organization: 'Organization',
    Pharmacy: 'Pharmacy',
    Assortment: 'Assortment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MedicineCountOutputType
   */


  export type MedicineCountOutputType = {
    assortment: number
  }

  export type MedicineCountOutputTypeSelect = {
    assortment?: boolean
  }

  export type MedicineCountOutputTypeGetPayload<S extends boolean | null | undefined | MedicineCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MedicineCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MedicineCountOutputTypeArgs)
    ? MedicineCountOutputType 
    : S extends { select: any } & (MedicineCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MedicineCountOutputType ? MedicineCountOutputType[P] : never
  } 
      : MedicineCountOutputType




  // Custom InputTypes

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect | null
  }



  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    pharmacies: number
  }

  export type OrganizationCountOutputTypeSelect = {
    pharmacies?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<S extends boolean | null | undefined | OrganizationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrganizationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrganizationCountOutputTypeArgs)
    ? OrganizationCountOutputType 
    : S extends { select: any } & (OrganizationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrganizationCountOutputType ? OrganizationCountOutputType[P] : never
  } 
      : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Count Type PharmacyCountOutputType
   */


  export type PharmacyCountOutputType = {
    assortment: number
  }

  export type PharmacyCountOutputTypeSelect = {
    assortment?: boolean
  }

  export type PharmacyCountOutputTypeGetPayload<S extends boolean | null | undefined | PharmacyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PharmacyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PharmacyCountOutputTypeArgs)
    ? PharmacyCountOutputType 
    : S extends { select: any } & (PharmacyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PharmacyCountOutputType ? PharmacyCountOutputType[P] : never
  } 
      : PharmacyCountOutputType




  // Custom InputTypes

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Medicine
   */


  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    pharmaceuticalForm: PharmaceuticalForm | null
    description: string | null
    prescribedOnly: boolean | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    pharmaceuticalForm: PharmaceuticalForm | null
    description: string | null
    prescribedOnly: boolean | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    title: number
    price: number
    pharmaceuticalForm: number
    description: number
    prescribedOnly: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    pharmaceuticalForm?: true
    description?: true
    prescribedOnly?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    pharmaceuticalForm?: true
    description?: true
    prescribedOnly?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    pharmaceuticalForm?: true
    description?: true
    prescribedOnly?: true
    _all?: true
  }

  export type MedicineAggregateArgs = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs = {
    where?: MedicineWhereInput
    orderBy?: Enumerable<MedicineOrderByWithAggregationInput>
    by: MedicineScalarFieldEnum[]
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }


  export type MedicineGroupByOutputType = {
    id: number
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly: boolean
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect = {
    id?: boolean
    title?: boolean
    price?: boolean
    pharmaceuticalForm?: boolean
    description?: boolean
    prescribedOnly?: boolean
    assortment?: boolean | Medicine$assortmentArgs
    _count?: boolean | MedicineCountOutputTypeArgs
  }


  export type MedicineInclude = {
    assortment?: boolean | Medicine$assortmentArgs
    _count?: boolean | MedicineCountOutputTypeArgs
  }

  export type MedicineGetPayload<S extends boolean | null | undefined | MedicineArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Medicine :
    S extends undefined ? never :
    S extends { include: any } & (MedicineArgs | MedicineFindManyArgs)
    ? Medicine  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'assortment' ? Array < AssortmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? MedicineCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MedicineArgs | MedicineFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'assortment' ? Array < AssortmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? MedicineCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Medicine ? Medicine[P] : never
  } 
      : Medicine


  type MedicineCountArgs = 
    Omit<MedicineFindManyArgs, 'select' | 'include'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MedicineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Medicine'> extends True ? Prisma__MedicineClient<MedicineGetPayload<T>> : Prisma__MedicineClient<MedicineGetPayload<T> | null, null>

    /**
     * Find one Medicine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MedicineFindUniqueOrThrowArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MedicineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Medicine'> extends True ? Prisma__MedicineClient<MedicineGetPayload<T>> : Prisma__MedicineClient<MedicineGetPayload<T> | null, null>

    /**
     * Find the first Medicine that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MedicineFindFirstOrThrowArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicineFindManyArgs>(
      args?: SelectSubset<T, MedicineFindManyArgs>
    ): Prisma.PrismaPromise<Array<MedicineGetPayload<T>>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
    **/
    create<T extends MedicineCreateArgs>(
      args: SelectSubset<T, MedicineCreateArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Create many Medicines.
     *     @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     *     @example
     *     // Create many Medicines
     *     const medicine = await prisma.medicine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicineCreateManyArgs>(
      args?: SelectSubset<T, MedicineCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
    **/
    delete<T extends MedicineDeleteArgs>(
      args: SelectSubset<T, MedicineDeleteArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicineUpdateArgs>(
      args: SelectSubset<T, MedicineUpdateArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicineDeleteManyArgs>(
      args?: SelectSubset<T, MedicineDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicineUpdateManyArgs>(
      args: SelectSubset<T, MedicineUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
    **/
    upsert<T extends MedicineUpsertArgs>(
      args: SelectSubset<T, MedicineUpsertArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MedicineClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    assortment<T extends Medicine$assortmentArgs= {}>(args?: Subset<T, Medicine$assortmentArgs>): Prisma.PrismaPromise<Array<AssortmentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Medicine base type for findUnique actions
   */
  export type MedicineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUnique
   */
  export interface MedicineFindUniqueArgs extends MedicineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine base type for findFirst actions
   */
  export type MedicineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }

  /**
   * Medicine findFirst
   */
  export interface MedicineFindFirstArgs extends MedicineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }


  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }


  /**
   * Medicine create
   */
  export type MedicineCreateArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }


  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs = {
    /**
     * The data used to create many Medicines.
     */
    data: Enumerable<MedicineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Medicine update
   */
  export type MedicineUpdateArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }


  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine.assortment
   */
  export type Medicine$assortmentArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    where?: AssortmentWhereInput
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    cursor?: AssortmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AssortmentScalarFieldEnum>
  }


  /**
   * Medicine without action
   */
  export type MedicineArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineInclude | null
  }



  /**
   * Model Organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: OrganizationWhereInput
    orderBy?: Enumerable<OrganizationOrderByWithAggregationInput>
    by: OrganizationScalarFieldEnum[]
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: number
    title: string
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect = {
    id?: boolean
    title?: boolean
    pharmacies?: boolean | Organization$pharmaciesArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }


  export type OrganizationInclude = {
    pharmacies?: boolean | Organization$pharmaciesArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Organization :
    S extends undefined ? never :
    S extends { include: any } & (OrganizationArgs | OrganizationFindManyArgs)
    ? Organization  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'pharmacies' ? Array < PharmacyGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrganizationArgs | OrganizationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'pharmacies' ? Array < PharmacyGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Organization ? Organization[P] : never
  } 
      : Organization


  type OrganizationCountArgs = 
    Omit<OrganizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrganizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Organization'> extends True ? Prisma__OrganizationClient<OrganizationGetPayload<T>> : Prisma__OrganizationClient<OrganizationGetPayload<T> | null, null>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindUniqueOrThrowArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrganizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Organization'> extends True ? Prisma__OrganizationClient<OrganizationGetPayload<T>> : Prisma__OrganizationClient<OrganizationGetPayload<T> | null, null>

    /**
     * Find the first Organization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrganizationGetPayload<T>>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs>
    ): Prisma__OrganizationClient<OrganizationGetPayload<T>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganizationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pharmacies<T extends Organization$pharmaciesArgs= {}>(args?: Subset<T, Organization$pharmaciesArgs>): Prisma.PrismaPromise<Array<PharmacyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Organization base type for findUnique actions
   */
  export type OrganizationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUnique
   */
  export interface OrganizationFindUniqueArgs extends OrganizationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization base type for findFirst actions
   */
  export type OrganizationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }

  /**
   * Organization findFirst
   */
  export interface OrganizationFindFirstArgs extends OrganizationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }


  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs = {
    /**
     * The data used to create many Organizations.
     */
    data: Enumerable<OrganizationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }


  /**
   * Organization.pharmacies
   */
  export type Organization$pharmaciesArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    where?: PharmacyWhereInput
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    cursor?: PharmacyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }


  /**
   * Organization without action
   */
  export type OrganizationArgs = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizationInclude | null
  }



  /**
   * Model Pharmacy
   */


  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type PharmacySumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: number | null
    organizationId: number | null
    address: string | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: number | null
    organizationId: number | null
    address: string | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    organizationId: number
    address: number
    _all: number
  }


  export type PharmacyAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type PharmacySumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type PharmacyMinAggregateInputType = {
    id?: true
    organizationId?: true
    address?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    organizationId?: true
    address?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    organizationId?: true
    address?: true
    _all?: true
  }

  export type PharmacyAggregateArgs = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs = {
    where?: PharmacyWhereInput
    orderBy?: Enumerable<PharmacyOrderByWithAggregationInput>
    by: PharmacyScalarFieldEnum[]
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _avg?: PharmacyAvgAggregateInputType
    _sum?: PharmacySumAggregateInputType
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }


  export type PharmacyGroupByOutputType = {
    id: number
    organizationId: number
    address: string
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect = {
    id?: boolean
    organizationId?: boolean
    address?: boolean
    organization?: boolean | OrganizationArgs
    assortment?: boolean | Pharmacy$assortmentArgs
    _count?: boolean | PharmacyCountOutputTypeArgs
  }


  export type PharmacyInclude = {
    organization?: boolean | OrganizationArgs
    assortment?: boolean | Pharmacy$assortmentArgs
    _count?: boolean | PharmacyCountOutputTypeArgs
  }

  export type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pharmacy :
    S extends undefined ? never :
    S extends { include: any } & (PharmacyArgs | PharmacyFindManyArgs)
    ? Pharmacy  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'organization' ? OrganizationGetPayload<S['include'][P]> :
        P extends 'assortment' ? Array < AssortmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? PharmacyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PharmacyArgs | PharmacyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'organization' ? OrganizationGetPayload<S['select'][P]> :
        P extends 'assortment' ? Array < AssortmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? PharmacyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Pharmacy ? Pharmacy[P] : never
  } 
      : Pharmacy


  type PharmacyCountArgs = 
    Omit<PharmacyFindManyArgs, 'select' | 'include'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PharmacyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PharmacyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pharmacy'> extends True ? Prisma__PharmacyClient<PharmacyGetPayload<T>> : Prisma__PharmacyClient<PharmacyGetPayload<T> | null, null>

    /**
     * Find one Pharmacy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PharmacyFindUniqueOrThrowArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PharmacyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PharmacyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pharmacy'> extends True ? Prisma__PharmacyClient<PharmacyGetPayload<T>> : Prisma__PharmacyClient<PharmacyGetPayload<T> | null, null>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PharmacyFindManyArgs>(
      args?: SelectSubset<T, PharmacyFindManyArgs>
    ): Prisma.PrismaPromise<Array<PharmacyGetPayload<T>>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
    **/
    create<T extends PharmacyCreateArgs>(
      args: SelectSubset<T, PharmacyCreateArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Create many Pharmacies.
     *     @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     *     @example
     *     // Create many Pharmacies
     *     const pharmacy = await prisma.pharmacy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PharmacyCreateManyArgs>(
      args?: SelectSubset<T, PharmacyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
    **/
    delete<T extends PharmacyDeleteArgs>(
      args: SelectSubset<T, PharmacyDeleteArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PharmacyUpdateArgs>(
      args: SelectSubset<T, PharmacyUpdateArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PharmacyDeleteManyArgs>(
      args?: SelectSubset<T, PharmacyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PharmacyUpdateManyArgs>(
      args: SelectSubset<T, PharmacyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
    **/
    upsert<T extends PharmacyUpsertArgs>(
      args: SelectSubset<T, PharmacyUpsertArgs>
    ): Prisma__PharmacyClient<PharmacyGetPayload<T>>

    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PharmacyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    organization<T extends OrganizationArgs= {}>(args?: Subset<T, OrganizationArgs>): Prisma__OrganizationClient<OrganizationGetPayload<T> | Null>;

    assortment<T extends Pharmacy$assortmentArgs= {}>(args?: Subset<T, Pharmacy$assortmentArgs>): Prisma.PrismaPromise<Array<AssortmentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pharmacy base type for findUnique actions
   */
  export type PharmacyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUnique
   */
  export interface PharmacyFindUniqueArgs extends PharmacyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy base type for findFirst actions
   */
  export type PharmacyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }

  /**
   * Pharmacy findFirst
   */
  export interface PharmacyFindFirstArgs extends PharmacyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }


  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: Enumerable<PharmacyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: Enumerable<PharmacyScalarFieldEnum>
  }


  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }


  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs = {
    /**
     * The data used to create many Pharmacies.
     */
    data: Enumerable<PharmacyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
  }


  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }


  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }


  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
  }


  /**
   * Pharmacy.assortment
   */
  export type Pharmacy$assortmentArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    where?: AssortmentWhereInput
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    cursor?: AssortmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AssortmentScalarFieldEnum>
  }


  /**
   * Pharmacy without action
   */
  export type PharmacyArgs = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PharmacyInclude | null
  }



  /**
   * Model Assortment
   */


  export type AggregateAssortment = {
    _count: AssortmentCountAggregateOutputType | null
    _avg: AssortmentAvgAggregateOutputType | null
    _sum: AssortmentSumAggregateOutputType | null
    _min: AssortmentMinAggregateOutputType | null
    _max: AssortmentMaxAggregateOutputType | null
  }

  export type AssortmentAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    pharmacyId: number | null
    amount: number | null
  }

  export type AssortmentSumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    pharmacyId: number | null
    amount: number | null
  }

  export type AssortmentMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    pharmacyId: number | null
    amount: number | null
  }

  export type AssortmentMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    pharmacyId: number | null
    amount: number | null
  }

  export type AssortmentCountAggregateOutputType = {
    id: number
    medicineId: number
    pharmacyId: number
    amount: number
    _all: number
  }


  export type AssortmentAvgAggregateInputType = {
    id?: true
    medicineId?: true
    pharmacyId?: true
    amount?: true
  }

  export type AssortmentSumAggregateInputType = {
    id?: true
    medicineId?: true
    pharmacyId?: true
    amount?: true
  }

  export type AssortmentMinAggregateInputType = {
    id?: true
    medicineId?: true
    pharmacyId?: true
    amount?: true
  }

  export type AssortmentMaxAggregateInputType = {
    id?: true
    medicineId?: true
    pharmacyId?: true
    amount?: true
  }

  export type AssortmentCountAggregateInputType = {
    id?: true
    medicineId?: true
    pharmacyId?: true
    amount?: true
    _all?: true
  }

  export type AssortmentAggregateArgs = {
    /**
     * Filter which Assortment to aggregate.
     */
    where?: AssortmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assortments to fetch.
     */
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssortmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assortments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assortments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assortments
    **/
    _count?: true | AssortmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssortmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssortmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssortmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssortmentMaxAggregateInputType
  }

  export type GetAssortmentAggregateType<T extends AssortmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssortment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssortment[P]>
      : GetScalarType<T[P], AggregateAssortment[P]>
  }




  export type AssortmentGroupByArgs = {
    where?: AssortmentWhereInput
    orderBy?: Enumerable<AssortmentOrderByWithAggregationInput>
    by: AssortmentScalarFieldEnum[]
    having?: AssortmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssortmentCountAggregateInputType | true
    _avg?: AssortmentAvgAggregateInputType
    _sum?: AssortmentSumAggregateInputType
    _min?: AssortmentMinAggregateInputType
    _max?: AssortmentMaxAggregateInputType
  }


  export type AssortmentGroupByOutputType = {
    id: number
    medicineId: number
    pharmacyId: number
    amount: number
    _count: AssortmentCountAggregateOutputType | null
    _avg: AssortmentAvgAggregateOutputType | null
    _sum: AssortmentSumAggregateOutputType | null
    _min: AssortmentMinAggregateOutputType | null
    _max: AssortmentMaxAggregateOutputType | null
  }

  type GetAssortmentGroupByPayload<T extends AssortmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AssortmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssortmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssortmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssortmentGroupByOutputType[P]>
        }
      >
    >


  export type AssortmentSelect = {
    id?: boolean
    medicineId?: boolean
    pharmacyId?: boolean
    amount?: boolean
    medicine?: boolean | MedicineArgs
    pharmacy?: boolean | PharmacyArgs
  }


  export type AssortmentInclude = {
    medicine?: boolean | MedicineArgs
    pharmacy?: boolean | PharmacyArgs
  }

  export type AssortmentGetPayload<S extends boolean | null | undefined | AssortmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Assortment :
    S extends undefined ? never :
    S extends { include: any } & (AssortmentArgs | AssortmentFindManyArgs)
    ? Assortment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'medicine' ? MedicineGetPayload<S['include'][P]> :
        P extends 'pharmacy' ? PharmacyGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AssortmentArgs | AssortmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'medicine' ? MedicineGetPayload<S['select'][P]> :
        P extends 'pharmacy' ? PharmacyGetPayload<S['select'][P]> :  P extends keyof Assortment ? Assortment[P] : never
  } 
      : Assortment


  type AssortmentCountArgs = 
    Omit<AssortmentFindManyArgs, 'select' | 'include'> & {
      select?: AssortmentCountAggregateInputType | true
    }

  export interface AssortmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Assortment that matches the filter.
     * @param {AssortmentFindUniqueArgs} args - Arguments to find a Assortment
     * @example
     * // Get one Assortment
     * const assortment = await prisma.assortment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssortmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AssortmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Assortment'> extends True ? Prisma__AssortmentClient<AssortmentGetPayload<T>> : Prisma__AssortmentClient<AssortmentGetPayload<T> | null, null>

    /**
     * Find one Assortment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssortmentFindUniqueOrThrowArgs} args - Arguments to find a Assortment
     * @example
     * // Get one Assortment
     * const assortment = await prisma.assortment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssortmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AssortmentFindUniqueOrThrowArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Find the first Assortment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentFindFirstArgs} args - Arguments to find a Assortment
     * @example
     * // Get one Assortment
     * const assortment = await prisma.assortment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssortmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AssortmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Assortment'> extends True ? Prisma__AssortmentClient<AssortmentGetPayload<T>> : Prisma__AssortmentClient<AssortmentGetPayload<T> | null, null>

    /**
     * Find the first Assortment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentFindFirstOrThrowArgs} args - Arguments to find a Assortment
     * @example
     * // Get one Assortment
     * const assortment = await prisma.assortment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssortmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AssortmentFindFirstOrThrowArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Find zero or more Assortments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assortments
     * const assortments = await prisma.assortment.findMany()
     * 
     * // Get first 10 Assortments
     * const assortments = await prisma.assortment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assortmentWithIdOnly = await prisma.assortment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssortmentFindManyArgs>(
      args?: SelectSubset<T, AssortmentFindManyArgs>
    ): Prisma.PrismaPromise<Array<AssortmentGetPayload<T>>>

    /**
     * Create a Assortment.
     * @param {AssortmentCreateArgs} args - Arguments to create a Assortment.
     * @example
     * // Create one Assortment
     * const Assortment = await prisma.assortment.create({
     *   data: {
     *     // ... data to create a Assortment
     *   }
     * })
     * 
    **/
    create<T extends AssortmentCreateArgs>(
      args: SelectSubset<T, AssortmentCreateArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Create many Assortments.
     *     @param {AssortmentCreateManyArgs} args - Arguments to create many Assortments.
     *     @example
     *     // Create many Assortments
     *     const assortment = await prisma.assortment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssortmentCreateManyArgs>(
      args?: SelectSubset<T, AssortmentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assortment.
     * @param {AssortmentDeleteArgs} args - Arguments to delete one Assortment.
     * @example
     * // Delete one Assortment
     * const Assortment = await prisma.assortment.delete({
     *   where: {
     *     // ... filter to delete one Assortment
     *   }
     * })
     * 
    **/
    delete<T extends AssortmentDeleteArgs>(
      args: SelectSubset<T, AssortmentDeleteArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Update one Assortment.
     * @param {AssortmentUpdateArgs} args - Arguments to update one Assortment.
     * @example
     * // Update one Assortment
     * const assortment = await prisma.assortment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssortmentUpdateArgs>(
      args: SelectSubset<T, AssortmentUpdateArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Delete zero or more Assortments.
     * @param {AssortmentDeleteManyArgs} args - Arguments to filter Assortments to delete.
     * @example
     * // Delete a few Assortments
     * const { count } = await prisma.assortment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssortmentDeleteManyArgs>(
      args?: SelectSubset<T, AssortmentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assortments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assortments
     * const assortment = await prisma.assortment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssortmentUpdateManyArgs>(
      args: SelectSubset<T, AssortmentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assortment.
     * @param {AssortmentUpsertArgs} args - Arguments to update or create a Assortment.
     * @example
     * // Update or create a Assortment
     * const assortment = await prisma.assortment.upsert({
     *   create: {
     *     // ... data to create a Assortment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assortment we want to update
     *   }
     * })
    **/
    upsert<T extends AssortmentUpsertArgs>(
      args: SelectSubset<T, AssortmentUpsertArgs>
    ): Prisma__AssortmentClient<AssortmentGetPayload<T>>

    /**
     * Count the number of Assortments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentCountArgs} args - Arguments to filter Assortments to count.
     * @example
     * // Count the number of Assortments
     * const count = await prisma.assortment.count({
     *   where: {
     *     // ... the filter for the Assortments we want to count
     *   }
     * })
    **/
    count<T extends AssortmentCountArgs>(
      args?: Subset<T, AssortmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssortmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assortment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssortmentAggregateArgs>(args: Subset<T, AssortmentAggregateArgs>): Prisma.PrismaPromise<GetAssortmentAggregateType<T>>

    /**
     * Group by Assortment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssortmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssortmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssortmentGroupByArgs['orderBy'] }
        : { orderBy?: AssortmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssortmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssortmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Assortment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AssortmentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    medicine<T extends MedicineArgs= {}>(args?: Subset<T, MedicineArgs>): Prisma__MedicineClient<MedicineGetPayload<T> | Null>;

    pharmacy<T extends PharmacyArgs= {}>(args?: Subset<T, PharmacyArgs>): Prisma__PharmacyClient<PharmacyGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Assortment base type for findUnique actions
   */
  export type AssortmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter, which Assortment to fetch.
     */
    where: AssortmentWhereUniqueInput
  }

  /**
   * Assortment findUnique
   */
  export interface AssortmentFindUniqueArgs extends AssortmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Assortment findUniqueOrThrow
   */
  export type AssortmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter, which Assortment to fetch.
     */
    where: AssortmentWhereUniqueInput
  }


  /**
   * Assortment base type for findFirst actions
   */
  export type AssortmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter, which Assortment to fetch.
     */
    where?: AssortmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assortments to fetch.
     */
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assortments.
     */
    cursor?: AssortmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assortments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assortments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assortments.
     */
    distinct?: Enumerable<AssortmentScalarFieldEnum>
  }

  /**
   * Assortment findFirst
   */
  export interface AssortmentFindFirstArgs extends AssortmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Assortment findFirstOrThrow
   */
  export type AssortmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter, which Assortment to fetch.
     */
    where?: AssortmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assortments to fetch.
     */
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assortments.
     */
    cursor?: AssortmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assortments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assortments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assortments.
     */
    distinct?: Enumerable<AssortmentScalarFieldEnum>
  }


  /**
   * Assortment findMany
   */
  export type AssortmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter, which Assortments to fetch.
     */
    where?: AssortmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assortments to fetch.
     */
    orderBy?: Enumerable<AssortmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assortments.
     */
    cursor?: AssortmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assortments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assortments.
     */
    skip?: number
    distinct?: Enumerable<AssortmentScalarFieldEnum>
  }


  /**
   * Assortment create
   */
  export type AssortmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * The data needed to create a Assortment.
     */
    data: XOR<AssortmentCreateInput, AssortmentUncheckedCreateInput>
  }


  /**
   * Assortment createMany
   */
  export type AssortmentCreateManyArgs = {
    /**
     * The data used to create many Assortments.
     */
    data: Enumerable<AssortmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Assortment update
   */
  export type AssortmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * The data needed to update a Assortment.
     */
    data: XOR<AssortmentUpdateInput, AssortmentUncheckedUpdateInput>
    /**
     * Choose, which Assortment to update.
     */
    where: AssortmentWhereUniqueInput
  }


  /**
   * Assortment updateMany
   */
  export type AssortmentUpdateManyArgs = {
    /**
     * The data used to update Assortments.
     */
    data: XOR<AssortmentUpdateManyMutationInput, AssortmentUncheckedUpdateManyInput>
    /**
     * Filter which Assortments to update
     */
    where?: AssortmentWhereInput
  }


  /**
   * Assortment upsert
   */
  export type AssortmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * The filter to search for the Assortment to update in case it exists.
     */
    where: AssortmentWhereUniqueInput
    /**
     * In case the Assortment found by the `where` argument doesn't exist, create a new Assortment with this data.
     */
    create: XOR<AssortmentCreateInput, AssortmentUncheckedCreateInput>
    /**
     * In case the Assortment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssortmentUpdateInput, AssortmentUncheckedUpdateInput>
  }


  /**
   * Assortment delete
   */
  export type AssortmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
    /**
     * Filter which Assortment to delete.
     */
    where: AssortmentWhereUniqueInput
  }


  /**
   * Assortment deleteMany
   */
  export type AssortmentDeleteManyArgs = {
    /**
     * Filter which Assortments to delete
     */
    where?: AssortmentWhereInput
  }


  /**
   * Assortment without action
   */
  export type AssortmentArgs = {
    /**
     * Select specific fields to fetch from the Assortment
     */
    select?: AssortmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssortmentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AssortmentScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    pharmacyId: 'pharmacyId',
    amount: 'amount'
  };

  export type AssortmentScalarFieldEnum = (typeof AssortmentScalarFieldEnum)[keyof typeof AssortmentScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    pharmaceuticalForm: 'pharmaceuticalForm',
    description: 'description',
    prescribedOnly: 'prescribedOnly'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    address: 'address'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type MedicineWhereInput = {
    AND?: Enumerable<MedicineWhereInput>
    OR?: Enumerable<MedicineWhereInput>
    NOT?: Enumerable<MedicineWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    price?: IntFilter | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFilter | PharmaceuticalForm
    description?: StringFilter | string
    prescribedOnly?: BoolFilter | boolean
    assortment?: AssortmentListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    pharmaceuticalForm?: SortOrder
    description?: SortOrder
    prescribedOnly?: SortOrder
    assortment?: AssortmentOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = {
    id?: number
    title?: string
  }

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    pharmaceuticalForm?: SortOrder
    description?: SortOrder
    prescribedOnly?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    OR?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    pharmaceuticalForm?: EnumPharmaceuticalFormWithAggregatesFilter | PharmaceuticalForm
    description?: StringWithAggregatesFilter | string
    prescribedOnly?: BoolWithAggregatesFilter | boolean
  }

  export type OrganizationWhereInput = {
    AND?: Enumerable<OrganizationWhereInput>
    OR?: Enumerable<OrganizationWhereInput>
    NOT?: Enumerable<OrganizationWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    pharmacies?: PharmacyListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    pharmacies?: PharmacyOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = {
    id?: number
    title?: string
  }

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
  }

  export type PharmacyWhereInput = {
    AND?: Enumerable<PharmacyWhereInput>
    OR?: Enumerable<PharmacyWhereInput>
    NOT?: Enumerable<PharmacyWhereInput>
    id?: IntFilter | number
    organizationId?: IntFilter | number
    address?: StringFilter | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    assortment?: AssortmentListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    address?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    assortment?: AssortmentOrderByRelationAggregateInput
  }

  export type PharmacyWhereUniqueInput = {
    id?: number
  }

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    address?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _avg?: PharmacyAvgOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
    _sum?: PharmacySumOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PharmacyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    organizationId?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
  }

  export type AssortmentWhereInput = {
    AND?: Enumerable<AssortmentWhereInput>
    OR?: Enumerable<AssortmentWhereInput>
    NOT?: Enumerable<AssortmentWhereInput>
    id?: IntFilter | number
    medicineId?: IntFilter | number
    pharmacyId?: IntFilter | number
    amount?: IntFilter | number
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
    pharmacy?: XOR<PharmacyRelationFilter, PharmacyWhereInput>
  }

  export type AssortmentOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
    pharmacy?: PharmacyOrderByWithRelationInput
  }

  export type AssortmentWhereUniqueInput = {
    id?: number
  }

  export type AssortmentOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
    _count?: AssortmentCountOrderByAggregateInput
    _avg?: AssortmentAvgOrderByAggregateInput
    _max?: AssortmentMaxOrderByAggregateInput
    _min?: AssortmentMinOrderByAggregateInput
    _sum?: AssortmentSumOrderByAggregateInput
  }

  export type AssortmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AssortmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AssortmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AssortmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    medicineId?: IntWithAggregatesFilter | number
    pharmacyId?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
  }

  export type MedicineCreateInput = {
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly?: boolean
    assortment?: AssortmentCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly?: boolean
    assortment?: AssortmentUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
    assortment?: AssortmentUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
    assortment?: AssortmentUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly?: boolean
  }

  export type MedicineUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationCreateInput = {
    title: string
    pharmacies?: PharmacyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    title: string
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    pharmacies?: PharmacyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pharmacies?: PharmacyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    title: string
  }

  export type OrganizationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacyCreateInput = {
    address: string
    organization: OrganizationCreateNestedOneWithoutPharmaciesInput
    assortment?: AssortmentCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: number
    organizationId: number
    address: string
    assortment?: AssortmentUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutPharmaciesNestedInput
    assortment?: AssortmentUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    assortment?: AssortmentUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    id?: number
    organizationId: number
    address: string
  }

  export type PharmacyUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AssortmentCreateInput = {
    amount: number
    medicine: MedicineCreateNestedOneWithoutAssortmentInput
    pharmacy: PharmacyCreateNestedOneWithoutAssortmentInput
  }

  export type AssortmentUncheckedCreateInput = {
    id?: number
    medicineId: number
    pharmacyId: number
    amount: number
  }

  export type AssortmentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutAssortmentNestedInput
    pharmacy?: PharmacyUpdateOneRequiredWithoutAssortmentNestedInput
  }

  export type AssortmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type AssortmentCreateManyInput = {
    id?: number
    medicineId: number
    pharmacyId: number
    amount: number
  }

  export type AssortmentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type AssortmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumPharmaceuticalFormFilter = {
    equals?: PharmaceuticalForm
    in?: Enumerable<PharmaceuticalForm>
    notIn?: Enumerable<PharmaceuticalForm>
    not?: NestedEnumPharmaceuticalFormFilter | PharmaceuticalForm
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type AssortmentListRelationFilter = {
    every?: AssortmentWhereInput
    some?: AssortmentWhereInput
    none?: AssortmentWhereInput
  }

  export type AssortmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    pharmaceuticalForm?: SortOrder
    description?: SortOrder
    prescribedOnly?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    pharmaceuticalForm?: SortOrder
    description?: SortOrder
    prescribedOnly?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    pharmaceuticalForm?: SortOrder
    description?: SortOrder
    prescribedOnly?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumPharmaceuticalFormWithAggregatesFilter = {
    equals?: PharmaceuticalForm
    in?: Enumerable<PharmaceuticalForm>
    notIn?: Enumerable<PharmaceuticalForm>
    not?: NestedEnumPharmaceuticalFormWithAggregatesFilter | PharmaceuticalForm
    _count?: NestedIntFilter
    _min?: NestedEnumPharmaceuticalFormFilter
    _max?: NestedEnumPharmaceuticalFormFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PharmacyListRelationFilter = {
    every?: PharmacyWhereInput
    some?: PharmacyWhereInput
    none?: PharmacyWhereInput
  }

  export type PharmacyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    address?: SortOrder
  }

  export type PharmacyAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    address?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    address?: SortOrder
  }

  export type PharmacySumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type MedicineRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type PharmacyRelationFilter = {
    is?: PharmacyWhereInput
    isNot?: PharmacyWhereInput
  }

  export type AssortmentCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
  }

  export type AssortmentAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
  }

  export type AssortmentMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
  }

  export type AssortmentMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
  }

  export type AssortmentSumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    pharmacyId?: SortOrder
    amount?: SortOrder
  }

  export type AssortmentCreateNestedManyWithoutMedicineInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutMedicineInput>, Enumerable<AssortmentUncheckedCreateWithoutMedicineInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutMedicineInput>
    createMany?: AssortmentCreateManyMedicineInputEnvelope
    connect?: Enumerable<AssortmentWhereUniqueInput>
  }

  export type AssortmentUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutMedicineInput>, Enumerable<AssortmentUncheckedCreateWithoutMedicineInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutMedicineInput>
    createMany?: AssortmentCreateManyMedicineInputEnvelope
    connect?: Enumerable<AssortmentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPharmaceuticalFormFieldUpdateOperationsInput = {
    set?: PharmaceuticalForm
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssortmentUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutMedicineInput>, Enumerable<AssortmentUncheckedCreateWithoutMedicineInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutMedicineInput>
    upsert?: Enumerable<AssortmentUpsertWithWhereUniqueWithoutMedicineInput>
    createMany?: AssortmentCreateManyMedicineInputEnvelope
    set?: Enumerable<AssortmentWhereUniqueInput>
    disconnect?: Enumerable<AssortmentWhereUniqueInput>
    delete?: Enumerable<AssortmentWhereUniqueInput>
    connect?: Enumerable<AssortmentWhereUniqueInput>
    update?: Enumerable<AssortmentUpdateWithWhereUniqueWithoutMedicineInput>
    updateMany?: Enumerable<AssortmentUpdateManyWithWhereWithoutMedicineInput>
    deleteMany?: Enumerable<AssortmentScalarWhereInput>
  }

  export type AssortmentUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutMedicineInput>, Enumerable<AssortmentUncheckedCreateWithoutMedicineInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutMedicineInput>
    upsert?: Enumerable<AssortmentUpsertWithWhereUniqueWithoutMedicineInput>
    createMany?: AssortmentCreateManyMedicineInputEnvelope
    set?: Enumerable<AssortmentWhereUniqueInput>
    disconnect?: Enumerable<AssortmentWhereUniqueInput>
    delete?: Enumerable<AssortmentWhereUniqueInput>
    connect?: Enumerable<AssortmentWhereUniqueInput>
    update?: Enumerable<AssortmentUpdateWithWhereUniqueWithoutMedicineInput>
    updateMany?: Enumerable<AssortmentUpdateManyWithWhereWithoutMedicineInput>
    deleteMany?: Enumerable<AssortmentScalarWhereInput>
  }

  export type PharmacyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<PharmacyCreateWithoutOrganizationInput>, Enumerable<PharmacyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<PharmacyCreateOrConnectWithoutOrganizationInput>
    createMany?: PharmacyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<PharmacyWhereUniqueInput>
  }

  export type PharmacyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<PharmacyCreateWithoutOrganizationInput>, Enumerable<PharmacyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<PharmacyCreateOrConnectWithoutOrganizationInput>
    createMany?: PharmacyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<PharmacyWhereUniqueInput>
  }

  export type PharmacyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<PharmacyCreateWithoutOrganizationInput>, Enumerable<PharmacyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<PharmacyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<PharmacyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: PharmacyCreateManyOrganizationInputEnvelope
    set?: Enumerable<PharmacyWhereUniqueInput>
    disconnect?: Enumerable<PharmacyWhereUniqueInput>
    delete?: Enumerable<PharmacyWhereUniqueInput>
    connect?: Enumerable<PharmacyWhereUniqueInput>
    update?: Enumerable<PharmacyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<PharmacyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<PharmacyScalarWhereInput>
  }

  export type PharmacyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<PharmacyCreateWithoutOrganizationInput>, Enumerable<PharmacyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<PharmacyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<PharmacyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: PharmacyCreateManyOrganizationInputEnvelope
    set?: Enumerable<PharmacyWhereUniqueInput>
    disconnect?: Enumerable<PharmacyWhereUniqueInput>
    delete?: Enumerable<PharmacyWhereUniqueInput>
    connect?: Enumerable<PharmacyWhereUniqueInput>
    update?: Enumerable<PharmacyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<PharmacyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<PharmacyScalarWhereInput>
  }

  export type OrganizationCreateNestedOneWithoutPharmaciesInput = {
    create?: XOR<OrganizationCreateWithoutPharmaciesInput, OrganizationUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPharmaciesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AssortmentCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutPharmacyInput>, Enumerable<AssortmentUncheckedCreateWithoutPharmacyInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutPharmacyInput>
    createMany?: AssortmentCreateManyPharmacyInputEnvelope
    connect?: Enumerable<AssortmentWhereUniqueInput>
  }

  export type AssortmentUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutPharmacyInput>, Enumerable<AssortmentUncheckedCreateWithoutPharmacyInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutPharmacyInput>
    createMany?: AssortmentCreateManyPharmacyInputEnvelope
    connect?: Enumerable<AssortmentWhereUniqueInput>
  }

  export type OrganizationUpdateOneRequiredWithoutPharmaciesNestedInput = {
    create?: XOR<OrganizationCreateWithoutPharmaciesInput, OrganizationUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPharmaciesInput
    upsert?: OrganizationUpsertWithoutPharmaciesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutPharmaciesInput, OrganizationUncheckedUpdateWithoutPharmaciesInput>
  }

  export type AssortmentUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutPharmacyInput>, Enumerable<AssortmentUncheckedCreateWithoutPharmacyInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutPharmacyInput>
    upsert?: Enumerable<AssortmentUpsertWithWhereUniqueWithoutPharmacyInput>
    createMany?: AssortmentCreateManyPharmacyInputEnvelope
    set?: Enumerable<AssortmentWhereUniqueInput>
    disconnect?: Enumerable<AssortmentWhereUniqueInput>
    delete?: Enumerable<AssortmentWhereUniqueInput>
    connect?: Enumerable<AssortmentWhereUniqueInput>
    update?: Enumerable<AssortmentUpdateWithWhereUniqueWithoutPharmacyInput>
    updateMany?: Enumerable<AssortmentUpdateManyWithWhereWithoutPharmacyInput>
    deleteMany?: Enumerable<AssortmentScalarWhereInput>
  }

  export type AssortmentUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<Enumerable<AssortmentCreateWithoutPharmacyInput>, Enumerable<AssortmentUncheckedCreateWithoutPharmacyInput>>
    connectOrCreate?: Enumerable<AssortmentCreateOrConnectWithoutPharmacyInput>
    upsert?: Enumerable<AssortmentUpsertWithWhereUniqueWithoutPharmacyInput>
    createMany?: AssortmentCreateManyPharmacyInputEnvelope
    set?: Enumerable<AssortmentWhereUniqueInput>
    disconnect?: Enumerable<AssortmentWhereUniqueInput>
    delete?: Enumerable<AssortmentWhereUniqueInput>
    connect?: Enumerable<AssortmentWhereUniqueInput>
    update?: Enumerable<AssortmentUpdateWithWhereUniqueWithoutPharmacyInput>
    updateMany?: Enumerable<AssortmentUpdateManyWithWhereWithoutPharmacyInput>
    deleteMany?: Enumerable<AssortmentScalarWhereInput>
  }

  export type MedicineCreateNestedOneWithoutAssortmentInput = {
    create?: XOR<MedicineCreateWithoutAssortmentInput, MedicineUncheckedCreateWithoutAssortmentInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutAssortmentInput
    connect?: MedicineWhereUniqueInput
  }

  export type PharmacyCreateNestedOneWithoutAssortmentInput = {
    create?: XOR<PharmacyCreateWithoutAssortmentInput, PharmacyUncheckedCreateWithoutAssortmentInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutAssortmentInput
    connect?: PharmacyWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutAssortmentNestedInput = {
    create?: XOR<MedicineCreateWithoutAssortmentInput, MedicineUncheckedCreateWithoutAssortmentInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutAssortmentInput
    upsert?: MedicineUpsertWithoutAssortmentInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<MedicineUpdateWithoutAssortmentInput, MedicineUncheckedUpdateWithoutAssortmentInput>
  }

  export type PharmacyUpdateOneRequiredWithoutAssortmentNestedInput = {
    create?: XOR<PharmacyCreateWithoutAssortmentInput, PharmacyUncheckedCreateWithoutAssortmentInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutAssortmentInput
    upsert?: PharmacyUpsertWithoutAssortmentInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<PharmacyUpdateWithoutAssortmentInput, PharmacyUncheckedUpdateWithoutAssortmentInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumPharmaceuticalFormFilter = {
    equals?: PharmaceuticalForm
    in?: Enumerable<PharmaceuticalForm>
    notIn?: Enumerable<PharmaceuticalForm>
    not?: NestedEnumPharmaceuticalFormFilter | PharmaceuticalForm
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumPharmaceuticalFormWithAggregatesFilter = {
    equals?: PharmaceuticalForm
    in?: Enumerable<PharmaceuticalForm>
    notIn?: Enumerable<PharmaceuticalForm>
    not?: NestedEnumPharmaceuticalFormWithAggregatesFilter | PharmaceuticalForm
    _count?: NestedIntFilter
    _min?: NestedEnumPharmaceuticalFormFilter
    _max?: NestedEnumPharmaceuticalFormFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type AssortmentCreateWithoutMedicineInput = {
    amount: number
    pharmacy: PharmacyCreateNestedOneWithoutAssortmentInput
  }

  export type AssortmentUncheckedCreateWithoutMedicineInput = {
    id?: number
    pharmacyId: number
    amount: number
  }

  export type AssortmentCreateOrConnectWithoutMedicineInput = {
    where: AssortmentWhereUniqueInput
    create: XOR<AssortmentCreateWithoutMedicineInput, AssortmentUncheckedCreateWithoutMedicineInput>
  }

  export type AssortmentCreateManyMedicineInputEnvelope = {
    data: Enumerable<AssortmentCreateManyMedicineInput>
    skipDuplicates?: boolean
  }

  export type AssortmentUpsertWithWhereUniqueWithoutMedicineInput = {
    where: AssortmentWhereUniqueInput
    update: XOR<AssortmentUpdateWithoutMedicineInput, AssortmentUncheckedUpdateWithoutMedicineInput>
    create: XOR<AssortmentCreateWithoutMedicineInput, AssortmentUncheckedCreateWithoutMedicineInput>
  }

  export type AssortmentUpdateWithWhereUniqueWithoutMedicineInput = {
    where: AssortmentWhereUniqueInput
    data: XOR<AssortmentUpdateWithoutMedicineInput, AssortmentUncheckedUpdateWithoutMedicineInput>
  }

  export type AssortmentUpdateManyWithWhereWithoutMedicineInput = {
    where: AssortmentScalarWhereInput
    data: XOR<AssortmentUpdateManyMutationInput, AssortmentUncheckedUpdateManyWithoutAssortmentInput>
  }

  export type AssortmentScalarWhereInput = {
    AND?: Enumerable<AssortmentScalarWhereInput>
    OR?: Enumerable<AssortmentScalarWhereInput>
    NOT?: Enumerable<AssortmentScalarWhereInput>
    id?: IntFilter | number
    medicineId?: IntFilter | number
    pharmacyId?: IntFilter | number
    amount?: IntFilter | number
  }

  export type PharmacyCreateWithoutOrganizationInput = {
    address: string
    assortment?: AssortmentCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutOrganizationInput = {
    id?: number
    address: string
    assortment?: AssortmentUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutOrganizationInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutOrganizationInput, PharmacyUncheckedCreateWithoutOrganizationInput>
  }

  export type PharmacyCreateManyOrganizationInputEnvelope = {
    data: Enumerable<PharmacyCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type PharmacyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PharmacyWhereUniqueInput
    update: XOR<PharmacyUpdateWithoutOrganizationInput, PharmacyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PharmacyCreateWithoutOrganizationInput, PharmacyUncheckedCreateWithoutOrganizationInput>
  }

  export type PharmacyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PharmacyWhereUniqueInput
    data: XOR<PharmacyUpdateWithoutOrganizationInput, PharmacyUncheckedUpdateWithoutOrganizationInput>
  }

  export type PharmacyUpdateManyWithWhereWithoutOrganizationInput = {
    where: PharmacyScalarWhereInput
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyWithoutPharmaciesInput>
  }

  export type PharmacyScalarWhereInput = {
    AND?: Enumerable<PharmacyScalarWhereInput>
    OR?: Enumerable<PharmacyScalarWhereInput>
    NOT?: Enumerable<PharmacyScalarWhereInput>
    id?: IntFilter | number
    organizationId?: IntFilter | number
    address?: StringFilter | string
  }

  export type OrganizationCreateWithoutPharmaciesInput = {
    title: string
  }

  export type OrganizationUncheckedCreateWithoutPharmaciesInput = {
    id?: number
    title: string
  }

  export type OrganizationCreateOrConnectWithoutPharmaciesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPharmaciesInput, OrganizationUncheckedCreateWithoutPharmaciesInput>
  }

  export type AssortmentCreateWithoutPharmacyInput = {
    amount: number
    medicine: MedicineCreateNestedOneWithoutAssortmentInput
  }

  export type AssortmentUncheckedCreateWithoutPharmacyInput = {
    id?: number
    medicineId: number
    amount: number
  }

  export type AssortmentCreateOrConnectWithoutPharmacyInput = {
    where: AssortmentWhereUniqueInput
    create: XOR<AssortmentCreateWithoutPharmacyInput, AssortmentUncheckedCreateWithoutPharmacyInput>
  }

  export type AssortmentCreateManyPharmacyInputEnvelope = {
    data: Enumerable<AssortmentCreateManyPharmacyInput>
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutPharmaciesInput = {
    update: XOR<OrganizationUpdateWithoutPharmaciesInput, OrganizationUncheckedUpdateWithoutPharmaciesInput>
    create: XOR<OrganizationCreateWithoutPharmaciesInput, OrganizationUncheckedCreateWithoutPharmaciesInput>
  }

  export type OrganizationUpdateWithoutPharmaciesInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateWithoutPharmaciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AssortmentUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: AssortmentWhereUniqueInput
    update: XOR<AssortmentUpdateWithoutPharmacyInput, AssortmentUncheckedUpdateWithoutPharmacyInput>
    create: XOR<AssortmentCreateWithoutPharmacyInput, AssortmentUncheckedCreateWithoutPharmacyInput>
  }

  export type AssortmentUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: AssortmentWhereUniqueInput
    data: XOR<AssortmentUpdateWithoutPharmacyInput, AssortmentUncheckedUpdateWithoutPharmacyInput>
  }

  export type AssortmentUpdateManyWithWhereWithoutPharmacyInput = {
    where: AssortmentScalarWhereInput
    data: XOR<AssortmentUpdateManyMutationInput, AssortmentUncheckedUpdateManyWithoutAssortmentInput>
  }

  export type MedicineCreateWithoutAssortmentInput = {
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly?: boolean
  }

  export type MedicineUncheckedCreateWithoutAssortmentInput = {
    id?: number
    title: string
    price: number
    pharmaceuticalForm: PharmaceuticalForm
    description: string
    prescribedOnly?: boolean
  }

  export type MedicineCreateOrConnectWithoutAssortmentInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutAssortmentInput, MedicineUncheckedCreateWithoutAssortmentInput>
  }

  export type PharmacyCreateWithoutAssortmentInput = {
    address: string
    organization: OrganizationCreateNestedOneWithoutPharmaciesInput
  }

  export type PharmacyUncheckedCreateWithoutAssortmentInput = {
    id?: number
    organizationId: number
    address: string
  }

  export type PharmacyCreateOrConnectWithoutAssortmentInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutAssortmentInput, PharmacyUncheckedCreateWithoutAssortmentInput>
  }

  export type MedicineUpsertWithoutAssortmentInput = {
    update: XOR<MedicineUpdateWithoutAssortmentInput, MedicineUncheckedUpdateWithoutAssortmentInput>
    create: XOR<MedicineCreateWithoutAssortmentInput, MedicineUncheckedCreateWithoutAssortmentInput>
  }

  export type MedicineUpdateWithoutAssortmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicineUncheckedUpdateWithoutAssortmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pharmaceuticalForm?: EnumPharmaceuticalFormFieldUpdateOperationsInput | PharmaceuticalForm
    description?: StringFieldUpdateOperationsInput | string
    prescribedOnly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PharmacyUpsertWithoutAssortmentInput = {
    update: XOR<PharmacyUpdateWithoutAssortmentInput, PharmacyUncheckedUpdateWithoutAssortmentInput>
    create: XOR<PharmacyCreateWithoutAssortmentInput, PharmacyUncheckedCreateWithoutAssortmentInput>
  }

  export type PharmacyUpdateWithoutAssortmentInput = {
    address?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutPharmaciesNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutAssortmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AssortmentCreateManyMedicineInput = {
    id?: number
    pharmacyId: number
    amount: number
  }

  export type AssortmentUpdateWithoutMedicineInput = {
    amount?: IntFieldUpdateOperationsInput | number
    pharmacy?: PharmacyUpdateOneRequiredWithoutAssortmentNestedInput
  }

  export type AssortmentUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type AssortmentUncheckedUpdateManyWithoutAssortmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type PharmacyCreateManyOrganizationInput = {
    id?: number
    address: string
  }

  export type PharmacyUpdateWithoutOrganizationInput = {
    address?: StringFieldUpdateOperationsInput | string
    assortment?: AssortmentUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    assortment?: AssortmentUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateManyWithoutPharmaciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AssortmentCreateManyPharmacyInput = {
    id?: number
    medicineId: number
    amount: number
  }

  export type AssortmentUpdateWithoutPharmacyInput = {
    amount?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutAssortmentNestedInput
  }

  export type AssortmentUncheckedUpdateWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}