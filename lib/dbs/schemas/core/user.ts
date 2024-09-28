import { coreApp } from "@noor/core";
import {
  boolean,
  coerce,
  date,
  enums,
  optional,
  type RelationDataType,
  type RelationSortOrderType,
  string,
} from "lesan";
export const userGender = enums(["Male", "Female"]);

export const userPure = {
  first_name: string(),
  last_name: string(),
  phone: string(),
  gender: userGender,
  birth_date: optional(coerce(date(), string(), (value) => new Date(value))),
  personnel_code: string(),
  email: optional(string()),
  is_active: optional(boolean()),
};

const userRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      users: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  city: {
    schemaName: "city",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      users: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  }
};

export const users = () =>
  coreApp.odm.newModel(
    "user",
    userPure,
    userRelations,
    {
      createIndex: {
        indexSpec: { "phone": 1 },
        options: { unique: true },
      },
    },
  );
