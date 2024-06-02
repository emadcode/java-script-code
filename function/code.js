function stableSort(array, property) {
  // Add an index to each element in the array   
  // const indexedArray = array.map((item, index) => ({ ...item, _index: index }));
  
    // ترتيب المصفوفة باستخدام الخاصية والمؤشر للحفاظ على الترتيب الثابت
    indexedArray.sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return a._index - b._index;
    });
  
    // إزالة المؤشر المؤقت من العناصر المعادة
    return indexedArray.map(item => {
      const { _index, ...rest } = item;
      return rest;
    });
  }
  
  // مثال استخدام
  const data = [
    { name: "omda", age: 22 },
    { name: "Bob", age: 25 },
    { name: "ahmed", age: 25 },
    { name: "mohamed", age: 35 },
  ];
  
  const sortedData = stableSort(data, 'age');
  console.log(sortedData);
  