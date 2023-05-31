export interface ResponseItem {
	definition: string;
	glossary_sets: GlossarySet[];
	glossary_term_id: string;
	id: string;
	inserted_at: string;
	language: string;
	term: string;
	type: string;
	updated_at: string;
	definition_by: string;
}

export interface GlossarySet {
	color: string;
	icon: string;
	id: string;
	inserted_at: string;
	organization_id: string;
	description: string;
	glossary_set_id: string;
	name: string;
	type: string;
	updated_at: string;
	user_id: string;
}
