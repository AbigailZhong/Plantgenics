class Plant{
    constructor(public id: number, public name: string, public type: string, 
        public image: string, public price: number, public description?: string){
            this.id = id;
            this.name = name;
            this.type = type;
            this.image = image;
            this.price = price;
    }
}

export default Plant;