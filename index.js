var arr = document.querySelectorAll(".box-page");
for(var n = 0 ; n < arr.length ; n++){// 遍历6个面中的每一个面
    for(var r = 0 ; r < 3 ; r++){// 外层循环遍历行
        for(var c = 0 ; c < 3 ; c++){//内层循环遍历列
            var divs = document.createElement("div")// 创建元素
            divs.style.cssText = "width:100px; height:100px; border:2px solid #fff; box-sizing:border-box;" +
                "/*background-color:red;*/ position:absolute; background-image:url(img/a"+n+".jpg); " +
                "background-size:300px 300px;";
            arr[n].appendChild(divs);
            divs.style.left = c*100+"px";
            divs.style.top = r*100+"px";
            divs.style.backgroundPositionX = -c*100+"px";
            divs.style.backgroundPositionY = -r*100+"px";
        }
    }
}