// export type ObjectType = "Exon" | "Transcript" | "Gene";

export type Exon = {
  end: number;
  db_type: string;
  seq_region_name: string;
  id: string;
  start: number;
  assembly_name: string;
  version: number;
  strand: number;
  object_type: string;
  species: string;
};

export type Transcript = {
  end: number;
  Exon: Exon[];
  Parent: string;
  source: string;
  seq_region_name: string;
  assembly_name: string;
  Translation: {
    start: number;
    species: string;
    object_type: "Translation";
    end: number;
    db_type: string;
    length: number;
    Parent: string;
    id: string;
  };
  object_type: "Transcript";
  version: number;
  strand: number;
  db_type: string;
  id: string;
  biotype: string;
  is_canonical: number;
  start: number;
  species: string;
  display_name: string;
  logic_name: string;
};

export type Gene = {
  end: number;
  seq_region_name: string;
  source: string;
  object_type: "Gene";
  version: number;
  strand: number;
  assembly_name: string;
  Transcript: Transcript[];
  db_type: string;
  description: string;
  biotype: string;
  id: string;
  start: number;
  logic_name: string;
  display_name: string;
  species: string;
};
