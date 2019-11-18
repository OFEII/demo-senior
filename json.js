var json1 = [{'name':'OFEII','age':'21'},{'name':'faker','age':'22'},{'name':'O_O','age':'19'}]

for(var i =0;i<json1.length;i++){
    for(var j in json1[i]){
        console.log(j+":"+json1[i][j])
    }
}

var data=[];for(var i=0;i<3;i++){
    data[i]=function(){console.log(i);
    };
    }
    data[0]();data[1]();data[2]();

var data = [];

for (let i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();

for (var i = 0; i < 3; i++) {
    (function(num) {
        setTimeout(function() {
            console.log(num);
        }, 1000);
    })(i);
}