import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getRestaurants } from "../api/api";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function HomeView() {
  const [data, setData] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listData = await getRestaurants();
        setData(listData);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (ACCESS_TOKEN) {
      const token = jwtDecode(ACCESS_TOKEN);
      const userEmail = token.email;

      console.log(userEmail);
    }
  }, []);

  return (
    <>
      <div className="container">
        {data.length > 0 ? (
          data.map((item, i) => {
            return (
              <>
                <li key={i}>
                  <Link to={`/view/${item.id}`}>{item.name}</Link>
                </li>
              </>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
    </>
  );
}

export default HomeView;
