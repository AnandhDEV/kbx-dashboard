import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getDatabase } from "firebase/database";
import { fireStore } from "@/firebaseconfig";

import { doc, onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function NewList() {
  const [newList, setnewList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(fireStore, "NewList"),
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
    { field: "id", headerName: "ID", minWidth: 200 },
    {
      minWidth: 200,
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    { minWidth: 200, field: "lastName", headerName: "Last Name", flex: 1 },
    {
      minWidth: 200,
      field: "phone",
      headerName: "Phone",
      type: "number",
      flex: 1,
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
