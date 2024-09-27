import {toast} from 'react-toastify';

export const useMessage =()=>{
4
    function error(msg:String){
        toast.error(msg,{
            position:'top-right',
            autoClose:5000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme:'light'
        })
    }

    function success(msg:String){
        toast.success(msg,{
            position:'top-right',
            autoClose:5000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme:'light'
        })
    }
    function bark(res:{message:String; success:boolean}|undefined){
        if(!res) 
        return;
        if(res.success){
            success(res.message)
        }
        else{
            error(res.message)
        }

    }
    return {bark}
}