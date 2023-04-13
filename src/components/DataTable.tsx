import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { server_calls } from '../api/server'
import { useState } from 'react'
import { useGetData } from '../custom-hooks/FetchData'
import Button from './Button'
import Modal from './Modal'

const columns: GridColDef[] = [
  {field: 'id', headerName: "ID", width: 90, hide: true},
  {field: 'make', headerName: "Make", flex: 1},
  {field: 'model', headerName: "Model", flex: 1},
  {field: 'year', headerName: "Year", flex: 1},
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  
const handleOpen = () => {
  setOpen(true)
}

const handleClose = () => {
  setOpen(false)
}

const deleteData = () => {
  server_calls.delete(selectionModel[0]);
  getData();
  console.log(`Selection model: ${selectionModel}`)
  setTimeout( () => { window.location.reload() }, 500)
}

return (
  <>
    <Modal
      id={selectionModel}
      open={open}
      onClose={handleClose}
      />
    <div className="flex flex-row">
      <div>
        <button 
          className="p-3 bg-slate-300 rounded-hover:bg-slate-800 hover:text-white"
          onClick={() => handleOpen()}
          >
            Add New Car
        </button>
        <Button onClick={handleOpen} className='p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white'>Update</Button>
        <Button onClick={deleteData} className='p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white'>Delete</Button>
      </div>
      <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '100%' }}
      >
        <h2 className="p-3 bg-slate-300 my-2 rounded">My Car Inventory</h2>
        <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
        checkboxSelection={true}
        onRowSelectionModelChange={ (item:any) => {
          setSelectionModel(item)
        }}/>
      </div>
    </div>
    <button onClick={getData}></button>
  </>
)
}

export default DataTable
