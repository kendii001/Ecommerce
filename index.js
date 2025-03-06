
     async function fetchData() {
        try {
            const response = await fetch('http://localhost:5000/api/data'); // Replace with your actual data URL
            const data = await response.json();
            document.getElementById('output').textContent = JSON.stringify(data);
        } catch (error) {
            document.getElementById('output').textContent = 'Error fetching data: '  ;
        }
    }



// const container=document.getElementsByClassName("container");
// const image=document.getElementById("image");
// image.onclick=function(){
//         window.location.href = 'product.html'; 
//     }
    // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    // .then(response=> response.json())
    // .then(data=> console.log(data))
    // .catch(error => console.error(error));
// const text=document.getElementsByClass("text");
// const drop=document.getElementById("drop");
// text.onclick=()=>{
//     if(text.clicked){
//         const drop=document.getElementById("drop") .style.display="block";
//     }
//     else{
//         const drop=document.getElementById("drop") .style.display="none";
//     }
// };
 