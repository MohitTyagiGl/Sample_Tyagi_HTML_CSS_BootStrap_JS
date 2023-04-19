// alert(1);
/*
fetch("https://fakestoreapi.com/products").then((data)=>{
   // console.log(data);
   return data.json() // converted to object
}).then((objectData)=> {
   // console.log(objectData);
 // console.log(objectData[1].title);
    let rows = "";
    objectData.forEach(product => {
            rows += `
              <tr>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td><img src="${product.image}"/></td>
              </tr>
            `;
   });
   document.getElementById("table_body").innerHTML=rows;
}).catch((error)=>{
    console.log(error)
})
*/
fetch("http://localhost:8000/api/v1/companies").then((data)=>{
   // console.log(data);
   return data.json() // converted to object
}).then((objectData)=> {
   console.log(objectData);
  console.log(objectData[1].name);
  
}).catch((error)=>{
    console.log(error)
})