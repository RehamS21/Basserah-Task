
function calculate(){
    var input_1 = parseInt(document.getElementById("product_id").value);
var input_2 = parseInt(document.getElementById("pay").value);

var machine_products = [{"product": "chocolate" , "price" : 10},
                    {"product": "chips" , "price" : 15},
                    {"product": "coffee" , "price" : 20}];

switch(input_1){
    case 1:
        if(input_2 < machine_products[0].price){
            document.getElementById("result").innerHTML = "Sorry cannot pay";
        }else{
            var result = input_2 - machine_products[0].price;
            document.getElementById("result").innerHTML = "The Result = "+ result;
        }
        break;
        case 2:
            if(input_2 < machine_products[1].price){
                document.getElementById("result").innerHTML = "Sorry cannot pay";
            }else{
                var result = input_2 - machine_products[1].price;
                document.getElementById("result").innerHTML = "The Result = "+ result;
            }
            break;

            case 3:
                if(input_2 < machine_products[2].price){
                    console.log("Sorry, you can't take this product");
                }else{
                    var result = input_2 - machine_products[2].price;
                    document.getElementById("result").innerHTML = "The Result = "+ result;
                }
                break;
}
}

