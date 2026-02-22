import type { FC } from "react";
import InputField from "../Form/InputField";
import SelectField from "../Form/SelectField";
import type { useFilterReturn } from "../hooks/useFilter";
import type { SortKeyInterface, SortDirectionInterface } from "../hooks/useSortOrder";
import type { Dispatch } from "react";


interface FilterAndSortProps extends Partial<useFilterReturn> {
    filter: string;
    setFilter: (value: string) => void;
    sortKey: SortKeyInterface;
    sortDirection: SortDirectionInterface;
    setSortKey: Dispatch<React.SetStateAction<SortKeyInterface>>;
    setSortDirection: Dispatch<React.SetStateAction<SortDirectionInterface>>;
}


const FilterAndSort: FC<FilterAndSortProps> = ({ filter, setFilter, sortKey, setSortKey, sortDirection, setSortDirection }) => {
    return (
        <>
            <InputField 
                label="Search Documents"
                name="search"
                placeholder="Type to search..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            
            <SelectField
                label="Sort by"
                name="sortKey"
                value={sortKey.value}
                onChange={(e) => setSortKey({ value: e.target.value as "name" | "added" })}
                options={[
                    {code: "name", description: "Name"},
                    {code: "added", description: "Date Added"}
                ]}
            />

            <SelectField
                label="Sort direction"
                name="sortDirection"
                value={sortDirection.value}
                onChange={(e) => setSortDirection({ value: e.target.value as "asc" | "desc" })}
                options={[
                    {code: "asc", description: "Ascending"},
                    {code: "desc", description: "Descending"}
                ]}
            />
        </>
    )
}

export default FilterAndSort;