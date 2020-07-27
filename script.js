// active number buttons
function insertNumbers(num) {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input + num;
}
// active delete button
function deleteItem() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.slice(0, -1);
}
// active clear button
function clearAll() {
    document.getElementById('input').value = "";
}
// active equal button
function equal() {
    let input = document.getElementById('input');
    document.getElementById('input').value = eval(input.value);
}