const fs = require("fs");

module.exports = class pinkdb {

   
    constructor(filePath){

        this.jsonFilePath = filePath || "./db.json";

    
        this.data = {};

        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }
    }

   
    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
            this.data = savedData;
        }
    }

   
    saveDataToFile(){
        fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8");
    }

  
    get(key){
        return this.data[key];
    }

		 al(key){ //get
        return this.data[key];
    }

   fetch(key){
        return this.data[key];
    }

		cek(key){ //fetch
        return this.data[key];
    }

    has(key){
        return Boolean(this.data[key]);
    }
    
   var(key){ //hhas
        return Boolean(this.data[key]);
    }
    
    set(key, value){ 
        this.data[key] = value;
        this.saveDataToFile();
    }


    ayarla(key, value){ //set
        this.data[key] = value;
        this.saveDataToFile();
    }

   
    delete(key){
        delete this.data[key];
        this.saveDataToFile();
    }
    sil(key){ //delete
        delete this.data[key];
        this.saveDataToFile();
    }


    add(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
    }

    ekle(key, count){ //ekle
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
    }

    subtract(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }

    cikar(key, count){ //subtract
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }

     eksilt(key, count){ //subtract
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }

    push(key, element){
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }


    it(key, element){ //push
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }


    clear(){
        this.data = {};
        this.saveDataToFile();
    }

    temizle(){ //clear
        this.data = {};
        this.saveDataToFile();
    }

};
