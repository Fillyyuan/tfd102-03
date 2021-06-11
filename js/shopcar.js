var svguser = document.querySelectorAll("div.p_inn svg");
// console.log(svguser);
var shopcar = document.getElementsByClassName("btt")[0].children[0];
// console.log(shopcar);            

    svguser.forEach(function(item, index){
        // console.log(item);

        item.addEventListener("click", function(e){

            alert("已加入購物車");

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


            // 購物數字使用
            var manypd = document.querySelectorAll("div.btt-c");
            // console.log(manypd.length);

            var qui = document.getElementsByClassName("qui")[0];
            // console.log(qui)

            // qui.innerHTML = manypd.length;


            
            btn_plus.addEventListener("click", function(){

                let inp_value = inp.value

                inp.value = parseInt(inp_value) + 1;

            });

            btn_less.addEventListener("click", function(){

                if(inp.value == 1){
                    let checks = confirm("確認刪除");
                    if(checks){
                        // console.log(btn_less.closest("div.btt-c"));
                        btn_less.closest("div.btt-c").remove();


                        let manypds = document.querySelectorAll("div.btt-c");
                        console.log(manypds);
                        let quis = document.getElementsByClassName("qui")[0];
                        // console.log(quis);
                        quis.innerHTML = manypd.length - 1;
                        if(manypd.length == 1){
                            qui.classList.remove("lablo");
                        }
                    }
                }else{
                    let inp_value = inp.value

                    inp.value = parseInt(inp_value) - 1;
                }
            });



            qui.classList.add("lablo")

            if(manypd.length == ""){
                qui.classList.remove("lablo");
            }else{
                qui.innerHTML = manypd.length;
            }

        });

    });


    
