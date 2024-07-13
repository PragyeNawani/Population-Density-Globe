function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp=>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            // console.log(element)
            longitude = element.longitude
            latitude = element.latitude
            // console.log(longitude)
            // console.log(latitude)
            pop = element.population;
            // console.log(pop)
            if (pop>100000000){
                clr = "red"
            }
            else if (pop>10000000){
                clr = "rgb(252, 78, 3)"
            }
            else if (pop>5000000){
                clr = "rgb(252, 144, 3)"
            }
            else if (pop>1000000){
                clr = "rgb(252, 202, 3)"
            }
            else{
                clr = "rgb(161, 252, 3)"
            }
            //mark on map
            new mapboxgl.Marker({
                draggable: false,
                color : clr 

            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
updateMap()
const interval = 10000
setInterval(updateMap,interval)
