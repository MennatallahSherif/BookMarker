var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');

var cartona=[];
if(localStorage.getItem('site')!=null)
{

   cartona= JSON.parse( localStorage.getItem('site'));
   display();

}

function addSite() {
    
    var site= {
        name:siteNameInput.value,
        Site:siteUrlInput.value  
    }
    cartona.push(site);
    localStorage.setItem('site', JSON.stringify(cartona));
    console.log(site);

    clearForm();
    display();
}

function display() {
    var contant =``;
    for(var i=0; i<cartona.length;i++){
        contant+=`
        <tr>
        <td>${cartona[i].name}</td>
       <td> <a class="btn btn-primary" href="${cartona[i].Site}" target="_blank">visit</a> </td>
        
        <td><button onclick='deleteSite(${i})' class="btn btn-danger btndelete">Delete</button></td>
        </tr>
        `

    }
    document.getElementById('tableBody').innerHTML= contant;
}

function clearForm(){

    siteName.value="";
    siteUrl.value="";
 
}

function deleteSite(index) {
    cartona.splice(index,1);
    display();
    localStorage.setItem('site', JSON.stringify(cartona));
    
}


