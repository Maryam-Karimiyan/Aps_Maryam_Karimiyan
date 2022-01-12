function combine(...arg) {
  return arg.reduce((result, obj) => {
    Object.keys(obj).forEach(
      (key) => (result[key] = (result[key] || 0) + obj[key])
    );
    return result;
  }, {});
}
///// عملگر Spread ( عملگر سه نقطه )، عملگری کاربردی و سینتکسی سریع برای افزودن آیتم ها به آرایه ها، ترکیب آرایه ها یا Objectها و همچنین دادن آیتم های یک آرایه به عنوان آرگومان های یک تایع.
