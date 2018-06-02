const masoryLayout = (containerElem,itemsElemens,columns)=>{
    containerElem.classList.add('masory-layout')
    let columsElements=[]
    for(let i=0; i<columns;i++){
        let column=document.createElement('div')
        column.classList.add('masonry-column')
        containerElem.appendChild(column)
        columsElements.push(column);
    }
    for(let m =0 ; m<2;m++){
        for (let n =0; n< 4 ;n++){
            columsElements[n].appendChild(itemsElemens[m*4+n])
        }
    }
}

if(document.body.clientWidth>=640){
    masoryLayout(document.getElementById('grupos'),document.querySelectorAll('.grupo'),4)
}