import { useParams } from "react-router-dom";
import { getListView } from "../api/api";
import React, { useEffect, useState } from "react";

function ListView() {
  const { id } = useParams();
  const [listData, setListData] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const dataView = await getListView(id);
        if (isMounted) {
          setListData(dataView);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      {listData && (
        <div>
          {/* Render the viewData properties here */}
          <h1>{listData.name}</h1>
          <p>{listData.address}</p>
          {/* Add more elements as needed */}
        </div>
      )}
    </>
  );
}
export default ListView;
