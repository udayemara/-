function press() {
  document.getElementById("food").textContent =
    "This is a restaurant in Egypt. Celebrities come here, and the food is amazing!";
}
function hi() {
  document.getElementById("about").textContent = `
    English: Certainly! Qasr Al Kababgy is a renowned Eastern restaurant in Egypt, frequented by celebrities and food enthusiasts. Established in 2009 in Kafr El Zayat, it has become one of the most famous grill restaurants in the country. The restaurant offers a diverse menu of Eastern and grilled dishes, prepared with high-quality ingredients that adhere to global health standards. Whether you’re craving kebabs, shawarma, or other delightful specialties, Qasr Al Kababgy is sure to satisfy your taste buds! 🍽️🌟

    عربي: قصر الكبابجي هو مطعم شرقي مشهور في مصر، يستقطب العديد من النجوم والمشاهير. تأسس في عام 2009 في كفر الزيات، وأصبح واحدًا من أشهر مطاعم الشواء في البلاد. يقدم المطعم قائمة متنوعة من الأطباق الشرقية والمشوية، محضرة بمكونات عالية الجودة تلتزم بمعايير الصحة العالمية. سواء كنت تشتهي الكباب أو الشاورما أو أطباقًا أخرى لذيذة، فإن قصر الكبابجي سيُرضي ذوقك! 🍽️🌟
  `;
}
function me() {
  document.getElementById("me").textContent = `
    English:
    Address: Fifth Settlement, North 90th Street, next to PetroSport Club, Sheikh Zayed Entrance 4, Boulevard El Masmeya Touristic Walkway. Wesslet Dhashur Road, North Coast. Alexandria Matrouh Road, in front of Marina 5 Gate. Agricultural Road, Kilometer 104, Kafrelzayat Bridge Entrance, Dafra El Har.
    Phone Number: +20 121 212 0700
    Operating Hours: From 10:00 AM to 1:30 AM

    عربي:
    العنوان: التجمع الخامس، شارع التسعين الشمالي، بجوار نادي بتروسبورت، مدخل الشيخ زايد ٤، مول بوليفارد الممشى السياحي. طريق وصلة دهشور الساحل الشمالي. طريق اسكندرية مطروح، أمام بوابة مارينا 5. الطريق الزراعي كيلو 104، مدخل كوبري كفر الزيات دفرة الحر.
    رقم الهاتف: 01212120700
    مواعيد العمل: من الساعة 10:00 صباحًا حتى الساعة 1:30 صباحًا
  `;
}
function menu() {
  document.getElementById("menu").textContent = `
  عربي:
  موزة بتلو بالشعرية + محاشي أو أرز: بسعر 258 جنيه مصري
  طبق الملوك: مشويات مشكلة + أرز بالخلطة بسعر 395 جنيه مصري.
  طبق الكبابجي المميز: ربع بط + موزة ضاني + محاشي + خضار بسعر 338 جنيه مصري.
  طبق مشويات مشكلة: يتضمن كباب، كفتة، وريش ضاني بسعر 320 جنيه مصري
  طبق فراخ مشوية: نصف فرخة مشوية مع أرز وخضار بسعر 180 جنيه مصري.
  طبق ورق عنب باللحمة: بسعر 150 جنيه مصري.
  طبق فتة باللحمة: بسعر 200 جنيه مصري.
  فتة باللحمة الضاني: 340 جنيه.
  موزة ضاني وأرز ومحاشي: 340 جنيه.
  موزة بتلو بالشعرية وأرز أو محاشي: 351 جنيه.
  طاجن عكاوي وفتة كوارع: 508 جنيه.
  كباب وكفتة مشوية: 250 جنيه.
  شيش طاووق: 220 جنيه.
  حمام محشي: 300 جنيه.
  طاجن بامية باللحمة: 180 جنيه.
  ملوخية بالأرانب: 200 جنيه.
  طاجن مسقعة باللحمة المفرومة: 190 جنيه.
  كبدة مشوية: 210 جنيه.
  طاجن ورق عنب باللحمة: 230 جنيه.
  فراخ مشوية على الفحم: 240 جنيه.
  طاجن بطاطس باللحمة: 200 جنيه.

  English:
  Veal Shank with Vermicelli + Stuffed Vegetables or Rice: EGP 258
  Royal Platter (Mixed Grills + Rice with Nuts): EGP 395
  Special Kababji Platter (Quarter Duck + Lamb Shank + Stuffed Vegetables + Vegetables): EGP 338
  Mixed Grill Platter (Kebab, Kofta, Lamb Chops): EGP 320
  Grilled Chicken Dish (Half Grilled Chicken with Rice and Vegetables): EGP 180
  Vine Leaves Dish with Meat: EGP 150
  Fattah Dish with Meat: EGP 200
  Fattah with Lamb: EGP 340
  Lamb Shank with Rice and Stuffed Vegetables: EGP 340
  Veal Shank with Vermicelli and Rice or Stuffed Vegetables: EGP 351
  Akkawi Casserole and Kawra Fatta: EGP 508
  Grilled Kebab and Kofta: EGP 250
  Shish Tawook: EGP 220
  Stuffed Pigeon: EGP 300
  Okra Casserole with Meat: EGP 180
  Molokhiya with Rabbit: EGP 200
  Moussaka Casserole with Minced Meat: EGP 190
  Grilled Liver: EGP 210
  Vine Leaves Casserole with Meat: EGP 230
  Charcoal Grilled Chicken: EGP 240
  Potato Casserole with Meat: EGP 200
  `;
}
document.getElementById("year").textContent = new Date().getFullYear();

const day = new Date().getDay();
let color;

switch (day) {
  case 0:
    color = "black";
    break;
  case 1:
    color = "goldenrod";
    break;
  case 2:
    color = "yellow";
    break;
  case 3:
    color = "yellowgreen";
    break;
  case 4:
    color = "green";
    break;
  case 5:
    color = "greenyellow";
    break;
  case 6:
    color = "lime";
    break;
}

document.body.style.backgroundColor = color;
