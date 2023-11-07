import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from "@mui/material";
import React from "react";
import EmptyMessage from "./EmptyMessage";

type IProps = {
  heads: string[];
  rows: any[];
  Row: any;
};

const Table: React.FC<IProps> = ({ heads, rows, Row }) => {
  if (rows.length === 0) return <EmptyMessage text="No items to show" />;

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {heads.map((head) => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              {React.cloneElement(Row, { row })}
            </React.Fragment>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
