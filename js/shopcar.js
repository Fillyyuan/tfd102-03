var svguser = document.querySelectorAll("div.p_inn svg");
// console.log(svguser);
var shopcar = document.getElementsByClassName("btt")[0].children[0];
// console.log(shopcar);            

    svguser.forEach(function(item, index){
        // console.log(item);

        item.addEventListener("click", function(e){

            let product_name = item.previousElementSibling.outerHTML;
            // console.log(product_name);
            let product_pit = item.closest("div.p_inn").children[0].outerHTML;
            // console.log(product_pit);  
            
            
            let product_detial = 
            `
            <div class="btt-c">       
                ${product_pit}
                <div class="btt-in">
                    ${product_name}
                    數量<input type="text" value="1">
                    <button type="button" class="btn_plus">+</button>
                    <button type="button" class="btn_less">-</button>
                </div>
                <div></div>
            </div>
            `
            shopcar.insertAdjacentHTML("afterend", product_detial);  
            


            var btn_plus = document.querySelectorAll("button.btn_plus")[0]
            // console.log(btn_plus);

            var btn_less = document.querySelectorAll("button.btn_less")[0]
            // console.log(btn_less);

            var inp = btn_plus.previousElementSibling;
            // console.log(inp);
            
            btn_plus.addEventListener("click", function(){

                let inp_value = inp.value

                inp.value = parseInt(inp_value) + 1;

            });

            btn_less.addEventListener("click", function(){

                if(inp.value == 1){
                    alert("不能再少啦~~")
                }else{
                    let inp_value = inp.value

                    inp.value = parseInt(inp_value) - 1;
                }
            });

        });

    });
    
