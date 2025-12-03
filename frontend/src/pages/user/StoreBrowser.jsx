import { useEffect, useState } from "react";
import storeAPI from "../../api/storeAPI";
import ratingAPI from "../../api/ratingAPI";
import useAuth from "../../hooks/useAuth";

const StoreBrowser = () => {
  const { user } = useAuth();

  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  const loadStores = async () => {
    const data = await storeAPI.getAllWithUserRatings(user.id);
    setStores(data);
  };

  useEffect(() => {
    loadStores();
  }, []);

  const handleRating = async (storeId, rating) => {
    await ratingAPI.submitRating(storeId, rating);
    loadStores();
  };

  const filtered = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Browse Stores</h2>

      <input
        className="search-input"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="store-list">
        {filtered.map((store) => (
          <div className="store-card" key={store.id}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Overall Rating: {store.avgRating || "N/A"}</p>
            <p>Your Rating: {store.userRating || "Not rated"}</p>

            <div className="rating-buttons">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  className={r === store.userRating ? "selected-rating" : ""}
                  onClick={() => handleRating(store.id, r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreBrowser;
