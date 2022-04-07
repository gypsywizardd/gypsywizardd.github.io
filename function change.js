function change(){
              var select = document.getElementById('demo');
              select.style.color='blue';
              select.style.backgroundColor='lightblue';
              select.style.fontFamily='Arial';
              select.innerHTML='Hi';
              select.style.textAlign='center';
}
function ha(){
         alert('Nice to see you')
}
function sum1(){
        var a = parseFloat(prompt('first number:'));
        var b = parseFloat(prompt('second number:'));
         document.getElementById('gan').innerHTML=a+b;
}
function sum2(){
        var a = prompt('First name')
        var b = prompt('Second name')
          document.getElementById('yu').innerHTML='Nice to meet you'+a+b;
}
function question6more(f){
         return (5/9) * (f-32)
}
function question6(){
       document.getElementById("question6").innerHTML =  question6more(20);
}