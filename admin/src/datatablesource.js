export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6H4T6NZ1nJUhCNDrN2d-mF1X77oGVMBC9mJGI3nzaQ&s" } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
 ];

 export const targetColumns = [
  { field: "_id", headerName: "ID", width: 250},
  {
    field: "source",
    headerName: "Source",
    width: 100,
  },

  {
    field: "destination",
    headerName: "Destination",
    width: 100,
  },

  {
    field: "distance",
    headerName: "Distance",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  
  
  
 ]

 export const carColumns = [
  { field: "_id", headerName: "ID", width: 250},
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },

  {
    field: "nbrPlaces",
    headerName: "NbrPlaces",
    width: 100,
  },



  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "Modele",
    headerName: "Modele",
    width: 100,
  },
  
  
  
 ]

 export const reservationsColumns = [
  { field: "_id", headerName: "ID", width: 250},
  {
    field: "Car",
    headerName: "Car",
    width: 250,
  },

  {
    field: "nbrPassenger",
    headerName: "NbrPassenger",
    width: 15,
  },
  {
    field: "total",
    headerName: "Prix Total",
    width: 50,
  },

  {
    field: "source",
    headerName: "Source",
    width: 100,
  },

  {
    field: "destination",
    headerName: "Destination",
    width: 100,
  },
  

  {
    field: "extra",
    headerName: "Extras",
    width: 150,
  },

  {
    field: "firstName",
    headerName: "FirstName",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  
  
  
 ]

//temporary data
