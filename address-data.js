let url = "https://random-data-api.com/api/v2/addresses?size=15";
fetch(url)
    .then(response => {
        if (!response.ok) {
            console.log("Resopnse has error");
            return;
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        data.forEach(element => {
            console.log("single user");
            console.log(element.name);

            var html = `<tr>

                    <td class="user-Building-number">`+element.building_number+`</td>
                    <td class="user-City">`+element.city+`</td>
                    <td class="user-Community">`+element.community+`</td>
                    <td class="user-Full-address">`+element.full_address+`</td>
                    <td class="user-Country-Code">`+element.country_code+`</td>
                    <td class="user-id">`+element.id+`</td>
                    <td class="user-Longitude">`+element.longitude+`</td>
                    <td class="user-Latitude">`+element.latitude+`</td>
                    <td class="user-Mailbox">`+element.mailbox+`</td>
                    <td class="user-Passcode">`+element.passcode+`</td>
                    <td class="user-city_prefix">`+element.city_prefix+`</td>
                    <td class="user-city_suffix">`+element.city_suffix+`</td>
                    <td class="user-postcode">`+element.postcode+`</td>
                    <td class="user-secondary_address">`+element.secondary_address+`</td>
                    <td class="user-state">`+element.state+`</td>
                    <td class="user-state_abbr">`+element.state_abbr+`</td>
                    <td class="user-street_address">`+element.street_address+`</td>
                    <td class="user-street_name">`+element.street_name+`</td>
                    <td class="user-street_suffix">`+element.street_suffix+`</td>
                    <td class="user-time_zone">`+element.time_zone+`</td>
                    <td class="user-uid">`+element.uid+`</td>
                    <td class="user-zip_code">`+element.zip_code+`</td>

                  </tr>`

        var addressSectionElem = document.getElementById('address-data');
        addressSectionElem.insertAdjacentHTML("beforeend", html);
           
        });
    }).catch(error =>{
        console.error("There is a proble in fetcing the value:", error.message);
    });