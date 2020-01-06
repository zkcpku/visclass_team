
function show(data_dict, iter = 'Peking University'){
    d3.select('.rightBar').classed('rightBar-moved', true);
    d3.select('#bar_image1').attr('src', data_dict[iter].pic[0])
    // d3.select('#bar_image2').attr('src', data_dict[iter].pic[1])
    
    // 这里调取了图片
    document.getElementById('bar_name').innerHTML = iter;
    document.getElementById('bar_homepage').innerHTML = data_dict[iter].homepage;
    document.getElementById('bar_region').innerHTML = data_dict[iter].region;

}
function unshow()
{
    d3.select('.rightBar').classed('rightBar-moved', false);
}
// main()


function init_data(origin_data){
    data_dict = {}

    for (var i = origin_data.length - 1; i >= 0; i--) {
        data_dict[origin_data[i].institution] = {'region':origin_data[i].region,'homepage':origin_data[i].homepage,'pic':origin_data[i].pic}
    }
    return data_dict;
}
d3.json('institution_info.json').then(function(data){
    // console.log(data);
    data_dict = init_data(data);

    show(data_dict);
    // unshow();

})




