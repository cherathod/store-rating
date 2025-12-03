import { useEffect, useState } from "react";
import storeAPI from "../../api/storeAPI";
import ratingAPI from "../../api/ratingAPI";

const StoreRatings = () => {
  const [storeInfo, setStoreInfo] = useState(null);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const load = async () => {
      const store = await storeAPI.getMyStore();
      const ratingList = await ratingAPI.getRatingsForStore(store.id);

      setStoreInfo(store);
      setRatings(ratingList);
    };

    load();
  }, []);

  return (
    <div className="page-container">
      <h2>My Store Ratings</h2>

      {storeInfo && (
        <>
          <h3>{storeInfo.name}</h3>
          <p>Average Rating: {storeInfo.avgRating}</p>
        </>
      )}

      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {ratings.map((r) => (
            <tr key={r.id}>
              <td>{r.user.name}</td>
              <td>{r.user.email}</td>
              <td>{r.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreRatings;
