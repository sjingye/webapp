function changeStyle(d) {
    var lis=document.querySelectorAll("section ul li");
    console.log(d)
    for(var i=0;i<lis.length;i++){
        if(lis[i].innerHTML.indexOf(d) !== -1){
            lis[i].className = "active";
        }
    }
}
changeStyle(d);
$("form input").tap(function () {
    $("section").hide();
    $(".remind").show();
})

function searchCity(data) {
    if (data.results.length) {
        cityList.style.display = 'block';

        var citys = data.results;

        var html = '';
        citys.forEach(function(city, index) {

            var searchName = cityElement.value;
            var re = new RegExp(searchName, 'g');
            var name = city.name.replace(re, function($0) {
                return '<span style="color: red">'+ $0 +'</span>';
            });

            var path = city.path.split(',');
            path.shift();
            html += `<li _name="${city.name}">${name} - ${path.join(',')}</li>`;
        });

        cityList.innerHTML = html;
    } else {
        cityList.style.display = 'none';
    }
}