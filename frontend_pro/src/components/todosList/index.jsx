import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/api";
import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from "@mui/material";

export default function TodosList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Main
      </Typography>
      {data.length ? (
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
