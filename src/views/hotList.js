import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getDatabase } from "firebase/database";
import { fireStore } from "@/firebaseconfig";

import { doc, onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function HotList() {
  const [newList, setnewList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(fireStore, "Hot List"),
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setnewList(data);
      }
    );

    return () => unsub();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 200 },
    {
      field: "coinName",
      headerName: "Pair",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "trend",
      headerName: "Trend",
      type: "number",
      flex: 1,
      minWidth: 200,
    },
  ];

  return (
    <DataGrid
      rows={newList}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
}
