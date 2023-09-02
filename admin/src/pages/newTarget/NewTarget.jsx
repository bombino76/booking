import "./newTarget.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { targetInputs } from "../../formSource";
import axios from "axios"

const NewTarget = () => {
  const [file, setFile] = useState("");
  const [info,setInfo]= useState({})

  const handleChange = e=>{
    setInfo(prev=>({...prev,[e.target.id]:e.target.value}))

  }
  
  const handleClick = async e=>{
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","upload")
    try{
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dgzko8uu3/image/upload",
      data
      );

      const {url} = uploadRes.data
      const newTarget ={
        ...info,
        img: url,

      };
      await axios.post("/targets",newTarget)
      
    }catch(err){
      console.log(err)
    }

  }
 

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Target</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {targetInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                  <label>Active</label>
                  <select  id="active" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>

                  </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTarget;
