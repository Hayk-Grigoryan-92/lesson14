import { useEffect } from "react";
import { PageApply } from "../pageApply";
import "./style.scss";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const ViewPage = () => {

 const pageIsView = useSelector((state)=> state.isView)

 useEffect(()=>{
  console.log(pageIsView);
 },[])

  return (
    <div className="ViewPage">
      {pageIsView ? 
        <PageApply view='fullView'/>
      :null}
    </div>
  );
};
