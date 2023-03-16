<script>
// Отримавши повідомлення після "onmessage" події потік робить відповідь.
onmessage = function (e) {
    // Встановлюємо затримку часу на розрахунок
    setTimeout(function () {
    // Надсилання даних основному потоку. На сторінці буде викликана подія message
    postMessage(e.data);
     },2000)
}
</script>
