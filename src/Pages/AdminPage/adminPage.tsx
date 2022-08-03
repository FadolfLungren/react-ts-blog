import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../strore/redux";
import {deleteSiPack} from "../../strore/actionCreators";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const [state, setState] = useState<number>()
    const {SiPackages} = useAppSelector(state => state.PacksReducer)

    const dispatch = useAppDispatch()
    const nav = useNavigate()

    function changeState(i:number) {
        if(state === i){
            setState(undefined)
        }else{
            setState(i)
        }
    }

    return (
        <div>
            <div style={{ backgroundColor:'red', width:'100%', height:'70px', display:"flex",flexDirection:'column', justifyItems:'center'}}>
                <button style={{width:'80%', margin:'0px auto'}} onClick={()=>(nav('/admin/add'))}>Add Post</button>
            </div>
            {SiPackages.map((SiPack, i)=>
                <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>

                    <div style={{border:'1px solid teal', margin:'10px', marginBottom:'0px', display:'flex', alignItems:"center", width:'100%'}}>
                        <div>
                            <div>
                                {SiPack.id} {SiPack.title}
                            </div>
                            <button onClick={()=>dispatch( deleteSiPack(SiPack.id) )}>deletePost</button>
                            <button style={{marginLeft:'10px'}}>hidePost</button>
                        </div>
                        <button style={{width:'100px',height:'20px', marginLeft:'auto',marginRight:'10px'}} onClick={()=>changeState(i)}>\|/</button>
                    </div>
                    <div style={{width:'95%', border:'1px solid teal', marginTop:'0px', display:i !== state ? 'none' : 'block'}}>{SiPack.text}</div>
                </div>
            )}

        </div>
    );
};

export default AdminPage;