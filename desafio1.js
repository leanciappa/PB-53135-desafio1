class  ProductManager{
    constructor(path){
        this.path = path
        this.id = 0;
        this.products =[];
    }
    
    
    addProduct(title, description, price, thumbnail, code, stock){
        this.products.push({ id: this.id, title, description, price, thumbnail, code, stock})
        this.id = this.id+1;
    }
    getAllProducts(){
        return this.products;
    }

    getProductById(id){
        return this.products.find(prod => prod.id === parseInt(id));
    }
}


let productManager = new ProductManager();
productManager.addProduct("cacao", "polvo de chocolate", 34, "./sfs´dflspdf", 34, 34)
productManager.addProduct("arroz", "alimento", 34, "./sfs´dflspdf", 34, 34)
allProducts = productManager.getAllProducts()
console.log(allProducts)
console.log (productManager.getProductById(1))
