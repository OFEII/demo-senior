auto.waitFor();
var height = device.height;
var width = device.width;
setScreenMetrics(width, height);
autoplay()



function autoplay(){
    for (let i = 0; i < 100; i++) {    
        click(450,1700)
        toast('start yao')
        sleep(1000)
        click(450,1750)
        click(450,1900)
        click(540,1930)
        sleep(1000)

    }
}