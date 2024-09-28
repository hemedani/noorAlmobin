import { size, string } from "lesan";
import { coreApp } from "@noor/core";

export const provincePure = {
	name: size(string(), 2, 100),
	enName: string(),
	abb: string(),
};

const provinceRelations = {};

export const provinces = () =>
	coreApp.odm.newModel(
		"province",
		provincePure,
		provinceRelations,
	);
