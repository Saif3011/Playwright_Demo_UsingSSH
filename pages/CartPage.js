exports.CartPage=class CartPage{


constructor(page){
this.page=page;
this.noOfProduct='//tbody[@id="tbodyid"]/tr/td[2]'
}



async checkProductIsInCart(productName){
    //number of products added to the cart
    const ProductsInCart = await this.page.$$(this.noOfProduct)
    for(const product of ProductsInCart){
        console.log(await product.textContent());
        //comparing with products
        if(productName===await product.textContent()){
            return true;
            break;
        }
    }
}



}