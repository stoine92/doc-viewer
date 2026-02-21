import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../../lib/fetchDocuments";


const Documents = () => {


    const { data, isLoading } = useQuery({
        queryFn: () => fetchDocuments(),
        queryKey: ["documents"],
    });



    console.log(data);
    return (
        <>
            <span>Documents</span>
        </>
    )
}

export default Documents;