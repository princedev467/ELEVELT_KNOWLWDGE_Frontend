import { useState } from "react"

function useSearch(data, keys) {

    const [search, setSearch] = useState('')

    const handleFilter = () => {

        return data?.filter(v =>
            keys.some((v1) =>
                typeof v[v1] === 'string' ?
                    v[v1]?.toLowerCase()?.includes(search?.toLowerCase()) :
                    v[v1]?.toString()?.includes(search?.toLowerCase())
            )
        );

    }

    const filterData = handleFilter();

    return {
        search,
        setSearch,
        filterData
    }
}
export default useSearch