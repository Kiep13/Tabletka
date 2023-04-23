
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\@prisma\\client",
    "@prisma\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */

exports.Prisma.AssortmentScalarFieldEnum = {
  id: 'id',
  medicineId: 'medicineId',
  pharmacyId: 'pharmacyId',
  amount: 'amount'
};

exports.Prisma.MedicineScalarFieldEnum = {
  id: 'id',
  title: 'title',
  price: 'price',
  pharmaceuticalForm: 'pharmaceuticalForm',
  description: 'description',
  prescribedOnly: 'prescribedOnly'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  title: 'title'
};

exports.Prisma.PharmacyScalarFieldEnum = {
  id: 'id',
  organizationId: 'organizationId',
  address: 'address'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.PharmaceuticalForm = {
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

exports.Prisma.ModelName = {
  Medicine: 'Medicine',
  Organization: 'Organization',
  Pharmacy: 'Pharmacy',
  Assortment: 'Assortment'
};

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"PharmaceuticalForm\",\"values\":[{\"name\":\"Tablet\",\"dbName\":null},{\"name\":\"Capsule\",\"dbName\":null},{\"name\":\"Solution\",\"dbName\":null},{\"name\":\"Injection\",\"dbName\":null},{\"name\":\"Ointment\",\"dbName\":null},{\"name\":\"Syrup\",\"dbName\":null},{\"name\":\"Patch\",\"dbName\":null},{\"name\":\"Suppository\",\"dbName\":null},{\"name\":\"Powder\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"Medicine\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pharmaceuticalForm\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PharmaceuticalForm\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prescribedOnly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assortment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assortment\",\"relationName\":\"AssortmentToMedicine\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Organization\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pharmacies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pharmacy\",\"relationName\":\"OrganizationToPharmacy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Pharmacy\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Organization\",\"relationName\":\"OrganizationToPharmacy\",\"relationFromFields\":[\"organizationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assortment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assortment\",\"relationName\":\"AssortmentToPharmacy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Assortment\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicine\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Medicine\",\"relationName\":\"AssortmentToMedicine\",\"relationFromFields\":[\"medicineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pharmacyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pharmacy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pharmacy\",\"relationName\":\"AssortmentToPharmacy\",\"relationFromFields\":[\"pharmacyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Medicine\",\"plural\":\"medicines\",\"findUnique\":\"findUniqueMedicine\",\"findUniqueOrThrow\":\"findUniqueMedicineOrThrow\",\"findFirst\":\"findFirstMedicine\",\"findFirstOrThrow\":\"findFirstMedicineOrThrow\",\"findMany\":\"findManyMedicine\",\"create\":\"createOneMedicine\",\"createMany\":\"createManyMedicine\",\"delete\":\"deleteOneMedicine\",\"update\":\"updateOneMedicine\",\"deleteMany\":\"deleteManyMedicine\",\"updateMany\":\"updateManyMedicine\",\"upsert\":\"upsertOneMedicine\",\"aggregate\":\"aggregateMedicine\",\"groupBy\":\"groupByMedicine\"},{\"model\":\"Organization\",\"plural\":\"organizations\",\"findUnique\":\"findUniqueOrganization\",\"findUniqueOrThrow\":\"findUniqueOrganizationOrThrow\",\"findFirst\":\"findFirstOrganization\",\"findFirstOrThrow\":\"findFirstOrganizationOrThrow\",\"findMany\":\"findManyOrganization\",\"create\":\"createOneOrganization\",\"createMany\":\"createManyOrganization\",\"delete\":\"deleteOneOrganization\",\"update\":\"updateOneOrganization\",\"deleteMany\":\"deleteManyOrganization\",\"updateMany\":\"updateManyOrganization\",\"upsert\":\"upsertOneOrganization\",\"aggregate\":\"aggregateOrganization\",\"groupBy\":\"groupByOrganization\"},{\"model\":\"Pharmacy\",\"plural\":\"pharmacies\",\"findUnique\":\"findUniquePharmacy\",\"findUniqueOrThrow\":\"findUniquePharmacyOrThrow\",\"findFirst\":\"findFirstPharmacy\",\"findFirstOrThrow\":\"findFirstPharmacyOrThrow\",\"findMany\":\"findManyPharmacy\",\"create\":\"createOnePharmacy\",\"createMany\":\"createManyPharmacy\",\"delete\":\"deleteOnePharmacy\",\"update\":\"updateOnePharmacy\",\"deleteMany\":\"deleteManyPharmacy\",\"updateMany\":\"updateManyPharmacy\",\"upsert\":\"upsertOnePharmacy\",\"aggregate\":\"aggregatePharmacy\",\"groupBy\":\"groupByPharmacy\"},{\"model\":\"Assortment\",\"plural\":\"assortments\",\"findUnique\":\"findUniqueAssortment\",\"findUniqueOrThrow\":\"findUniqueAssortmentOrThrow\",\"findFirst\":\"findFirstAssortment\",\"findFirstOrThrow\":\"findFirstAssortmentOrThrow\",\"findMany\":\"findManyAssortment\",\"create\":\"createOneAssortment\",\"createMany\":\"createManyAssortment\",\"delete\":\"deleteOneAssortment\",\"update\":\"updateOneAssortment\",\"deleteMany\":\"deleteManyAssortment\",\"updateMany\":\"updateManyAssortment\",\"upsert\":\"upsertOneAssortment\",\"aggregate\":\"aggregateAssortment\",\"groupBy\":\"groupByAssortment\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Projects\\Tabletka\\apps\\api\\prisma\\@prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.13.0",
  "engineVersion": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\@prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\@prisma\\client\\schema.prisma")
