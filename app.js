class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}


class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = ` <div class="card text-center mb-4"> 
            <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">delete</a>
            </div>
        </div>`;

        productList.appendChild(element);
        
        this.cleanForm();
        this.showMessage('Producto agregado', 'success');
    }

    cleanForm(){
        document.getElementById('product-form').reset(); 
    }

    deleteProduct(element){
        if (element.name == 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message , cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div , app);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

    }
}

//DOM Events

document.getElementById('product-form').addEventListener('submit',function(e){

    e.preventDefault();

    let name = document.getElementById('name').value ;
    let price = document.getElementById('price').value;
    let  year = document.getElementById('year').value;


    const product = new Product(name,price,year);

    const uielement = new UI();
    uielement.addProduct(product);

    console.log(name , price, year);
}) ;

document.getElementById('product-list').addEventListener('click',function(e){
    const uielement = new UI();
    uielement.deleteProduct(e.target);
});
