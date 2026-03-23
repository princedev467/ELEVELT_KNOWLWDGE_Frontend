import React from 'react';
import {
  DataGridPro,
  useGridApiRef,
  gridExpandedRowCountSelector,
  gridVisibleColumnDefinitionsSelector,
  gridExpandedSortedRowIdsSelector,
} from '@mui/x-data-grid-pro';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';

function ProductData(props) {
     const apiRef = useGridApiRef();
     
       const [coordinates, setCoordinates] = React.useState({
    rowIndex: 0,
    colIndex: 0,
  });

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

      React.useEffect(() => {
    const { rowIndex, colIndex } = coordinates;
    apiRef.current?.scrollToIndexes(coordinates);
    const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
    const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
    apiRef.current?.setCellFocus(id, column.field);
  }, [apiRef, coordinates]);

  const handleClick = (position) => () => {
    const maxRowIndex = gridExpandedRowCountSelector(apiRef) - 1;
    const maxColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
  }
 const handleCellClick = (params) => {
    const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
      (id) => id === params.id,
    );
    const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
      (column) => column.field === params.field,
    );
    setCoordinates({ rowIndex, colIndex });
  };
    return (
         <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: 380 }}>
           
           <DataGridPro
          apiRef={apiRef}
          onCellClick={handleCellClick}
          hideFooter
          loading={loading}
          {...data}
        />
        </Paper>
    );
}

export default ProductData;