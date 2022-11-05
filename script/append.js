const appendData=(data,container)=>{

    container.innerHTML=null;
    data.forEach(({ caption,image_url })=>{
        let main_div=document.createElement("div");
        let div_f=document.createElement("div");
        div_f.setAttribute("class","pro_top");
        

        let div_f1=document.createElement("div");
        let img1=document.createElement("img");
        img1.src='https://i.postimg.cc/kgvcQdV1/profile.jpg';
        let name=document.createElement("p");
        name.innerHTML='aditya.anand__________';
        div_f1.append(img1,name);

        let div_f2=document.createElement("div");
        let i=document.createElement('i');
        // i.innerText='<i class=""></i>'
        i.setAttribute('class','ri-more-line')
        div_f2.append(i);
        div_f.append(div_f1,div_f2);

        let div_s=document.createElement("div");
        div_s.setAttribute("class",'pro_mid')
        let img=document.createElement("img");
        img.src=image_url;
        div_s.append(img);

        let div_l=document.createElement("div");
        div_l.setAttribute('class','pro_but');

        let div_l1=document.createElement("div");
        let li=document.createElement('i');
        li.setAttribute('class','ri-heart-line');

        let li1=document.createElement('i');
        li1.setAttribute('class','ri-chat-1-line')

        let li2=document.createElement('i');
        li2.setAttribute('class','ri-share-line');
        div_l1.append(li,li1,li2);
        
        let div_l2=document.createElement("div");
        let l2=document.createElement('i');
        l2.setAttribute('class','ri-save-line');
        div_l2.append(l2);
        div_l.append(div_l1,div_l2);

        let like=document.createElement('p');
        like.setAttribute('class','like')
        like.innerText='556 likes'
        let caption_p=document.createElement("p");
        caption_p.setAttribute('class','caption')
        caption_p.innerText=`aditya.anand__________: ${caption}`
        
        main_div.append(div_f,div_s,div_l,like,caption_p);
        container.append(main_div);



        // let div=document.createElement("div");
        // let caption_p=document.createElement("p");
        // caption_p.innerText=caption
        // let img=document.createElement("img");
        // img.src=image_url;

        // div.append(img,caption_p);
        // container.append(div)
    });
};
export { appendData }