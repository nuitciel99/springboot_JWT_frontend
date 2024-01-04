import { useParams } from "react-router-dom";
import { getListView } from "../api/api";
import { useEffect, useState } from "react";

function ListView() {
  const { id } = useParams();
  const [listData, setListData] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const dataView = await getListView(id);
        setListData(dataView);
      } catch (error) {}
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      <div>{listData.id}</div>
    </>
  );
}

export default ListView;
