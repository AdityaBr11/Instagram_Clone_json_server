
import {appendData} from './script/append.js'

// for create popup
let create=document.getElementById('create');
create.addEventListener("click",function(){
    document.querySelector('.create-popup').style.display='flex'
    // console.log('hello');
})

let close=document.querySelector(".close").addEventListener("click",function(){
    document.querySelector('.create-popup').style.display='none'
})

// for create status-popup for tanya miss
let tanya=document.getElementById('jatin');
tanya.addEventListener("click",function(){
    document.querySelector('.create-popup-tanya').style.display='flex'
    // console.log('hello');
})

let close1=document.querySelector(".close1").addEventListener("click",function(){
    document.querySelector('.create-popup-tanya').style.display='none'
})

// for create status-popup for swanand sir
let kdm=document.getElementById('kdm');
kdm.addEventListener("click",function(){
    document.querySelector('.create-popup-kdm').style.display='flex'
    // console.log('hello');
})

let close2=document.querySelector(".close2").addEventListener("click",function(){
    document.querySelector('.create-popup-kdm').style.display='none'
})
// for create status-popup for chandra sir
let chandra=document.getElementById('chandra');
chandra.addEventListener("click",function(){
    document.querySelector('.create-popup-chandra').style.display='flex'
    // console.log('hello');
})

let close3=document.querySelector(".close3").addEventListener("click",function(){
    document.querySelector('.create-popup-chandra').style.display='none'
})
// for create status-popup for vijeetha miss
let vij=document.getElementById('vij');
vij.addEventListener("click",function(){
    document.querySelector('.create-popup-vij').style.display='flex'
    // console.log('hello');
})

let close4=document.querySelector(".close4").addEventListener("click",function(){
    document.querySelector('.create-popup-vij').style.display='none'
})





let inp=document.getElementById("image");
inp.addEventListener("change",function(){
    handleImage(event)
})

//when we click on post then it will send the data into json server and we can use from there
let create_btn=document.getElementById("create_btn");
create_btn.addEventListener('click',function(){
    addPost()
    console.log('hello');
})
//when the img is under process for uploading disable the btn because it will sent the empty data.
create_btn.disabled=true;



//UPLOADED IT ON JSON SERVER
const addPost=async ()=>{
    let caption=document.getElementById("caption").value;
    let id=document.getElementById("id").value;
    let send_this_data={
        caption,
        id,
        image_url
    }
    let res=await fetch(`http://localhost:3000/posts`,{
    method:'POST',
    body:JSON.stringify(send_this_data),
    headers:{
        'Content-Type':'application/json',
    },
  })
    let data= await res.json();
    console.log(data);
}

let image_url;

//First part
//UPLOAD URL on (OMDB imgBB)
const handleImage=async (event)=>{
    // console.log(event);
    //0:accept input
    
    try{
        let img=document.getElementById("image");
        // console.log(img);
        let actual_img=img.files[0];
        // console.log(actual_img);
        //we are sending images as form data;
        //why? =>Api asked us to do;

        let form=new FormData();
        form.append('image',actual_img);
        let res=await fetch(`https://api.imgbb.com/1/upload?key=6086add53ee9d262f5d0edf17dc6b8c3`,{
            method:'POST',
            body:form,
        });
        let data=await res.json();
        console.log(data);
        //store img in global scope
        image_url=data.data.display_url;

        //NOw we have to make the btn enable;
        create_btn.disabled=false;
        
        
    }catch(error){
        console.log(error);
    }


}

//Now we need to append the whole data in the body of instagram
let cont=document.getElementById("cont");
const getData=async ()=>{
    try{
        let res=await fetch(`http://localhost:3000/posts`);
        let data=await res.json()
        // console.log(data);

        //what -data
        //where-
        appendData( data,cont) ;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
getData()

document.getElementById("dp").addEventListener('click',function(){
    window.location.href='profile.html'
    
})