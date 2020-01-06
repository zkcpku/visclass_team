class Bar {
    constructor() {
        this.data_file = 'new_article.json';
        this.bar_data = d3.json(this.data_file).then(function(origin_data){
            return await origin_data;
        });

    }

}

function test(){
    d3.select('.boxshadowedDiv2').classed('boxshadowedDiv2-moved', true);
    d3.select('.imagefit').attr('src', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1169218981,3355554950&fm=15&gp=0.jpg')
    // 这里调取了图片
    document.getElementById('ArtistLink').innerHTML = "hello world";
    document.getElementById('ArtistName').innerHTML = "hello world";
    document.getElementById('ArtistBirth').innerHTML = "hello world";
    document.getElementById('ArtistDeath').innerHTML = "hello world";
    document.getElementById('ArtistLikes').innerHTML = "hello world";
}

function main(){
    bar = new Bar();
    console.log(bar.bar_data);

}
test()
main()