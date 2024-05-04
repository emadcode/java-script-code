//Array دي امثله عن    


// إنشاء Array فارغ
let emptyArray = [];

// إنشاء Array مع عناصر محددة
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'apple', true];

// الوصول إلى عنصر معين في Array باستخدام الفهرس
console.log(numbers[2]); // سيطبع 3

// تغيير قيمة عنصر معين في Array
omda[1] = 'grape';
console.log(omda); // سيطبع ['apple', 'grape', 'orange']

// إضافة عنصر جديد إلى نهاية Array باستخدام push()
fruits.push('kiwi');
console.log(fruits); // سيطبع ['apple', 'grape', 'orange', 'kiwi']

// إزالة عنصر من نهاية Array باستخدام pop()
let lastNumber = numbers.pop();
console.log(lastNumber); // سيطبع 5
console.log(numbers); // سيطبع [1, 2, 3, 4]

// الحصول على طول Array باستخدام خاصية length
console.log(numbers.length); // سيطبع 4

// الاستعراض عبر عناصر Array باستخدام حلقة for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// سيطبع:
// apple
// grape
// orange
// kiwi
