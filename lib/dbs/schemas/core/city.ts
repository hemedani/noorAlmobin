import {
  type RelationDataType,
  type RelationSortOrderType,
  string,
} from "lesan";
import { coreApp } from "@noor/core";

export const cityPure = {
  name: string(),
  enName: string(),
  abb: string(),
};

const cityRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      cities: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
};


export const cities = () =>
  coreApp.odm.newModel("city", cityPure, cityRelations);
