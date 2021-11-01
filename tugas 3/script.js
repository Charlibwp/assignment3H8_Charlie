let dataNonTableEL = document.getElementById("dataNonTable")
let dataTableEL = document.getElementById("dataTable")

fetch('https://randomuser.me/api/?results=10&nat=us&inc=name,location,picture,gender')
    .then(Response => Response.json())
    .then(data => {
        data.results.forEach(user => {
            // let nama_lengkap = user.name.title + " " + user.name.first + " " + user.name.last
            // console.log(nama_lengkap)
            // dataNonTableEL.innerHTML += `
            //  <h3>${nama_lengkap}<h3>
            // `
            // let alamat = user.location.street.number + " " + user.location.street.name + " " + user.location.city+ " " + user.location.state+ " " + user.location.country
            // console.log(alamat)
            // dataNonTableEL.innerHTML += `
            //  <h3>${alamat}<h3>
            // `
            let nama_lengkap = user.name.title + " " + user.name.first + " " + user.name.last
            let alamat = user.location.city + " " + user.location.state + " " + user.location.country
            let image_url = user.picture.medium 
    
            
            dataTableEL.innerHTML += `
                 <tr>
                    <td>${nama_lengkap} (${user.gender})</td>
                    <td>${alamat}</td>
                    <td><img src="${image_url}"></td>
                 </tr>
           `
        });
    })