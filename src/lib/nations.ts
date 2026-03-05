import nationsData from "@/data/nations.json";
import type { Nation } from "@/types";

export function getNations(): Nation[] {
  return nationsData as Nation[];
}

export function getNation(id: string): Nation | undefined {
  return (nationsData as Nation[]).find((n) => n.id === id);
}
