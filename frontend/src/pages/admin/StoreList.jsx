import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import storeAPI from "../../api/storeAPI";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    storeAPI.getAll().then((res) => setStores(res));
  }, []);

  return (
    <div className="page-container">
      <h2>Store List</h2>

      <DataTable
        columns={[
          { label: "Store Name", field: "name" },
          { label: "Email", field: "email" },
          { label: "Address", field: "address" },
          { label: "Rating", field: "rating" }
        ]}
        data={stores}
      />
    </div>
  );
};

export default StoreList;
