# PlasmaDB

## Örnek kod

önemli: Bunların yanında modülü normal quick.db kullanır gibi kullanabilirsiniz

```js
const Database = require("plasma.db");
const db = new Database("./database.json");

// Data ayarlama (db.set)
db.ayarla("Plasmic-Üye-Sayısı", 2000);

// Data alma (db.get)
db.al("Plasmic-Üye-Sayısı"); // 

// Data silme (db.delete)
db.sil("Plasmic-Üye-Sayısı"); // 

db.al("Hello"); // bilinmeyen (undefined) [db.get]
db.var("Hello"); // yanlış (false) [db.has]
db.fetch("Hello"); // bilinmeyen (undefined)

db.ayarla("yaş", 10); 
db.ekle("yaş", 1); // yaş'a bir ekler
db.cikar("yaş", 9); // yaştan 9 çıkarır, sonuç: 2

db.ayarla("array", [ "elma" ]);
db.it("array", "portakal"); // [ "elma", "portakal" ]

// Db'yi temizleme
db.temizle();
```
#
